const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const sliders = document.querySelectorAll('.slider-wrapper');
const slides = document.querySelectorAll('.slider-img .slide');
const toggleMenu = document.querySelector('.toggle-menu');
const navbar = document.querySelector('.navbar');
let index = 0;

function nextSlide() {
   index += 1;

   if (index > slides.length - 1) index = 0

   sliders.forEach(slider => slider.style.transform = `translateX(-${index * 100}%)`);
}

function prevSlide() {
   index -= 1;

   if (index < 0) index = slides.length - 1;

   sliders.forEach(slider => slider.style.transform = `translateX(-${index * 100}%)`);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
toggleMenu.addEventListener('click', function () {
   this.classList.toggle('active');
   navbar.classList.toggle('show');
});

window.addEventListener('resize', (e) => {
   if (window.matchMedia('(min-width: 510px)').matches) {
      toggleMenu.classList.remove('active');
      navbar.classList.remove('show');
   }
});

window.addEventListener('keyup', (event) => {
   const { key } = event;
   if (key === 'ArrowRight') nextSlide();
   if (key === 'ArrowLeft') prevSlide();
});
