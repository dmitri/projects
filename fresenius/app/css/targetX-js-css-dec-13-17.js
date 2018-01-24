body {
  font-family: 'Avenir', helvetica, arial, sans-serif;
  font-size: 120%;
  line-height: 1.4;
}
 
ol {
list-style: decimal;
padding-left: 50PX;
}
 
ul {
list-style: disc;
padding-left: 50PX;
}
 
blockquote, q {
padding-left: 50PX;
}
 
.targetx-select-box {
  -moz-appearance: none;
}
 
.targetx-application-header .targetx-header-university-info {
  display: none;
}
 
.targetx-card.targetx-card-state-edit.move-up {
  margin-top: -125px !important;
}
 
/* scroll the sidebar */
.targetx-application-sidebar-body {
  overflow-y: scroll;
}
 
 
label[for=TargetX_SRMb__Electronic_Signature__c] span.targetx-input-placeholder {
  font-size: 12px !important;
  position: absolute !important;
  top: -12px !important;
}
 
label[for=TargetX_SRMb__Electronic_Signature__c] input[type=text] {
  margin-top: 12px;
}
 
*:focus {
  outline: none;
}
 
.targetx-header-user {
  border-left: 1px solid #ecece6;
  color: #555;
}
 
.targetx-dashboard-hero-info {
  display: none;
}
 
.targetx-dashboard-hero .targetx-dashboard-hero-university {
  margin-top: 37px;
  margin-left: -17px;
}
 
.targetx-dashboard-hero .targetx-dashboard-hero-icon-container .targetx-dashboard-hero-icon {
  background:url("//assets.online.berklee.edu/bo-logo-100.png") no-repeat center;
}
 
.targetx-dashboard-hero .targetx-dashboard-hero-icon-container {
  background: none;
}
 
.targetx-dashboard-hero .targetx-dashboard-hero-university-name {
  color: #FFF;
}
 
.targetx-dashboard-hero-university-name-inner {
  background: none;
  box-shadow: none;
}
 
.targetx-dashboard-hero-university-name:first-child .targetx-dashboard-hero-university-name-inner:last-child {
  display: none;
}
 
.targetx-button, 
.targetx-button-secondary,
.targetx-button-header,
.targetx-button.targetx-button-green {
  background: rgb(216, 17, 24);
  color: rgba(255,255,255, 1);
  box-shadow: 0 2px 0 rgb(176,13,19);
  text-decoration: none;
}
 
.targetx-button:hover,
.targetx-button-secondary:hover,
.targetx-button-header:hover,
.targetx-button.targetx-button-green:hover,
.targetx-button:focus,
.targetx-button-secondary:focus,
.targetx-button-header:focus,
.targetx-button.targetx-button-green:focus,
.targetx-button:active,
.targetx-button-secondary:active,
.targetx-button-header:active,
.targetx-button.targetx-button-green:active {
  background: rgb(176,13,19);
  color: rgba(255,255,255, 1);
  box-shadow: 0 2px 0 rgb(176,13,19);
  text-decoration: none;
}
 
.targetx-header-print {
  color: #444;
}
 
.targetx-plaintext {
  margin-top: -48px !important;
  margin-bottom: 50px !important;
  text-align: left !important;
}
 
.targetx-application-form-info {
  font-size: 16px;
  line-height: 1.6;
}
 
.messageCell {
  margin-bottom: 20px;
}
 
.targetx-select-box-icon {
  right: 10px;
}
 
.targetx-select-box-icon:after {
  color: #666;
  font-size:1.25rem;
}
 
.targetx-application-hamburger-nav .hamburger-menu-bar {
  background-color: rgba(255,255,255,1);
}
 
.targetx-header-back::after {
  color: #666;
}
 
.targetx-header-back:hover:after, 
.targetx-header-back:active:after, 
.targetx-header-back:visited:after {
  color: #222;
}
 
/* required symbol */
 
.targetx-input-label.targetx-required:before {
  font-family: "targetx-icons";
  display: inline-block;
  font-weight: normal;
  font-style: normal;
  text-decoration: inherit;
  content: "\27A5";
  position: absolute;
  font-size: 5px;
  left: -10px;
  top: -4px;
  vertical-align: middle;
  color: #585e69;
}
 
.targetx-input-label.targetx-required:before {
  font-size: 25px;
  left: -31px;
  color: rgb(216, 17, 24);
}
 
