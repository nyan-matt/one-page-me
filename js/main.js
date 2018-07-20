new WOW().init();

window.onscroll = function(event){
  let heroText = document.getElementById('hero-text');
  let topHeight = document.getElementById('header').offsetHeight;
  heroText.style.top = (topHeight - document.body.scrollTop * 1.25) + 'px';
};

let skillToggle = document.getElementsByClassName('skill-toggle');

Array.from(skillToggle).map((element) => {
  element.addEventListener('click', (event) => {
    event.target.nextElementSibling.classList.toggle('visible');
    event.target.classList.toggle('expanded');
  })

})