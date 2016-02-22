$(window).load(function(){
  $("#masthead").sticky({ topSpacing: 0, className:"prime-fixed" });
  $("#secondary-nav").sticky({ topSpacing: 0, center:true, className:"secondary-fixed" });
  $("#tertiary-nav-container").sticky({ topSpacing:65, center:true, className:"tertiary-fixed" });
});



$( document ).ready(function() {
  $( ".secondary-nav-toggle" ).on( "click", function(e) {
    e.preventDeault();

    $drawer_nav = $('#nav-drawer');
    $drawer_nav.slideToggle();
  });
});