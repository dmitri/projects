/* simple functions for the prototype */

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
  $( "#top-sales" ).load( "includes/homepage/block-top-sales.html" );
  $( "#collections" ).load( "includes/homepage/block-collections.html" );
  $( "#magazine" ).load( "includes/homepage/block-magazine.html" );
  $( "#cross-sell" ).load( "includes/homepage/block-cross-sell.html" );
  $( "#insta-feed" ).load( "includes/homepage/block-insta-feed.html" );
  $( "#upcoming" ).load( "includes/homepage/block-upcoming.html" );
  $( "#footer" ).load( "includes/footer.html" );
  
  setTimeout(function() {
    $("#grace-wrap").fadeIn('fast', function() {
      checkWidthAndHeight();
    });
  }, 500);

  // Bind event listeners for resizing and scrolling
  $(window).resize(checkWidthAndHeight);

});

// check the width
var $window = $(window);

checkWidthAndHeight = function() {
    var windowsize = $window.width();
    
    // first make sure we're within the scope of the project
    if (windowsize < 753) {
        $("#grace-wrap").fadeOut('fast', function() {
          $("#mobile-notification").fadeIn('fast');
        });
        
    } else {
        $("#mobile-notification").fadeOut('fast', function() {
          $("#grace-wrap").fadeIn('fast');
        });
    }

}