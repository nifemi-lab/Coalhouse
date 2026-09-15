// Hamburger nav toggle
function toggleNav() {
  const nav = document.getElementById('navContainer');
  if (nav) {
    nav.classList.toggle('active');
  }
}

// Slideshow (only runs on pages that have .slide elements, e.g. menu.html)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slide-dots');

if (slides.length > 0 && dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('slide-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

const dots = document.querySelectorAll('.slide-dot');

function showSlide(index) {
  slides.forEach(s => {
    s.classList.remove('active');
    if (s.tagName === 'VIDEO') {
      s.pause();
    }
  });
  dots.forEach(d => d.classList.remove('active'));

  slideIndex = (index + slides.length) % slides.length;
  const current = slides[slideIndex];
  current.classList.add('active');
  dots[slideIndex].classList.add('active');

  if (current.tagName === 'VIDEO') {
    current.currentTime = 0;
    current.play();
  }
}

function changeSlide(direction) {
  showSlide(slideIndex + direction);
}

function goToSlide(index) {
  showSlide(index);
}

if (slides.length > 0) {
  setInterval(() => changeSlide(1), 7000);
}

// Reserve form handler (only runs on reserve.html)
function handleReserve(event) {
  event.preventDefault();
  alert("Thanks! Your table request has been received. We'll confirm shortly.");
  event.target.reset();
}