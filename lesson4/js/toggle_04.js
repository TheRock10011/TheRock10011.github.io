const button = document.querySelector('.menu');
const mainnav = document.querySelector('.navbar');
button.addEventListener(
  'click',
  () => {
    mainnav.classList.toggle('responsive');
  },
  false
);
// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove('responsive');
};


