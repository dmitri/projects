// Set up the UI

$(function(){
  // Get the three owner lists
  getPeopleList('Business_Owner', 'business-owner');
  getPeopleList('IT_OWNER', 'it-owner');
  getPeopleList('IT_SPONSOR', 'it-sponsor');
  
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
