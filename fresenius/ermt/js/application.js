$( document ).ready(function() {
  
  $('[data-toggle="tooltip"]').tooltip();
  
  $( ".sub-queue-toggle" ).on( "click", function( event ) {
    event.preventDefault();
    $('.sub-row-1').fadeToggle();
  });
  
  $(".count_me1").characterCounter({limit: 120});
  $(".count_me2").characterCounter({limit: 600});
  $(".count_me3").characterCounter({limit: 100});
  $(".count_me4").characterCounter({limit: 450});
});

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Adam Michelson', 'Alex Jalanewski', 'Brad Whitford', 'Bob Sabolefski', 'Bill Fink'];

$('#scrollable-dropdown-menu .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});