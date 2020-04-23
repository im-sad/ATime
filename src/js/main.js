document.addEventListener('DOMContentLoaded', function() {
  'use strict';


  // DEMO LINKS
  (function() {
    const demoLinks = document.getElementsByClassName('js-demo');

    for (let i = 0; i < demoLinks.length; i++) {
      demoLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        alert('whoof whoof');
      })
    }
  })();


  // MOB MENU
  (function() {
    const burgerMenu = document.getElementById('js-burger');
    const mobileMenu = document.getElementById('js-mobile-menu');
    const mobileSubMenu = document.getElementsByClassName('js-show-submenu');

    if (!burgerMenu || !mobileMenu) return;

    burgerMenu.addEventListener('click', function() {
      this.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-active');
    });

    for (let i = 0; i< mobileSubMenu.length; i++) {
      mobileSubMenu[i].addEventListener('click', function() {
        this.classList.toggle('is-opened');
      });
    }
  })();


  // SLIDER
  (function() {
    const featuresSlider = document.getElementById('js-features');

    if (!featuresSlider) return;

    const featuresSliderObj = new Swiper (featuresSlider, {
      slidesPerView: 1,
      observer: true,
      loop: false,
      autoHeight: true,
      grabCursor: true,
      pagination: {
        el: '#js-features-pag',
        clickable: true
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
          autoHeight: false,
        }
      }
    });
  })();


});
