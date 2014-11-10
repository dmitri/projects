/* simple functions for the prototype */

$( document ).ready(function() {
  // load the includes
  $( "header#main" ).load( "includes/header.html" );
  $( "#carousel" ).load( "includes/carousel.html" );
  $( "#amenities" ).load( "includes/amenities.html" );
  $( ".search-form" ).load( "includes/search-form.html" );
  $( ".room-selector-placeholder" ).load( "includes/room-list.html" );
  $( "#info-tabs" ).load( "includes/info-tabs.html" );
  $( "#footer" ).load( "includes/footer.html" );
  
  setTimeout(function() {
    $("#grace-wrap").fadeIn();
  }, 1000);
  
});