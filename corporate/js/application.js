/* simple functions for the corporate site prototype */

$( document ).ready(function() {
  // load the includes
  $( "header#main" ).load( "includes/header.html" );
  $( "#footer" ).load( "includes/footer.html" );
	if($(".logo-tabs").length > 0) {
		$( ".logo-tabs" ).load( "includes/include_logo_tabs.html" );
	}
  
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
		
		// set up the advertiser page affix
		$("#logo-scroll-nav").on('affixed-top.bs.affix', function() {
			$('body').removeClass('affixed-nav');
			$('#tab-afw').addClass('active');
		});
		
		$("#logo-scroll-nav").on('affix.bs.affix', function() {
			$('body').addClass('affixed-nav')
		});
		
	
    jQuery('#logo-scroll-nav .logo-tabs a[href^="#"]').on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // animate
        jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 110}, 300, function() {
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = this.hash;
        });
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