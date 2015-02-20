/* simple functions for the corporate site prototype */

$( document ).ready(function() {
  // load the includes
  $( "header#main" ).load( "includes/header.html" );
  $( "#search-hero" ).load( "includes/homepage/block-search-hero.html", function() {
    $('#search-container').affix({
      offset: {
        top: 110,
        bottom: function () {
          return (this.bottom = $('#insta-feed').outerHeight(true))
        }
      }
    })
  } );
  $( "#footer" ).load( "includes/footer.html" );
  
  setTimeout(function() {
    $("body").fadeIn('fast', function() {});
  }, 500);

  $( "body" ).on( "click", ".nav-toggle", function( event ) {
    event.preventDefault();
    $( 'body' ).toggleClass( "show-nav" );
  });

});