$(window).load(function(){
  $("#masthead").sticky({ topSpacing: 0, className:"prime-fixed" });
  $("#secondary-nav").sticky({ topSpacing: 0, center:true, className:"secondary-fixed" });
  $("#tertiary-nav-container").sticky({ topSpacing:65, center:true, className:"tertiary-fixed" });
});



$( document ).ready(function() {
  $( ".secondary-nav-toggle" ).on( "click", function(e) {
    e.preventDefault();
     $('html,body').animate({ scrollTop: 0 }, 'slow');
    $drawer_nav = $('#nav-drawer');
    $drawer_nav.slideToggle();
  });
  
  $( ".tertiary-tech-toggle" ).on( "click", function(e) {
    e.preventDefault();

    $drawer_nav = $('#tertiary-nav-container');
    $drawer_nav.slideToggle('slow');
  });

});