// Init up the UI

$(function(){
  // Get the three owner lists
  getPeopleList('Business_Owner', 'business-owner');
  getPeopleList('IT_OWNER', 'it-owner');
  getPeopleList('IT_SPONSOR', 'it-sponsor');
  
  getAssetsList('App_Name');
  
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
                {"<>":"h2","class":"card-title", "html":"${App_Name}"},
                {"<>":"p","html":"${App_Description}"},
              ]},
          ]},
      ]
  };

  $("#"+container+"-list").json2html({},transforms.list);

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
          $('.primary-pod:nth-child(2), .primary-pod:nth-child(3)').addClass('invisible');
          $('.asset-pod').addClass('col-sm-12 focused');
          $('.asset-left').removeClass('col-12').addClass('col-3');
          $('.asset-filter-list li').removeClass('active');
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
};

closeAssetsDetail = function() {
  $('.primary-pod:nth-child(2), .primary-pod:nth-child(3)').removeClass('invisible');
  $('.asset-pod').removeClass('col-sm-12 focused');
  $('.asset-left').removeClass('col-3').addClass('col-12');
  $('.asset-filter-list li').removeClass('active');
}

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
