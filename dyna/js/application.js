$( document ).ready(function() {

  $('#secondary-nav-container').affix({
    offset: {
      top: $('#secondary-nav').offset().top-65,
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
  
  $("#secondary-nav-container").on('affix.bs.affix', function(){
    $('#slot-2').addClass('add-pad');
  });
  
  $("#secondary-nav-container").on('affix-top.bs.affix', function(){
    $('#slot-2').removeClass('add-pad');
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