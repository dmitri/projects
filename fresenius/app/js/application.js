// Init up the UI

$(function(){
  // Get the three owner lists
  getBusinessUnitList('Business Unit', 'business-unit');
  getPeopleList('Business Owners', 'business-owner');
  getPeopleList('IT Owners', 'it-owner');
  
  getAssetsList('Application Name');
  
  // set up the live filter
  init_fastlive_filter();
  init_fastlive_filter_assets();
  
  init_fastlive_search();
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
                {"<>":"h2","class":"card-title", "html":"${Application Name}"},
                {"<>":"p","html":"${Description}"},
              ]},
          ]},
      ]
  };

  $("#"+container+"-list").json2html({},transforms.list);
  $("#business li:nth-child(1)").click();
};


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
                {"<>":"h2","class":"card-title", "html":"${Application Name}"},
                {"<>":"p","html":"${Description}"},
                {"<>":"strong","html":"Business Owner"},
                {"<>":"p","html":"${Business Owners}"},
                {"<>":"strong","html":"IT Owner"},
                {"<>":"p","html":"${IT Owners}"},
              ]},
          ]},
      ]
  };

  $("#asset-list").json2html({},transforms.list);
  $("#assets li:nth-child(1)").click();
};


// get business units
getBusinessUnitList = function(businessUnit) {
  var transforms = {
      "list":{"<>":"ul","html":function(){
      
        var getType = _.chain(data)
          .uniq(function(dataitem) { return dataitem[businessUnit]; })
          .sortBy(function(dataitem){ return dataitem[businessUnit]; })
          .value();
          return($.json2html(getType,transforms.items));   
      }},
  
      "items":{"<>":"li","html":function(obj,index){
                  return( obj[businessUnit]);
              },"onclick":function(e){
          $('.filter-list li').removeClass('active');
          $(this).addClass('active');
        
          var getSelectedOwnerData = _.where(data, {[businessUnit]: e.obj[businessUnit]});

          $("#main").empty().json2html(getSelectedOwnerData,transforms.details);
      }},
  
      "details":[
          {"<>":"div","class":"card animated fadeInUp","html":[
              {"<>":"div", "class":"card-body", "html": [
                {"<>":"h2","class":"card-title", "html":"${Application Name}"},
                {"<>":"p","html":"${Description}"},
                {"<>":"strong","html":"Business Owner"},
                {"<>":"p","html":"${Business Owners}"},
                {"<>":"strong","html":"IT Owner"},
                {"<>":"p","html":"${IT Owners}"},
              ]},
          ]},
      ]
  };

  $("#sidebar").json2html({},transforms.list);
  $("#assets li:nth-child(1)").click();
};

/* Fast filter functions *************************************************/

init_fastlive_filter = function() {
  // Activate fastLiveFilter w/ callback
  var numDisplayed = $(".num-displayed");
  $("#filter_list_input").fastLiveFilter(".filter-list ul", {
    callback: function(total) { numDisplayed.html(addCommas(total-1));}
  });
};

init_fastlive_filter_assets = function() {
  var numDisplayedAssets = $(".num-displayed");
  $("#asset_filter_list_input").fastLiveFilter(".asset-filter-list ul", {
    callback: function(total) { numDisplayedAssets.html(addCommas(total-1));}
  });
};

init_fastlive_search = function() {
  var numDisplayedAssets = $(".num-displayed");
  $("#search_input").fastLiveFilter(".search-results", {
    callback: function(total) { numDisplayedAssets.html(addCommas(total-1));}
  });
};

closeSearch = function() {
  $('body').removeClass('scroll-lock search-active');
  $('#search_input').val("");
} 

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
  init_fastlive_filter();
}
