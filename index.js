//scroll-bar

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});


//swiper
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".coming-container", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
          0: {
              slidesPerView: 2,
          },
          568: {
              slidesPerView: 3,
          },
          768: {
              slidesPerView: 4,
          },
          968: {
              slidesPerView: 5,
          },
      }
  });
});

