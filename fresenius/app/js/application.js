// Init up the UI

$(function(){
  // Get the three owner lists
  getPeopleList('Business_Owner', 'business-owner');
  getPeopleList('IT_OWNER', 'it-owner');
  getPeopleList('IT_SPONSOR', 'it-sponsor');
  
  getAssetsList('App_Name');
  
  // set up the live filter
  init_fastlive_filter();
});

// get the list of people by their role
getPeopleList = function(ownerType, container) {
  var transforms = {
      "list":{"<>":"ul","html":function(){
      
        var getOwners = _.chain(data)
          .uniq(function(dataitem) { return dataitem[ownerType]; })
          .sortBy(function(dataitem){ return dataitem[ownerType]; })
          .value();
          return($.json2html(getOwners,transforms.items));   
      }},
  
      "items":{"<>":"li","html":function(obj,index){
                  return( obj[ownerType]);
              },"onclick":function(e){
          $('.filter-list li').removeClass('active');
          $(this).addClass('active');
        
          var getSelectedOwnerData = _.where(data, {[ownerType]: e.obj[ownerType]});

          $("#list-details").empty().json2html(getSelectedOwnerData,transforms.details);
      }},
  
      "details":[
          {"<>":"div","class":"card animated fadeInUp","html":[
              {"<>":"div", "class":"card-body", "html": [
                {"<>":"h2","class":"card-title", "html":"${App_Name}"},
                {"<>":"p","html":"${App_Description}"},
              ]},
          ]},
      ]
  };

  $("#"+container+"-list").json2html({},transforms.list);
  $("#business li:nth-child(1)").click();
};

// get the list of people by their role
getAssetsList = function(asset) {
  var transforms = {
      "list":{"<>":"ul","html":function(){
      
        var getType = _.chain(data)
          .uniq(function(dataitem) { return dataitem[asset]; })
          .sortBy(function(dataitem){ return dataitem[asset]; })
          .value();
          return($.json2html(getType,transforms.items));   
      }},
  
      "items":{"<>":"li","html":function(obj,index){
                  return( obj[asset]);
              },"onclick":function(e){
          $('.filter-list li').removeClass('active');
          $(this).addClass('active');
        
          var getSelectedOwnerData = _.where(data, {[asset]: e.obj[asset]});

          $("#asset-details").empty().json2html(getSelectedOwnerData,transforms.details);
      }},
  
      "details":[
          {"<>":"div","class":"card animated fadeInUp","html":[
              {"<>":"div", "class":"card-body", "html": [
                {"<>":"h2","class":"card-title", "html":"${App_Name}"},
                {"<>":"p","html":"${App_Description}"},
                {"<>":"strong","html":"Business Owner"},
                {"<>":"p","html":"${Business_Owner}"},
                {"<>":"strong","html":"IT Owner"},
                {"<>":"p","html":"${IT_OWNER}"},
                {"<>":"strong","html":"IT Sponsor"},
                {"<>":"p","html":"${IT_SPONSOR}"},
              ]},
          ]},
      ]
  };

  $("#asset-list").json2html({},transforms.list);
  $("#assets li:nth-child(1)").click();

};

/* Fast filter functions *************************************************/

init_fastlive_filter = function() {
  // Activate fastLiveFilter w/ callback
  var numDisplayed = $(".num-displayed");
  $("#filter_list_input").fastLiveFilter(".filter-list ul", "#filter_list_select", {
    callback: function(total) { numDisplayed.html(addCommas(total)); }
  }).focus();
};

function addCommas(num) {
  num = String(num);
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(num)) {
    num = num.replace(rgx, '$1' + ',' + '$2');
  }
  return num;
};

/* main tab toggler */
toggleView = function(pane) {
  $('.main-toggler a').removeClass('active');
  $('.primary-block').hide();
  $('#'+pane).show();
}
