/* simple functions for the prototype */

$( document ).ready(function() {
  // load the includes
  $( "header#main" ).load( "includes/header.html" );
  $( "#crumb" ).load( "includes/property/block-crumb.html" );
  $( "#carousel" ).load( "includes/property/screen-gallery.html" );
  $( "#love-and-know" ).load( "includes/property/block-love-and-know.html" );
  $( "#collection-reviews-ratings" ).load( "includes/property/block-collection-reviews-ratings.html" );
  $( "#book-with-us" ).load( "includes/property/block-book-with-us.html" );
  $( "#amenities" ).load( "includes/property/block-amenities.html" );
  $( "#content-search-form" ).load( "includes/property/block-content-search-form.html" );
  $( "#calendar-container").load("includes/fragment-calendar-widget.html");
  $( "#room-list" ).load( "includes/property/block-room-list.html" );
  $( "#info-tabs" ).load( "includes/property/info-tabs.html" );
  $( "#info-tabs.nested" ).load( "includes/property/info-tabs2.html" );
  $( "#cross-sell" ).load( "includes/property/block-cross-sell.html" );
  $( "#footer" ).load( "includes/footer.html" );
  
  
  setTimeout(function() {
    $("#grace-wrap").fadeIn('fast', function() {
      checkWidthAndHeight();
      propertyFooterPositionToggle();
    });
  }, 500);

  // Bind event listeners for resizing and scrolling
  $(window).resize(checkWidthAndHeight);
  $(window).scroll(propertyFooterPositionToggle);

});

// check the width
// Optimalisation: Store the references outside the event handler:
var $window = $(window);
var $pane = $('#room-search');

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
    
    // if so - place the room-list where it fits best for the width
    if (windowsize < 1200) {
        $pane.css('margin-top', 0);
    } else {
        //if the window is => 1200px wide then offset the room-list 
        // offset the location of the room-list row
        roomlist_offset = $("#com-left-container").height() - $("#com-left").height();
        $pane.css('margin-top', -roomlist_offset);
    }

    propertyFooterPositionToggle();

}

propertyFooterPositionToggle = function() {
  var $galleryHeight = $("#screen-gallery").position().top + $("#screen-gallery").height()
  if(!isScrolledIntoView("#gallery-bottom")) {
    if($(window).scrollTop() <= $galleryHeight) {
      $("#property-details-container").addClass('fixed');
    } else {
      $("#property-details-container").removeClass('fixed');
    }
  } else {
    $("#property-details-container").removeClass('fixed');
  }
}

isScrolledIntoView = function(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

