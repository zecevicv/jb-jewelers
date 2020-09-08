window.addEventListener('load', () => {
  /* #Hero Slider
  ======================================================= */
  new Swiper('#heroSlider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '#heroSlider .swiper-button-next',
      prevEl: '#heroSlider .swiper-button-prev',
    },
    pagination: {
      el: '#heroSlider .swiper-pagination'
    },
    loop: true
  });

  /* #Popular Products Slider
  ======================================================= */
  const popularProductsTopSlider = new Swiper('#popularProductsTopSlider', {
    slidesPerView: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 4,
        allowTouchMove: true,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 8,
        allowTouchMove: false,
      }
    },
    navigation: {
      nextEl: '#popularProductsTopSlider .swiper-button-next',
      prevEl: '#popularProductsTopSlider .swiper-button-prev',
    },
  });

  const popularProductsBottomSlider = new Swiper('#popularProductsBottomSlider', {
    slidesPerView: 1,
    thumbs: {
      swiper: popularProductsTopSlider
    },
    noSwiping: true,
    allowTouchMove: false,
    effect: 'fade',
    speed: 500
  });

  // Init child sliders
  const popularProductsSlidesNum = document.querySelectorAll('#popularProductsBottomSlider > .swiper-wrapper > .swiper-slide');
  popularProductsSlidesNum.forEach((slide, index) => {
    let i = index + 1;
    new Swiper('#popularProductsProductSlider' + i, {
      slidesPerView: 5,
      loop: true,
      navigation: {
        nextEl: '#popularProductsProductSlider' + i + ' .swiper-button-next',
        prevEl: '#popularProductsProductSlider' + i + ' .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5
        },
        1024: {
          slidesPerView: 5
        }
      }
    });
  });

  /* #Brands Slider
  ======================================================= */
  const brandsTopSlider = new Swiper('#brandsTopSlider', {
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    slidesPerView: 5,
    slidesPerColumn: 2,
    slidesPerGroup:2,
    spaceBetween: 20,
    slidesPerColumnFill: 'row',
    direction: 'horizontal',
    navigation: {
      nextEl: '#brandsTopSlider .swiper-button-next',
      prevEl: '#brandsTopSlider .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerColumn: 1,
        slidesPerGroup:1,
        slidesPerView: 2,
        allowTouchMove: true,
      },
      1024: {
        slidesPerColumn: 2,
        slidesPerGroup:2,
        slidesPerView: 5,
        allowTouchMove: false,
      }
    }
  });

  const brandsBottomSlider = new Swiper('#brandsBottomSlider', {
    slidesPerView: 1,
    thumbs: {
      swiper: brandsTopSlider
    },
    noSwiping: true,
    allowTouchMove: false,
    effect: 'fade',
    speed: 500
  });

  // Init child sliders
  const brandsSlidesNum = document.querySelectorAll('#brandsBottomSlider > .swiper-wrapper > .swiper-slide');
  brandsSlidesNum.forEach((slide, index) => {
    let i = index + 1;
    new Swiper('#brandsSlider' + i, {
      slidesPerView: 3,
      loop: true,
      navigation: {
        nextEl: '#brandsSlider' + i + ' .swiper-button-next',
        prevEl: '#brandsSlider' + i + ' .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });

  /* #Videos Slider
  ======================================================= */
  const videoSlider = new Swiper('#videosSlider', {
    slidesPerView: 1.5,
    spaceBetween: 45,
    pagination: {
      el: '#videosSlider .swiper-pagination',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 1.5
      }
    },
    on: {
      init: function() {
        let currentSlideVideo = document.querySelector('#videosSlider .swiper-slide-active video');

        // Play only one on current active slide
        currentSlideVideo.play();
      },
      slideChangeTransitionEnd: function() {
        console.log('slide changed');
        let videos = document.querySelectorAll('#videosSlider video');
        let currentSlideVideo = document.querySelector('#videosSlider .swiper-slide-active video');

        // Pause all videos
        videos.forEach((video) => {
          video.pause();
        });

        // Play only one on current active slide
        currentSlideVideo.play();
      }
    }
  });

  /* #Posts Slider
  ======================================================= */
  new Swiper('#postsSlider', {
    slidesPerView: 3,
    noSwiping: true,
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 30,
        allowTouchMove: true
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 100,
        allowTouchMove: false,
      }
    },
    pagination: {
      el: '#postsSlider .swiper-pagination',
    },
  });

  /* #Instagram Slider
  ======================================================= */
  new Swiper('#instagramSlider', {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerColumnFill: 'row',
    direction: 'horizontal',
    breakpoints: {
      0: {
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      1024: {
        slidesPerColumn: 1,
        slidesPerGroup:1,
        slidesPerView: 4,
      }
    },
    pagination: {
      el: '#instagramSlider .swiper-pagination',
    },
  });
});