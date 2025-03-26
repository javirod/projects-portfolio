function toggleMenu() {
   const menu = document.querySelector(".hamburger-links");
   const icon = document.querySelector(".hamburger-icon");

   menu.classList.toggle("open");
   icon.classList.toggle("open");
}



const container = document.querySelector('.bg-img1');
const container1 = document.querySelector('.bg-img2');

window.addEventListener('scroll', () => {
   const scrollPosition = window.scrollY;
   const maxScroll = 1000;
   const opacity = (1 - (scrollPosition / maxScroll));
   
   container.style.opacity = opacity;
});

window.addEventListener('scroll', () => {
   const scrollPosition = window.scrollY;
   const maxScroll = 1100;
   const opacity1 = ((scrollPosition - maxScroll) / maxScroll) * 0.4;
   
   container1.style.opacity = opacity1;
});