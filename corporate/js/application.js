/* simple functions for the corporate site prototype */

$( document ).ready(function() {
  // load the includes
  $( "header#main" ).load( "includes/header.html" );
  $( "#footer" ).load( "includes/footer.html" );
  
  // fade the page in gracefully, then set up the events
  setTimeout(function() {
    $("body").fadeIn('fast', function() { setEvents(); });
  }, 500);


  setEvents = function() {
  
    // set up the main nav dropdown behavior #############/
    // open
    $('#mainnav-drop').on('show.bs.dropdown', function () {
      toggleNavTrigger();
    });
    // close 
    $('#mainnav-drop').on('hide.bs.dropdown', function () {
      toggleNavTrigger();
    });
  
  }

});


toggleNavTrigger = function() {
  $('.nav-toggle').toggleClass('on');
  $('.nav-toggle i').toggleClass('fa-bars').toggleClass('fa-times');
}