.targetx-input-label.targetx-required.completed:before {
  content: "\2714";
  font-size: 25px;
  left: -31px;
  color: green;
}
 
.targetx-section-header .targetx-required:before {
  font-family: "targetx-icons";
  display: inline-block;
  font-weight: normal;
  font-style: normal;
  text-decoration: inherit;
  content: "\27A5";
  position: absolute;
  font-size: 21px;
  left: -27px;
  top: -5px;
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
  vertical-align: middle;
  color: #585e69;
  color: rgb(216, 17, 24);
}

.targetx-application-form-slide label input.targetx-dirty+span, .targetx-application-form-slide label input:focus+span {
  color: #888;
  font-size: 1.5rem;
}
 
.targetx-header-university-icon {
  background:url("https://s3.amazonaws.com/berkleeonline-assets-east/crosscampus/boco_berklee_full.svg") no-repeat center;
  margin-right: 25px;
  transition: all 0.3s ease;
  width: 160px;
}

.targetx-header-university-name {
  font-family: 'Avenir', helvetica, arial, sans-serif;
  font-size: 14px;
  margin-top: 9px;
  margin-bottom: 3px;
  font-weight: 600;
  text-transform: none;
}

.targetx-header-university-name:after {
  content: " and Boston Conservatory at Berklee";
  text-transform: none;
}
 
.targetx-input-label .targetx-input-placeholder, .targetx-input-label .targetx-picklist-placeholder, .targetx-input-label .targetx-input-text, .targetx-input-label .targetx-input-textarea, .targetx-input-label .targetx-select-box {
  font-weight: 500;
}
 
.targetx-section-pre .targetx-section-header .targetx-section-header-text,
.targetx-section-active .targetx-section-header .targetx-section-header-text,
.targetx-section-post .targetx-section-header .targetx-section-header-text {
  display: block;
  float: none;
  font-weight: 500;
  margin-top: 39px;
  position: static;
  text-indent: 0;
  transition: all 0.3s ease;
  text-align: center;
  top: auto;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
 
.targetx-full-card .targetx-section-header {
  font-weight: 500;
}
 
button.targetx-button-remove-item.targetx-button-childobject.ng-scope[aria-label='clear date'] {
  display: none;
}
 
.targetx-review-value-container .targetx-review-item-label {
  font-weight: 400;
}
 
.targetx-review-value-container .targetx-review-item-value {
  font-weight: 500;
}
 
.targetx-section-pre .targetx-section-header .targetx-section-header-text {
  color: #999;
}
 
.targetx-section-active .targetx-section-header .targetx-section-header-text {
  color: #111;
  text-indent: 0;
}
 
.targetx-section-post .targetx-section-header .targetx-section-header-text {
  color: #111;
  text-indent: 100px;
}
 
#p1_Application_Contact0 .targetx-section-pre .targetx-section-header .targetx-section-header-text {
  color: #111;
}
 
.TX_communitiesHome table.detailList div a {
  width: 100%;
}
 
.TX_communitiesHome table.detailList td.dataCol:first-child div:first-child a {
  margin-top: 0;
}
 
.BO_siteLogin .targetx-application-form-slides li:first-child,
.BO_forgotPassword .targetx-application-form-slides li:first-child,
.BO_formDesignUpdate .targetx-application-form-slides li:first-child {
  margin-top: -120px;
}
 
.BO_siteLogin .targetx-dashboard .targetx-dashboard-hero,
.BO_forgotPassword .targetx-dashboard .targetx-dashboard-hero,
.BO_formDesignUpdate .targetx-dashboard .targetx-dashboard-hero {
  height: 350px;
}
 
.BO_siteLogin .targetx-application-form-slide label span,
.BO_forgotPassword .targetx-application-form-slide label span,
.BO_formDesignUpdate .targetx-application-form-slide label span{
  color: #666;
  font-weight: 400;
}
 
.message {
  margin-bottom: 20px !important;
}
 
.targetx-welcome-info {
  background: #FFF;
  margin-top: -100px;
  padding: 0 60px;
  position: relative;
}
 
.targetx-application-percentage-date {
  color: #777;
  font-weight: 500;
}
 
.targetx-application-percentage-date span {
  color: #555;
  font-weight: 900;
}
 
.targetx-welcome-title {
  font-weight: 400;
}
 
.BO_TargetX_App_OnlineAppHome {
  background: #f7f7f7;
}
 
