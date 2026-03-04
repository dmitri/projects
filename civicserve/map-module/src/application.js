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

  // set up the selects

  var multiSelects = document.querySelectorAll('.custom-multi-select');

  multiSelects.forEach(function(multiSelect) {
      var selectedOptions = multiSelect.querySelector('.selected-options');
      var selectedOptionsPlaceholder = multiSelect.querySelector('.selected-options-placeholder');
      var optionsList = multiSelect.querySelector('.options-list');
      var options = multiSelect.querySelectorAll('.option');
      var fundingSelect = document.getElementById('funding-type-select');
      var fundingPlaceholder = fundingSelect ? fundingSelect.querySelector('.selected-options-placeholder') : null;
      var closeButton = multiSelect.querySelector('.custom-multi-select-close');
  
      // Function to deselect all options except "None"
      function deselectAllExceptNone() {
          options.forEach(function(option) {
              if (option.getAttribute('data-value') !== 'none') {
                  option.classList.remove('selected');
                  var spanToRemove = selectedOptions.querySelector('span[data-value="' + option.getAttribute('data-value') + '"]');
                  if (spanToRemove) {
                      spanToRemove.remove();
                  }
              }
          });
  
          // Clear all selections from funding-type-select
          if (fundingSelect) {
              var fundingOptions = fundingSelect.querySelectorAll('.option');
              fundingOptions.forEach(function(fundingOption) {
                  fundingOption.classList.remove('selected');
              });
  
              // Remove all selected-option-tags and show placeholder
              fundingSelect.querySelectorAll('.selected-option-tag').forEach(function(tag) {
                  tag.remove();
              });
              if (fundingPlaceholder) {
                  fundingPlaceholder.style.display = 'block';
              }
          }
  
          // Ensure "None" remains as a selected-option-tag
          var noneOption = optionsList.querySelector('.option[data-value="none"]');
          if (noneOption && !selectedOptions.querySelector('span[data-value="none"]')) {
              var span = document.createElement('span');
              span.setAttribute('data-value', 'none');
              span.setAttribute('class', 'selected-option-tag');
              span.textContent = noneOption.textContent.trim();
  
              // Add the "x" remove button
              var removeBtn = document.createElement('span');
              removeBtn.setAttribute('class', 'remove-option');
              removeBtn.textContent = 'x';
              span.appendChild(removeBtn);
  
              selectedOptions.appendChild(span);
  
              // Add event listener to the remove button
              removeBtn.addEventListener('click', function(e) {
                  e.stopPropagation(); // Prevent the click from toggling the option
                  span.remove(); // Remove the selected option from the list
                  noneOption.classList.remove('selected'); // Uncheck the option in the options list
  
                  // Check selections and update the funding select state
                  checkSelections();
              });
          }
  
          // Hide placeholder when "None" is selected
          selectedOptionsPlaceholder.style.display = 'none';
      }
  
      // Function to check if at least one option is selected that isn't "None"
      function checkSelections() {
          var anyValidSelection = false;
  
          options.forEach(function(option) {
              if (option.classList.contains('selected') && option.getAttribute('data-value') !== 'none') {
                  anyValidSelection = true;
              }
          });
  
          if (anyValidSelection) {
              if (fundingSelect) {
                  fundingSelect.classList.remove('disabled');
              }
              selectedOptionsPlaceholder.style.display = 'none';
          } else {
              if (fundingSelect) {
                  fundingSelect.classList.add('disabled');
              }
              // Only show the placeholder if "None" is NOT selected
              var noneOption = optionsList.querySelector('.option[data-value="none"]');
              var noneSelected = noneOption ? noneOption.classList.contains('selected') : false;
              if (!noneSelected) {
                  selectedOptionsPlaceholder.style.display = 'block';
              }
          }
      }
  
      // Toggle the visibility of the options list when the select is clicked
      selectedOptions.addEventListener('click', function() {
          optionsList.style.display = optionsList.style.display === 'none' || optionsList.style.display === '' ? 'block' : 'none';
      });
  
      // Close the options list if clicked outside or if the close button is clicked
      document.addEventListener('click', function(event) {
          if (!multiSelect.contains(event.target) || (closeButton && closeButton.contains(event.target))) {
              optionsList.style.display = 'none';
          }
      });
  
      options.forEach(function(option) {
          option.addEventListener('click', function() {
              var value = option.getAttribute('data-value');
  
              if (value === 'none') {
                  // If "None" is selected, deselect all other options and clear funding selections
                  deselectAllExceptNone();
              } else {
                  // If any other option is selected, deselect "None"
                  var noneOption = optionsList.querySelector('.option[data-value="none"]');
                  if (noneOption) {
                      noneOption.classList.remove('selected');
                      var noneSpanToRemove = selectedOptions.querySelector('span[data-value="none"]');
                      if (noneSpanToRemove) {
                          noneSpanToRemove.remove();
                      }
                  }
              }
  
              // Toggle the selected state of the clicked option
              option.classList.toggle('selected');
  
              if (option.classList.contains('selected') && value !== 'none') {
                  // Add to selected options
                  var span = document.createElement('span');
                  span.setAttribute('data-value', value);
                  span.setAttribute('class', 'selected-option-tag');
                  span.textContent = option.textContent.trim();
  
                  // Add the "x" remove button
                  var removeBtn = document.createElement('span');
                  removeBtn.setAttribute('class', 'remove-option');
                  removeBtn.textContent = 'x';
                  span.appendChild(removeBtn);
  
                  selectedOptions.appendChild(span);
  
                  // Add event listener to the remove button
                  removeBtn.addEventListener('click', function(e) {
                      e.stopPropagation(); // Prevent the click from toggling the option
                      span.remove(); // Remove the selected option from the list
                      option.classList.remove('selected'); // Uncheck the option in the options list
  
                      // Check selections and update the funding select state
                      checkSelections();
                  });
              } else if (!option.classList.contains('selected')) {
                  // Remove from selected options
                  var spanToRemove = selectedOptions.querySelector('span[data-value="' + value + '"]');
                  if (spanToRemove) {
                      spanToRemove.remove();
                  }
              }
  
              // Check selections and update the funding select state
              checkSelections();
          });
      });
  
      // Initial check on page load
      checkSelections();
  });
  
  



  // Listen for when the modal is fully shown
    var myModal = document.getElementById('columnsModal'); // Replace with your modal's ID

    if (myModal) {
        myModal.addEventListener('shown.bs.modal', function () {
            console.log("Modal is fully shown.");

            var switchElement = document.getElementById('flexSwitchBusinessOwner');
            var saveButton = document.getElementById('save-column-changes');

            console.log("Switch element inside modal:", switchElement);
            console.log("Save button element:", saveButton);

            if (switchElement && saveButton) {
                // Add event listener to the Save button
                saveButton.addEventListener('click', function() {
                    console.log("Save button clicked.");

                    // Show spinner on the save button
                    saveButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...';

                    // Check the switch state and apply changes
                    var isChecked = switchElement.checked;
                    console.log("Switch state at save:", isChecked);
                    toggleAddColumns(isChecked);

                    // Close the modal after a short delay (to simulate processing)
                    setTimeout(function() {
                        var bootstrapModal = bootstrap.Modal.getInstance(myModal); // Bootstrap 5 method to get modal instance
                        bootstrapModal.hide();

                        // Optionally, reset the Save button's text after saving
                        saveButton.innerHTML = 'Save';
                    }, 1000); // Adjust delay as needed
                });
            } else {
                console.log("Switch or Save button element not found.");
            }

            function toggleAddColumns(isChecked) {
                var addColumnElements = document.querySelectorAll('.add-column');
                console.log("Number of elements with class 'add-column':", addColumnElements.length);

                addColumnElements.forEach(function(element) {
                    console.log("Toggling element:", element, "New display state:", isChecked ? 'table-cell' : 'none');
                    element.style.display = isChecked ? 'table-cell' : 'none';
                });

                // Force reflow for the table
                var table = document.getElementById('businessTable');
                if (table) {
                    table.style.display = 'none';
                    table.offsetHeight; // Trigger reflow
                    table.style.display = 'table';
                }
            }
        });
    } else {
        console.log("Modal element not found.");
    }

   


    var filterToggle = document.getElementById('filter-toggle');

    // Check if the filter toggle button exists
    if (filterToggle) {
        filterToggle.addEventListener('click', function() {
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
    }

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

function toggleAddColumns(isChecked) {
  var addColumnElements = document.querySelectorAll('.add-column');
  console.log("Number of elements with class 'add-column':", addColumnElements.length);

  addColumnElements.forEach(function(element) {
      console.log("Toggling element:", element, "New display state:", isChecked ? 'table-cell' : 'none');
      element.style.display = isChecked ? 'table-cell' : 'none';
  });
}


// Function to toggle the 'dx-checkbox-checked' class on the parent element with 'dx-select-checkbox' class
function toggleCheckbox(event) {
  // Function to check if any checkbox is checked
  function updateBatchCtasVisibility() {
      var checkboxes = document.querySelectorAll('div.dx-select-checkbox');
      var anyChecked = Array.from(checkboxes).some(function(checkbox) {
          return checkbox.classList.contains('dx-checkbox-checked');
      });

      var batchCtas = document.getElementById('batch-ctas');
      if (anyChecked) {
          batchCtas.style.display = 'flex';
      } else {
          batchCtas.style.display = 'none';
      }
  }

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

  // Update visibility of batch-ctas
  updateBatchCtasVisibility();
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