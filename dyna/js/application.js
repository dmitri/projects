$(window).load(function(){
  $("#masthead").sticky({ topSpacing: 0, className:"prime-fixed" });
  $("#secondary-nav").sticky({ topSpacing: 0, center:true, className:"secondary-fixed" });
  $("#tertiary-nav-container").sticky({ topSpacing:65, center:true, className:"tertiary-fixed" });
});



$( document ).ready(function() {
  $( ".secondary-nav-toggle" ).on( "click", function(e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 'slow');

    toggle_caret(this);
    
    $drawer_nav = $('#nav-drawer');
    $drawer_nav.slideToggle();
  });
  
  $( ".tertiary-tech-toggle" ).on( "click", function(e) {
    e.preventDefault();
    
    toggle_caret(this);

    $drawer_nav = $('#tertiary-nav-container');
    $drawer_nav.slideToggle();
  });

});

toggle_caret = function(el) {
  $caret = $(el).find('span');
  $caret.toggleClass('nav-caret-down').toggleClass('nav-caret-up');
}