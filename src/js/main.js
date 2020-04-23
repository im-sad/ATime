@@include('plugins/swiper.min.js')

document.addEventListener('DOMContentLoaded', function() {
  'use strict';


  // DEMO LINKS
  (function() {
    const demoLinks = document.getElementsByClassName('js-demo');

    for (let i = 0; i < demoLinks.length; i++) {
      demoLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        const rootEl = document.documentElement;

        rootEl.classList.add('demo');

        setTimeout(function() {
          rootEl.classList.remove('demo');
        }, 1000);
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
    let swiperSlider;

    const breakpointChecker = function() {
      if (swiperSlider !== undefined ) swiperSlider.destroy(true, true);

      return initSwiper();
    };

    const initSwiper = function() {
      swiperSlider = new Swiper (featuresSlider, {
        slidesPerView: 1,
        loop: false,
        autoHeight: true,
        grabCursor: true,
        pagination: {
          el: '#js-features-pag',
          clickable: true
        },
        breakpoints: {
          1202: {
            slidesPerView: 2,
            autoHeight: false,
          }
        }
      });
    };

    window.addEventListener('resize', throttle(breakpointChecker, 500));
    breakpointChecker();

    function throttle(func, ms) {
      var isThrottled = false,
          savedArgs,
          savedThis;

      function wrapper() {
        if (isThrottled) {
          savedArgs = arguments;
          savedThis = this;
          return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
          isThrottled = false;
          if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
          }
        }, ms);
      }

      return wrapper;
    }
  })();

});
