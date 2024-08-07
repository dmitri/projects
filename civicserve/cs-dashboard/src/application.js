// Initialize the functions when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {sanitize: false, html: true}));

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


  if (document.getElementById('open-panel')) {
    setUpRightSidebar();

      // Wait 1 second after load and then trigger the open of the side panel
      setTimeout(function() {
        document.getElementById('open-panel').click();
      }, 300);
  }

  document.getElementById('filter-toggle').addEventListener('click', function() {
    var filterPanel = document.getElementById('filter-panel');
    
      // Check if the filter panel exists
      if (filterPanel) {
          // Toggle the display style of the filter panel
          if (filterPanel.style.display === 'none' || filterPanel.style.display === '') {
              filterPanel.style.display = 'block'; // Show the panel
          } else {
              filterPanel.style.display = 'none';  // Hide the panel
          }
          
          // Scroll to the top of the page
          window.scrollTo({
              top: 0,
              behavior: 'smooth' // Smooth scrolling
          });
      }
  });

  // Find all div elements with the class 'dx-select-checkbox'
  var checkboxes = document.querySelectorAll('.dx-select-checkbox');

  // Add the click event listener to each checkbox
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', toggleCheckbox);
  });


});


// Functions
setUpRightSidebar = function() {
  document.getElementById('open-panel').addEventListener('click', function() {
      document.getElementById('side-panel').style.right = '0'; /* Move the panel into view */
      document.getElementById('open-panel').style.display = 'none'; /* Hide the open button */
      document.getElementById('close-panel').style.display = 'flex'; /* Show the close button */
      document.getElementById('main-content-wrapper').classList.add('side-panel-open'); /* Add a class to the main content wrapper */
  });

  document.getElementById('close-panel').addEventListener('click', function() {
      document.getElementById('side-panel').style.right = '-350px'; /* Move the panel out of view */
      document.getElementById('open-panel').style.display = 'flex'; /* Show the open button */
      document.getElementById('close-panel').style.display = 'none'; /* Hide the close button */
      document.getElementById('main-content-wrapper').classList.remove('side-panel-open'); /* Add a class to the main content wrapper */
  });
}


// Function to toggle the 'dx-checkbox-checked' class on the parent element with 'dx-select-checkbox' class
function toggleCheckbox(event) {
  // Check if the clicked element is the 'dx-select-all' checkbox
  if (event.target.id === 'dx-select-all') {

    var checkboxes = document.querySelectorAll('div.dx-select-checkbox');
    var allChecked = Array.from(checkboxes).every(function(checkbox) {
        return checkbox.classList.contains('dx-checkbox-checked');
    });
    
    checkboxes.forEach(function(checkbox) {
        if (allChecked) {
            checkbox.classList.remove('dx-checkbox-checked');
        } else {
            checkbox.classList.add('dx-checkbox-checked');
        }
    });
  } else {
      // Find the closest parent with 'dx-select-checkbox' class
      var checkbox = event.target.closest('.dx-select-checkbox');
      if (checkbox) {
          checkbox.classList.toggle('dx-checkbox-checked');
      }
  }
}

toggleAllCollapsibles = function() {
  const collapsibles = document.querySelectorAll('.accordion-collapse');
  const toggleButton = document.querySelector('#toggleAll span');
  const isAnyOpen = Array.from(collapsibles).some(collapse => collapse.classList.contains('show'));

  collapsibles.forEach(collapse => {
    if (isAnyOpen) {
      // Close all
      bootstrap.Collapse.getOrCreateInstance(collapse).hide();
    } else {
      // Open all
      bootstrap.Collapse.getOrCreateInstance(collapse).show();
    }
  });

  // Update button text
  toggleButton.textContent = isAnyOpen ? 'Open All' : 'Close All';
}

sortTable = function(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("businessTable");
  switching = true;
  dir = "asc";

  // Reset sort icons for all headers
  var headers = document.querySelectorAll('td[role="columnheader"]');
  for (var j = 0; j < headers.length; j++) {
      var sortIcon = headers[j].querySelector(".dx-sort");
      if (sortIcon) {
          sortIcon.classList.remove("dx-sort-up", "dx-sort-down");
          sortIcon.classList.add("dx-sort-none");
      }
  }

  while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");

      for (i = 0; i < (rows.length - 1); i++) { // Start from 1 to skip the header row
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];

          if (dir === "asc") {
              if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
                  shouldSwitch = true;
                  break;
              }
          } else if (dir === "desc") {
              if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
                  shouldSwitch = true;
                  break;
              }
          }
      }

      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount++;
      } else {
          if (switchcount === 0 && dir === "asc") {
              dir = "desc";
              switching = true;
          }
      }
  }

  // Set the sort icon for the sorted column
  var header = headers[n - 1]; // Adjust for 0-based index
  var sortIcon = header.querySelector(".dx-sort");
  if (sortIcon) {
      sortIcon.classList.remove("dx-sort-none");
      sortIcon.classList.add(dir === "asc" ? "dx-sort-up" : "dx-sort-down");
  }
}