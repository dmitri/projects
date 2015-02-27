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
    $('#main-nav').fadeIn('fast');
    $('.nav-toggle').addClass('on');
    $('.nav-toggle i').removeClass('fa-bars').addClass('fa-times');
   
  });
  
  $(document).click(function(event) {
    $navToggle = $('.nav-toggle');
    $nav = $('#main-nav');
    if(!$(event.target).closest($navToggle).length) {
       if($nav.is(":visible")) {
           $nav.fadeOut(100);
           $navToggle.removeClass('on');
           $navToggle.find('i').removeClass('fa-times').addClass('fa-bars');
       }
    }
  });
});