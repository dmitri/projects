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
  
    // set up the main nav dropdown behavior 
    // open
    $('#mainnav-drop').on('show.bs.dropdown', function () {
      toggleNavTrigger();
    });
    // close 
    $('#mainnav-drop').on('hide.bs.dropdown', function () {
      toggleNavTrigger();
    });
		
		// lazy load the images for better performance
    $("img").unveil();
		
		// set up the masthead behavior (shadow, shrink, grow)
		setMastheadBehavior();

  
  }

});


toggleNavTrigger = function() {
  $('.nav-toggle').toggleClass('on');
  $('.nav-toggle i').toggleClass('fa-bars').toggleClass('fa-times');
  $('html, body').toggleClass('no-scroll');
}

setMastheadBehavior = function() {
	$masthead = $('header#main');
	$(window).scroll(function() {
		// add a light shadow if not at the top
		$(this).scrollTop() == 0 ? $masthead.removeClass('shadow') : $masthead.addClass('shadow');
		// shrink the masthead a bit if scrolling
		if($(window).width() > 979) {
			$(this).scrollTop() > 100 ? $masthead.addClass('shrink') : $masthead.removeClass('shrink');
		} 
	});
}