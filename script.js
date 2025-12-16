// Hero background slideshow with sliding animation
(function() {
  const slideshowImages = [
    'output_web/IMG_0056_bg.png',
    'output_web/IMG_3615_bg.png',
    'output_web/IMG_5820_bg.png',
    'output_web/IMG_8879_bg.png',
    'output_web/IMG_9037 2_bg.png',
    'output_web/IMG_9038_bg.png'
  ];

  const slide1 = document.getElementById('hero-slideshow-1');
  const slide2 = document.getElementById('hero-slideshow-2');
  if (!slide1 || !slide2) return;

  let currentIndex = 0;
  let isTransitioning = false;
  let activeSlide = slide1;
  let nextSlide = slide2;

  // Preload all images for smoother transitions
  const images = [];
  slideshowImages.forEach((src, index) => {
    const img = new Image();
    img.src = src;
    images.push(img);
    img.onload = () => {
      if (index === 0) {
        slide1.style.backgroundImage = `url('${src}')`;
      }
    };
  });

  function changeSlide() {
    if (isTransitioning) return;
    isTransitioning = true;

    // Update to next image
    currentIndex = (currentIndex + 1) % slideshowImages.length;
    nextSlide.style.backgroundImage = `url('${slideshowImages[currentIndex]}')`;
    
    // Position next slide off-screen to the right and make it visible
    nextSlide.style.transform = 'translateX(100%)';
    nextSlide.style.opacity = '1';
    nextSlide.classList.add('active');

    // Small delay to ensure image is loaded, then trigger slide animation
    setTimeout(() => {
      // Slide current out to left, next in from right
      activeSlide.style.transform = 'translateX(-100%)';
      nextSlide.style.transform = 'translateX(0)';
    }, 100);

    // After animation completes, reset and swap references
    setTimeout(() => {
      activeSlide.classList.remove('active');
      activeSlide.style.opacity = '0';
      activeSlide.style.transform = 'translateX(0)'; // Reset for next cycle
      
      // Swap active and next
      const temp = activeSlide;
      activeSlide = nextSlide;
      nextSlide = temp;
      
      isTransitioning = false;
    }, 1600);
  }

  // Change slide every 5 seconds
  setInterval(changeSlide, 5000);
})();

// Smooth scroll for navigation links with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
