const el = document.querySelector(".cs-portal-nav")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-stuck", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);


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

  function fadeOut(element, duration = 600) {
    element.style.display = '';
    element.style.opacity = 1;
    var last = +new Date();
    var tick = function() {
      element.style.opacity = -element.style.opacity + (new Date() - last) / duration;
      last = -new Date();
      if (-element.style.opacity > 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }

  document.getElementById('filter-incentive').addEventListener("click",function(e){
    //e.preventDefault();
    document.querySelectorAll(".product-set").forEach(a=>a.style.display = "none");
    document.getElementById('product-loading-spinner').style.display = 'flex';
    document.getElementById('divider').style.display = 'none';

    setTimeout(() => {
        document.getElementById('product-loading-spinner').style.display = 'none';
        fadeIn(document.getElementById('incentive'), 300);
      }, "1000")
    
  });

  document.getElementById('filter-non-incentive').addEventListener("click",function(e){
    //e.preventDefault();
    document.querySelectorAll(".product-set").forEach(a=>a.style.display = "none");
    document.getElementById('product-loading-spinner').style.display = 'flex';
    document.getElementById('divider').style.display = 'none';

    setTimeout(() => {
        document.getElementById('product-loading-spinner').style.display = 'none';
        fadeIn(document.getElementById('non-incentive'), 300);
      }, "1000")
  });

  document.getElementById('filter-all').addEventListener("click",function(e){
    //e.preventDefault();
    document.querySelectorAll(".product-set").forEach(a=>a.style.display = "none");
    document.getElementById('product-loading-spinner').style.display = 'flex';
    
    
    setTimeout(() => {
        document.getElementById('product-loading-spinner').style.display = 'none';
        fadeIn(document.getElementById('incentive'), 300);
        fadeIn(document.getElementById('divider'), 300);
        fadeIn(document.getElementById('non-incentive'), 300);
      }, "1000")
  });

  document.getElementById('get-more-incentives').addEventListener("click",function(e){
    document.getElementById('incentive-spinner').style.display = 'inline-block';
    
    setTimeout(() => {
        this.style.display = 'none';
        fadeIn(document.getElementById('more-incentives'), 300);
      }, "1000")
  });

  document.getElementById('get-more-non-incentives').addEventListener("click",function(e){
    document.getElementById('non-incentive-spinner').style.display = 'inline-block';
    
    setTimeout(() => {
        this.style.display = 'none';
        fadeIn(document.getElementById('more-non-incentives'), 300);
      }, "1000")
  });



  //fadeIn(document.getElementById('cs-cta-developer-container'), 300);