.BO_TargetX_App_OnlineAppHome .mycontainer {
  border-bottom: 1px solid #CCC;
}
 
.BO_TargetX_App_OnlineAppHome .targetx-dashboard-widgets {
  margin-top: 0;
}
 
.BO_TargetX_App_OnlineAppHome .targetx-dashboard-hero {
  display: none;
}
 
.BO_TargetX_App_OnlineAppHome .targetx-dashboard-widget {
  padding-bottom: 70px;
}
 
.BO_TargetX_App_OnlineAppHome .targetx-dashboard-widget-header {
  padding: 24px 0;
}
 
.BO_TargetX_App_OnlineAppHome .targetx-dashboard-widget-body {
  padding: 30px;
  text-align: center;
  margin-bottom: 70px;
}
 
.targetx-application-percentage-container span:nth-child(3) {
  display: none;
}
 
label[for=TargetX_SRMb__True_and_Correct__c] {
  margin-left: 32px;
}
 
#TargetX_SRMb__True_and_Correct__c {
  margin-top: -35px;
}
 
.BO_txt_cannot_make_changes {
  position: relative;
  background: #666;
  color: #fff;
  max-width: 300px;
  clear: both;
  padding: 30px;
  text-align: left;
  margin-top: 40px;
  float: right;
}
 
.BO_txt_cannot_make_changes:after {
  bottom: 100%;
  left: 80%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(247, 247, 247, 0);
  border-bottom-color: #666;
  border-width: 30px;
  margin-left: -30px;
}
 
.BO_success_header {
  font-weight: bold; font-size: 25px;margin-bottom: 20px;
}
 
.BO_success_copy {
  margin-bottom: 15px;
}
 
