$( document ).ready(function() {

  $('.home #secondary-nav-container').affix({
    offset: {
      top: $('#secondary-nav').offset().top,
      bottom: function () {
      }
    }
  });
  
  $('.secondary-tech #secondary-nav-container').affix({
    offset: {
      top: $('#secondary-nav').offset().top,
      bottom: function () {
      }
    }
  });
  


  $( ".secondary-nav-toggle" ).on( "click", function(e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 'slow');

    toggle_caret(this);
    
    $drawer_nav = $('#nav-drawer');
    $drawer_nav.slideToggle();
  });
  
  // add and remove the padding when the nav affixes
  
  $(".home #secondary-nav-container").on('affix.bs.affix', function(){
    $('#slot-2').addClass('add-pad');
  });
  
  $(".home #secondary-nav-container").on('affix-top.bs.affix', function(){
    $('#slot-2').removeClass('add-pad');
  });
  
  $(".secondary-tech #secondary-nav-container").on('affix.bs.affix', function(){
    $('#hero').addClass('add-pad');
  });
  
  $(".secondary-tech #secondary-nav-container").on('affix-top.bs.affix', function(){
    $('#hero').removeClass('add-pad');
  });
  
  
  $( ".tertiary-tech-toggle" ).on( "click", function(e) {
    
    toggle_caret(this);

  });
    
  
  //$("#masthead").sticky({ topSpacing: 0, className:"prime-fixed" });
  //$("#secondary-nav").sticky({ topSpacing: 0, center:true, className:"secondary-fixed" });
  //$("#tertiary-nav-container").sticky({ topSpacing:65, center:true, className:"tertiary-fixed" });
  


});

toggle_caret = function(el) {
  $caret = $(el).find('span');
  $caret.toggleClass('nav-caret-down').toggleClass('nav-caret-up');
}