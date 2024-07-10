const cover = document.querySelector('.main__image-cover');
const icon = document.querySelector('.main__icon-view');
//const equil = document.querySelector('.main__image-equilibrium');

cover.addEventListener('mouseover', () => {
  cover.style.opacity = "0.4";
  icon.style.opacity = "1.0";
});

cover.addEventListener('mouseout', () => {
  cover.style.opacity = "0";
  icon.style.opacity = "0";
});

icon.addEventListener('mouseover', () => {
  cover.style.opacity = "0.4";
  icon.style.opacity = "1.0";
});

icon.addEventListener('mouseout', () => {
  cover.style.opacity = "0";
  icon.style.opacity = "0";
});