@media (max-width: 900px) {
  .targetx-dashboard-hero {
      height: 200px;
  }

  .targetx-header-university-icon {
    background: url(https://s3.amazonaws.com/berkleeonline-assets-east/crosscampus/boco_berklee_full.svg) no-repeat center;
    background-size: 95px;
    margin: 15px 5px 15px 15px;
    height: 36px;
    width: 115px;
  }
  
  .navbar-toggle { margin-top: 16px; }
}
 
@media (min-width: 901px) {
  .BO_TargetX_App_OnlineAppHome .targetx-application-percentage {
    width: 100px;
    height: 100px;
 
  }
  .BO_TargetX_App_OnlineAppHome .targetx-application-percentage canvas {
    width:100px;
  }
 
  .BO_TargetX_App_OnlineAppHome .targetx-application-percentage-complete {
    font-size: 9px;
    font-size: .9rem;
    line-height: 2.5rem;
  }
 
  .BO_TargetX_App_OnlineAppHome .targetx-application-percentage-number {
    font-size: 30px;
    font-size: 3rem;
    line-height: 30px;
    line-height: 3rem;
  }
 
  .BO_TargetX_App_OnlineAppHome .targetx-application-percentage-number sup {
    font-size: 1.2rem;
    top: 15px;
  }
 
    .BO_TargetX_App_OnlineAppHome .targetx-application-percentage-info {
      top: 48%;
  }
}
 
@media (max-width: 900px) {
  .BO_TargetX_App_OnlineAppHome .targetx-dashboard-widget {
    padding-bottom: 0;
  }
  
  .BO_TargetX_App_OnlineAppHome .targetx-dashboard-widget-body {
    padding: 0;
    text-align: left;
    margin-bottom: 30px;
  }
}
 
@media (max-width: 768px) {
  .targetx-section-pre .targetx-section-header .targetx-section-header-text, 
  .targetx-section-active .targetx-section-header .targetx-section-header-text, 
  .targetx-section-post .targetx-section-header .targetx-section-header-text {
    display: block;
    float: left;
    font-weight: 500;
    margin-top: 0;
    position: absolute;
    text-indent: 40px;
    transition: all 0.3s ease;
    text-align: left;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
 
@media (max-width: 600px) {
  .targetx-dashboard-hero {
      background-position-y: 0;
  }
}
 
@media (max-width: 880px) {
  .targetx-input-label.targetx-required:before,
  .targetx-input-label.targetx-required.completed:before {
    font-size: 20px;
    left: -21px;
    top: -3px;
  }
  
  .targetx-input-label.targetx-required.completed:before {
    top: -1px;
  }
}

.targetx-dashboard-hero {
    position: relative;
    height: 400px;
    background: url(https://s3.amazonaws.com/berkleeonline-assets-east/crosscampus/hero-application-2.jpg) no-repeat top left;
    background-size: cover;
    transition: all 0.3s ease;
}
 
@media only screen and (-webkit-min-device-pixel-ratio:2), only screen and (min--moz-device-pixel-ratio:2), only screen and (-o-min-device-pixel-ratio:2/1), only screen and (min-device-pixel-ratio:2) {
  .targetx-dashboard-hero {
    background-image: url(https://s3.amazonaws.com/berkleeonline-assets-east/crosscampus/hero-application-2.jpg);
  }
}
</style>
 
<script>
 
var scroll_failsafe_check = 0;
var field_check = 0;
var save_check = 1;
 
$( document ).ready(function() {
  
  // on the start page only, move the card up if it is new application
  if($('.targetx-card.targetx-card-state-edit h1').text() == "New Application") {
    $('.targetx-card.targetx-card-state-edit').addClass('move-up');
  }
  
  // this is on a timer to be sure the page loads enough for
  
  setTimeout(function(){
    // set line1 of the streetaddress widget field to have the class we need
    $('input[ng-model="street.line1"]').addClass('ng-valid-required');
 
    // target the required fields that have value
    $('.targetx-has-value.ng-valid-required').each(function() {
      set_status_symbol(this);
    });
    
    // the inputs that search - like high schools or colleges
    set_select_search_status();
    
    // for file inputs - e.g., attachments
    set_file_input_status();
 
    // for campus app birth date only - set the status if the birthday is already supplied
    set_birthdate_status();
    
    // expected high school grad date
    set_expected_hs_grad_date_status();
    
    // hide the Xs
    $(".date-dropdown .date-picker-wrap .targetx-button-remove-item").hide();
 
    // set the button text to be Save & Continue
    set_save_button_text();
    
    // check the affiliations dropdown, and if set to "No" uncheck the children checkboxes
    uncheck_affiliations_checkboxes();
    
    // check and set the checkbox label state for "Affiliations"
    check_check_boxes();
    
    // check if the form has been submitted, and if so, present a more informative and encouraging note
   // check_if_submitted();
 
    $(window).scroll(function(){
      if(field_check != 1) {
        if($('.targetx-review-item-label').length > 0) {
          $('.targetx-review-item-value').each(function() {
            if($(this).text() != "") {
              if($(this).parents('label, div').hasClass('targetx-required')) {
                $(this).parents('label, div').addClass('completed');
              };
            }
            fired = 1;
            save_check = 0;
          });
        };
        if($('.targetx-application-container').length > 0) {
          if(save_check != 1) {
            set_save_button_text();
          }
          save_check = 1;
        };
      }
      
      // one final sweep on scroll as a failsafe 
      if(scroll_failsafe_check == 0) {
        $('.targetx-has-value.ng-valid-required, input:file, .targetx-review-item-value').each(function() {
          set_status_symbol(this);
        });
        
        // e.g., high school / college lookups
        set_select_search_status();
        // e.g., attachments
        set_file_input_status();
        
        scroll_failsafe_check = 1;
      }
    });
 
  }, 2000);
  
  // check the affiliation checkboxes
  $(document).on('change', "label[for='Contact-Birthdate'] select[ng-model='month'], label[for='Contact-Birthdate'] select[ng-model='date'],label[for='Contact-Birthdate'] select[ng-model='year']", function(){
    // for campus app birth date only - set the status if the birthday is already supplied
    set_birthdate_status();
  });
  
  // check the expected high school graduation date
  $(document).on('change', "label[for='TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0'] select[ng-model='month'], label[for='TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0'] select[ng-model='date'],label[for='TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0'] select[ng-model='year']", function(){
    // set expected high school graduation
    set_expected_hs_grad_date_status();
  });
  
 
  $(document).on('change','.targetx-select-box, textarea.targetx-input-textarea, input[type="text"], input[type="phone"], input[type="email"]',function(){
    if($(this).hasClass('ng-dirty')) {
      set_status_symbol(this);
    }
    if($(this).hasClass('ng-invalid-required') || $(this).val() == "") {
      if($(this).parents('label, div').hasClass('targetx-required')) {
        $(this).parents('label, div').removeClass('completed');
      };
    }
  });
  
  // input:files need a couple second delay, due to uploading delay. sigh.
  $(document).on('change','input[type="file"]',function(){
    $(this).parents('label').addClass('completed');
    setTimeout(function(){
      if($(this).hasClass('ng-valid-required')) {
        set_status_symbol(this);
      }
      if($(this).hasClass('ng-invalid-required') || $(this).val() == "") {
        if($(this).parents('label, div').hasClass('targetx-required')) {
          $(this).parents('label, div').removeClass('completed');
        };
      }
    }, 2000);
  });
 
 
  // check the affiliation checkboxes
  $(document).on('change', '#card_p2_Application_Contact0 div[ng-if="item.type == \'multicheckbox\'"] input[type="checkbox"]', function(){
    check_check_boxes();
  });
  
  // the dash is managed but needs a body class
  if(($('.targetx-application-percentage-container').length > 0) && ($('.targetx-dashboard-hero').length > 0))    $("body").addClass("BO_TargetX_App_OnlineAppHome");
  
  // on the payment screen deliver the correct text
  if($('div[ng-show="!paid"]').length > 0) {
    
    // add the style class to the opc button
    $('form').css('textAlign', 'right');
    $('.tgtx_payButtons.tgtx_opcButton').addClass('targetx-button');
    
    // get the appID
    if(getUrlVars()["pid"] != undefined) {
      var $appID = getUrlVars()["aid"]
    } else {
      var $appID = "Call an Academic Advisor to get your application ID."
    }
    
    // create the strings of text to be appended to the DOM
    // pay online
    var $payOnlineText = "";
    $payOnlineText += "<div id='txt-pay-online' class='payment-hint' style='display: none; margin: 30px 0;'><i class='fa fa-info-circle'></i> <p>";
    $payOnlineText += "The application fee may be paid online by credit card. ";
    $payOnlineText += " For payment questions, including those regarding alternate payment methods, ";
    $payOnlineText += "please contact us.</p>";
    $payOnlineText += "<p style='margin-top: 15px; display: block;'><span style='font-weight: bold;'>Berklee Undergraduate / Graduate Programs - Boston, MA Campus</span><br/>";
    $payOnlineText += "1-800-BERKLEE (800-237-5533) or 617-747-2221 (outside the U.S.)<br/>";
    $payOnlineText += "<a href='mailto:admissions@berklee.edu'>admissions@berklee.edu</a></p>";
    $payOnlineText += "<p style='margin-top: 15px; display: block;'><span style='font-weight: bold;'>Berklee Online Programs</span><br/>";
    $payOnlineText += "1-866-BERKLEE (866-237-5533) or 617-747-2146 option 1 (outside the U.S.)<br/>";
    $payOnlineText += "<a href='mailto:advisors@online.berklee.edu'>advisors@online.berklee.edu</a></p>";
    $payOnlineText += "<p style='margin-top: 15px; display: block;'><span style='font-weight: bold;'>Boston Conservatory at Berklee Programs</span><br/>";
    $payOnlineText += "1-617-912-9153<br/>";
    $payOnlineText += "<a href='mailto:conservatoryadmissions@berklee.edu'>conservatoryadmissions@berklee.edu</a></p></div>";
    
    // append to the DOM
    $($payOnlineText).insertBefore('.targetx-card-buttons').first();
    
    // hide the payment hint
    // preselect the online value
    // fade in the text
    
    $('.payment-hint').hide();
    
    $('.targetx-picklist-placeholder, .targetx-select-box-icon').hide()
    
    $('#select-box').change(function(){
      var data= $(this).val();
    });
 
    $('#select-box')
        .val('online')
        .change();
 
    $('#txt-pay-online').fadeIn();
 
    $('div[ng-show="paymentMethod == \'online\'"]').removeClass('ng-hide');
  };
  
  // look for the presence of, and ditch the "my profile" link in the header nav
  
  $('ul.navbar-right li a[href*="TX_MyProfilePage"]').each(function() {
      $(this).remove();
  });
  
  
  if($('input.targetx-button[value="Verify & Submit"]').length > 0) {
    // tell folks that once they've submitted they cannot make changes
    
    $('label[for=TargetX_SRMb__True_and_Correct__c]').text("I verify everything in this application is true and correct.");
    
    $('label[for=TargetX_SRMb__Electronic_Signature__c] span').text("Electronic Signature (Your Full Name)");
  
    var $cannotMakeChangeText = "";
    $cannotMakeChangeText += "<div id='BO_txt_cannot_make_changes' class='BO_txt_cannot_make_changes'>";
    $cannotMakeChangeText += "<strong>Note:</strong> No changes can be made once you submit.<br/><br/>Please review your application carefully before submitting.</div>";
  
    $($cannotMakeChangeText).insertAfter('.targetx-card-buttons')
  }
  
});
 
set_status_symbol = function(el) {
  if($(el).val() != "") {
    if($(el).parents('label, div').hasClass('targetx-required')) {
      $(el).parents('label, div').addClass('completed');
    };
  }
}
 
// these are for the search input fields - like high school, etc.
set_select_search_status = function() {
  $('.ui-select-container').each(function() {
    if($(this).hasClass('ng-valid ng-valid-required')) {
      $(this).parents('label').addClass('completed');
    }
  });
}
 
set_file_input_status = function() {
  $('.targetx-file-input-value').each(function() {
    if($(this).html() != "No file selected") {
      if($(this).parents('label').hasClass('targetx-required')) {
        $(this).parents('label').addClass('completed');
      }
    }
  });
}
 
set_save_button_text = function() {
  $('.targetx-card-buttons .targetx-button').each(function() {
    if($(this).text() == "Continue" || $(this).text() == "continue") $(this).text("Save & Continue");
  });
}
 
check_check_boxes = function() {
  $label = $('#card_p2_Application_Contact0 div[ng-if="item.type == \'multicheckbox\'"] label');
  if($('div[ng-if="item.type == \'multicheckbox\'"] input[type="checkbox"]:checked').length) {
    $label.addClass('completed');
  } else {
    $label.removeClass('completed');
  }
}
 
uncheck_affiliations_checkboxes = function() {
  if($('#TargetX_SRMb__Application__c-Attended_Berklee__c option:selected').text() == "No") {
    // clear all the checkboxes under it
    $('#card_p2_Application_Contact0 div[ng-if="item.type == \'multicheckbox\'"] input[type="checkbox"]').each(function() {
      $(this).prop("checked", false);
    });
  }
}
 
set_birthdate_status = function() {
 
  if($("label[for='Contact-Birthdate'] select[ng-model='month']").prop('selectedIndex') == 0 || $("label[for='Contact-Birthdate'] select[ng-model='date']").prop('selectedIndex') == 0 || $("label[for='Contact-Birthdate'] select[ng-model='year']").prop('selectedIndex') == 0) {
    $('label[for=Contact-Birthdate]').removeClass('completed');
  } else {
    $('label[for=Contact-Birthdate]').addClass('completed');
  }
  
  $(".date-dropdown .date-picker-wrap .targetx-button-remove-item").hide();
 
}
 
set_expected_hs_grad_date_status = function() {
 
  if($("label[for='TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0'] select[ng-model='month']").prop('selectedIndex') == 0 || $("label[for='TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0'] select[ng-model='date']").prop('selectedIndex') == 0 || $("label[for='TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0'] select[ng-model='year']").prop('selectedIndex') == 0) {
    $('label[for=TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0]').removeClass('completed');
  } else {
    $('label[for=TargetX_SRMb__Enrollment_History__c-Expected_Graduation_Date__c-TargetX_SRMb__Enrollment_History__c-0-0]').addClass('completed');
  }
  
  $(".date-dropdown .date-picker-wrap .targetx-button-remove-item").hide();
 
}
 
check_if_submitted = function() {
  var $success_message = ""
  $success_message += "<h2 class='BO_success_header'>Thank you for submitting your application!</h2>";
  $success_message +="<p class='BO_success_copy'>In order for your application to be complete, you will need to submit the following items:</p>";
  $success_message +="1) Official sealed copy of a high school transcript or official GED. Documents must be in English. High school transcripts are not required for candidates who have earned more than 24 credits of college-level academic course work.";
  $success_message += "<br/><br/>";
  $success_message +="2) Official sealed copies of transcripts from all institutions of higher education attended or currently attending. Documents must be in English.";
  $success_message +="<br/><br/>";
  
  if($("div[ng-show='submitted']").not( ".ng-hide" )) {
    $("div[ng-show='submitted'] h3").html("");
    $($success_message).insertAfter("div[ng-show='submitted'] h3").fadeIn();
  }
}
 
getUrlVars = function()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
</script>
 
<style>

