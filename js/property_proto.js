/* simple functions for the prototype */

$( document ).ready(function() {
  // load the includes
  $( "header#main" ).load( "includes/header.html" );
  $( "#crumb" ).load( "includes/block-crumb.html" );
  $( "#carousel" ).load( "includes/screen-gallery.html" );
  $( "#love-and-know" ).load( "includes/block-love-and-know.html" );
  $( "#property-header" ).load( "includes/block-property-header.html" );
  $( "#collection-reviews-ratings" ).load( "includes/block-collection-reviews-ratings.html" );
  $( "#book-with-us" ).load( "includes/block-book-with-us.html" );
  $( "#amenities" ).load( "includes/block-amenities.html" );
  $( "#content-search-form" ).load( "includes/block-content-search-form.html" );
  $( "#calendar-container").load("includes/fragment-calendar-widget.html");
  $( "#room-list" ).load( "includes/block-room-list.html" );
  $( "#info-tabs" ).load( "includes/info-tabs.html" );
  $( "#cross-sell" ).load( "includes/block-cross-sell.html" );
  $( "#footer" ).load( "includes/footer.html" );
  
  
  setTimeout(function() {
    $("#grace-wrap").fadeIn('fast', function() {
      // Set the room list location
      checkWidth();
    });
  }, 500);
  
  // check the width
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);
  var $pane = $('#room-search');

  function checkWidth() {
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
          roomlist_offset = $("#com-left-container").height() - $("#com-left").height() + 110;
          $pane.css('margin-top', -roomlist_offset);
      }
  }
  
  
  // Bind event listener
  $(window).resize(checkWidth);
  
  // set the window-shade
  $('#calendar-trigger')
      .scrolledIntoView()
      .on('scrolledin', function () { 
              $("#window-shade").slideUp(); })
      .on('scrolledout', function () { 
            if($(document).scrollTop() > 200) {
              $("#window-shade").slideDown(300);
              } else {
                $("#window-shade").hide();
              }
          });
  
});

/* show / hide window shade based on whether the carousel date picker widget is showing or not */

(function ($) {
   var $window = $(window),
       _watch = [],
       _buffer;

   function test($el) {
      var docViewTop = $window.scrollTop(),
          docViewBottom = docViewTop + $window.height(),
          elemTop = $el.offset().top,
          elemBottom = elemTop + $el.height();

      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
                && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
   }

   $window.on('scroll', function ( e ) {
         if ( !_buffer ) {
            _buffer = setTimeout(function () {
               checkInView( e );
               _buffer = null;
            }, 300);
         }
      });
      
   function checkInView( e ) {

      $.each(_watch, function () {

         if ( test( this.element ) ) {
            if ( !this.invp ) {
               this.invp = true;
               if ( this.options.scrolledin ) 
                   this.options.scrolledin.call( this.element, e );
                
               this.element.trigger( 'scrolledin', e );
            }
         } else if ( this.invp ) {
            this.invp = false;
            if ( this.options.scrolledout ) 
                this.options.scrolledout.call( this.element, e );
             
            this.element.trigger( 'scrolledout', e );
         }
      });
   }

   function monitor( element, options ) {
      var item = { element: element, options: options, invp: false };
      _watch.push(item);
      return item;
   }

   function unmonitor( item ) {
      for ( var i=0;i<_watch.length;i++ ) {
         if ( _watch[i] === item ) {
            _watch.splice( i, 1 );
            item.element = null;
            break;
         }
      }
      console.log( _watch );
   }

   var pluginName = 'scrolledIntoView',
       settings = {
         scrolledin: null,
         scrolledout: null
       }

   $.fn[pluginName] = function( options ) {
         var options = $.extend({}, settings, options);
         this.each( function () {
               var $el = $(this),
                   instance = $.data( this, pluginName );
               if ( instance ) {
                  instance.options = options;
               } else {
                  $.data( this, pluginName, monitor( $el, options ) );
                  $el.on( 'remove', $.proxy( function () {
                        $.removeData(this, pluginName);
                        unmonitor( instance );
                     }, this ) );
               }
            });
         return this;
      }
})(jQuery);



