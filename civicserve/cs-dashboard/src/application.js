// Initialize the functions when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {sanitize: false, html: true}));

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


  setUpRightSidebar();

  // Wait 1 second after load and then trigger the open of the side panel
  setTimeout(function() {
    document.getElementById('open-panel').click();
  }, 300);
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

