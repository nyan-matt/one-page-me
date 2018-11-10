new WOW().init();

window.onscroll = function(event){
  let heroText = document.getElementById('hero-text');
  let topHeight = document.getElementById('header').offsetHeight;
  heroText.style.top = (topHeight - document.body.scrollTop * 1.25) + 'px';
};



