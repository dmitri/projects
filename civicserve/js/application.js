/* detect scroll for the logo resizing */
// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

//----------------------------------------------------------------------------------------------------

/* global fadeIn function */

function fadeIn(element, duration = 600) {
  element.style.display = '';
  element.style.opacity = 0;
  var last = +new Date();
  var tick = function() {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();
    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

/* click assignments */

/* welcome CTA click assignments */
document.getElementById('cs-cta-developer').addEventListener("click",function(){
  document.getElementById('cs-cta-welcome-container').style.display = "none";
  fadeIn(document.getElementById('cs-cta-developer-container'), 300);
});

document.getElementById('cs-cta-business').addEventListener("click",function(){
  document.getElementById('cs-cta-welcome-container').style.display = "none";
  fadeIn(document.getElementById('cs-cta-developer-container'), 300);
  triggerTab("business");
});

document.getElementById('cs-cta-resident').addEventListener("click",function(){
  document.getElementById('cs-cta-welcome-container').style.display = "none";
  fadeIn(document.getElementById('cs-cta-developer-container'), 300);
  triggerTab("resident");
});

//-----------------------------------------------------------------------------------------------------


/* checks the hash to see if a tab should be clicked */
window.onhashchange=hashTriggerTab;
window.onload=hashTriggerTab;

function hashTriggerTab(){
  var current_hash=window.location.hash;
  if(current_hash.substring(0,1)=='#')current_hash=current_hash.substring(1);
  if(current_hash!=''){
      var trigger=document.querySelector('.nav-pills a[href="#'+current_hash+'"]');
      if(trigger)trigger.click();
  }
}

function triggerTab(tab) {
  var trigger=document.querySelector('.nav-pills a[href="#cs-welcome-'+tab+'-tab"]');
  if(trigger)trigger.click();
}