$( document ).ready(function() {
  $.getJSON("../data/assets.json",function(data){
      $.each(data,function(index,element){
          console.log(element.IT_OWNER);
      });
  });
});

