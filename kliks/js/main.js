
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
})(jQuery);


/* toggle password functionality */
function togglePasswordVisibility(input) {
  var x = document.getElementById("k-password");
  if (x.type === "password") {
    x.type = "text";
    $('.pass-visibility-icon').addClass('show');
  } else {
    x.type = "password";
    $('.pass-visibility-icon').removeClass('show');
  }
}

function exposeDashBlocks() {
  $('.welcome-header').addClass('animate__animated animate__slideInDown animate__repeat-1');
  $('.dash-block').addClass('animate__animated animate__fadeIn animate__delay-.5s').css('display', 'block');
  $('.right-info-pane').addClass('animate__animated animate__slideInRight animate__delay-.5s').css('display', 'block');
}

function showCompanyPane() {
  $('.work-area-dash').hide();
  $('.work-area-2').show();
}

function showRatePane() {
  $('.work-area-dash').hide();
  $('.work-area-3').show();
}

function closePane() {
  $('.stage-overlay, .company-form-pane').hide();
}

$(document).ready(function() {
  $(document).on('click', '.close-pane, .stage-overlay', function(event) {
    event.preventDefault();
    closePane();
  });
  
  $(document).on('click', '.btn-ready', function(event) {
    event.preventDefault();
    exposeDashBlocks();
  });
  
  
  $(document).on('click', '.cancel-back-to-dash', function(event) {
    event.preventDefault();
    $('.welcome-header').removeClass('animate__animated animate__slideInDown animate__repeat-1');
    $('.work-area-2').hide();
    $('.work-area-dash').addClass('animate__animated animate__slideInLeft animate__faster animate__repeat-1').css('display', 'block');
  });
  
  $(document).on('click', '.save-company', function(event) {
    event.preventDefault();
    $('.welcome-header').removeClass('animate__animated animate__slideInDown animate__repeat-1');
    $('.work-area-2').hide();
    $('.stage-overlay').addClass('show-with-spinner');
    setTimeout(function(){ 
      $('.work-area-dash').addClass('animate__animated animate__fadeIn animate__faster animate__repeat-1').css('display', 'block');
      $('.stage-overlay').removeClass('show-with-spinner');
      $('.dash-block-1').addClass('complete');
      $('.message-1').hide();
      $('.message-2').addClass('animate__animated animate__slideInDown').css('display', 'block');
    }, 1000);
    
  });
  
  $('select.select2').select2({
    tags: true
  });
});