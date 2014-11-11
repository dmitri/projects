/* simple functions for the prototype */

$( document ).ready(function() {
  // load the includes
  $( "header#main" ).load( "includes/header.html" );
  $( "#crumb" ).load( "includes/block-crumb.html" );
  $( "#carousel" ).load( "includes/carousel.html" );
  $( "#love-and-know" ).load( "includes/block-love-and-know.html" );
  $( "#property-header" ).load( "includes/block-property-header.html" );
  $( "#collection-reviews-ratings" ).load( "includes/block-collection-reviews-ratings.html" );
  $( "#book-with-us" ).load( "includes/block-book-with-us.html" );
  $( "#amenities" ).load( "includes/block-amenities.html" );
  $( "#search-form" ).load( "includes/block-content-search-form.html" );
  $( "#room-list" ).load( "includes/block-room-list.html" );
  $( "#info-tabs" ).load( "includes/info-tabs.html" );
  $( "#footer" ).load( "includes/footer.html" );
  
  setTimeout(function() {
    $("#grace-wrap").fadeIn();
  }, 500);
  
});