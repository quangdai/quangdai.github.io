$(document).ready(function () {
   var $carousel = $('.js-carousel'),
      $carouselIcons = ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'];
   function runnCarousel() {
      if (!$().owlCarousel) {
         console.log('carousel: owlCarousel plugin is missing.');
         return true;
      }
      if ($carousel.length > 0) {
         $carousel.each(function () {
            var elem = $(this),
               carouselNav = elem.attr('data-arrows'),
               carouselDots = elem.attr('data-dots') || true,
               carouseldotsData = elem.attr('data-dotsData') || false,
               carouselAutoPlay = elem.attr('data-autoplay') || false,
               carouselAutoplayTimeout = elem.attr('data-autoplay-timeout') || 5000,
               carouselAutoWidth = elem.attr('data-auto-width') || false,
               resizeHeight = elem.attr('auto-height') || false,
               carouseAnimateIn = elem.attr('data-animate-in') || false,
               carouseAnimateOut = elem.attr('data-animate-out') || false,
               carouselLoop = elem.attr('data-loop') || false,
               carouselMargin = elem.attr('data-margin') || 0,
               carouselVideo = elem.attr('data-video') || false,
               carouselItems = elem.attr('data-items') || 4,
               carouselItemsLg = elem.attr('data-items-lg') || Number(carouselItems),
               carouselItemsMd = elem.attr('data-items-md') || Number(carouselItemsLg),
               carouselItemsSm = elem.attr('data-items-sm') || Number(carouselItemsMd),
               carouselItemsXs = elem.attr('data-items-xs') || Number(carouselItemsSm),
               carouselItemsXxs = elem.attr('data-items-xxs') || Number(carouselItemsXs);
            if (carouselItemsMd >= 3) {
               var carouselItemsSm = elem.attr('data-items-sm') || Number(2);
            }
            if (carouselItemsSm >= 2) {
               var carouselItemsXs = elem.attr('data-items-xs') || Number(2);
            }
            if (carouselItemsXs >= 1) {
               var carouselItemsXxs = elem.attr('data-items-xxs') || Number(1);
            }
            if (carouselNav == 'false') {
               carouselNav = false;
            } else {
               carouselNav = true;
            }
            if (carouselDots == 'false') {
               carouselDots = false;
            } else {
               carouselDots = true;
            }
            if (carouseldotsData == 'true') {
               carouseldotsData = true;
            } else {
               carouseldotsData = false;
            }
            if (carouselAutoPlay == 'false') {
               carouselAutoPlay = false;
            }
            var t = setTimeout(function () {
               elem.owlCarousel({
                  nav: carouselNav,
                  dots: carouselDots,
                  dotsData: carouseldotsData,
                  thumbs: true,
                  thumbsPrerendered: true,
                  navText: $carouselIcons,
                  autoplay: carouselAutoPlay,
                  autoplayTimeout: carouselAutoplayTimeout,
                  autoplayHoverPause: true,
                  autoWidth: carouselAutoWidth,
                  autoHeight: resizeHeight,
                  loop: carouselLoop,
                  margin: Number(carouselMargin),
                  smartSpeed: Number(1300),
                  video: carouselVideo,
                  animateIn: carouseAnimateIn,
                  animateOut: carouseAnimateOut,
                  video: true,
                  lazyLoad: true,
                  videoWidth: true,
                  videoHeight: true,
                  onInitialize: function (event) {
                     // setTimeout(function () {
                     elem.addClass("owl-carousel owl-theme");
                     //    }, 1000);
                  },
                  responsive: {
                     0: {
                        items: Number(carouselItemsXxs)
                     },
                     480: {
                        items: Number(carouselItemsXs)
                     },
                     768: {
                        items: Number(carouselItemsSm)
                     },
                     992: {
                        items: Number(carouselItemsMd)
                     },
                     1200: {
                        items: Number(carouselItemsLg)
                     }
                  }
               });
            }, 0);
         });
      }
   }
   runnCarousel();

});



$('.goto-introduction').click(function () {
   $('html,body').animate({
      scrollTop: $('.story-introduction').offset().top
   }, 'slow');
});

$('.btn-close').click(function() {
    $('.guide-size').fadeOut('slow');
});



var owl;
$(document).ready(function () {
});

$(document).ready(function () {

   if ($('#home-video').length > 0) {
      const home_vd_player = new Plyr('#home-video', { hideControls: false, captions: { active: true } });
      home_vd_player.toggleControls(false);

      home_vd_player.on('play', event => {
         home_vd_player.toggleControls(true);
      });
   }
   if ($('.js-slider_video').length > 0) {
      const slider_video = new Plyr('.js-slider_video', { muted: true, hideControls: true, captions: { active: false } });
      slider_video.toggleControls(false);
      slider_video.on('play', event => {
         slider_video.toggleControls(false);
      });
   }
   owl = $(".js-carousel-home").owlCarousel({
      autoplay: true,
      autoplaySpeed: 3000,
      loop: false,
      navSpeed: 300,
      nav: false,
      items: 1,
      autoHeight: true,
      dots: false,
      margin: 0,
   });
   owl.on('changed.owl.carousel', function (e) {
      // slider_video.pause();
   });


   var sync1 = $("#sync1");
   var sync2 = $("#sync2");
   var slidesPerPage = 8; //globaly define number of elements per page
   var syncedSecondary = true;

   sync1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      margin: 10,
      responsiveRefreshRate: 200,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
   }).on('changed.owl.carousel', syncPosition);

   sync2
      .on('initialized.owl.carousel', function () {
         sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
         items: slidesPerPage,
         dots: false,
         nav: false,
         smartSpeed: 200,
         slideSpeed: 500,
         margin: 10,
         slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
         responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);

   function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
         current = count;
      }
      if (current > count) {
         current = 0;
      }

      //end block

      sync2
         .find(".owl-item")
         .removeClass("current")
         .eq(current)
         .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
         sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
         sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
   }

   function syncPosition2(el) {
      if (syncedSecondary) {
         var number = el.item.index;
         sync1.data('owl.carousel').to(number, 100, true);
      }
   }

   sync2.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
   });



   lightbox.option({
      'wrapAround': true,
      'imageFadeDuration': 230,
      'imageFadeDuration': 230,
      'resizeDuration': 300,
      'showImageNumberLabel': false,
   });


   /* Quantity */
   $('.plus').click(function () {
      $(this).prev().val(+$(this).prev().val() + 1);
   });
   $('.minus').click(function () {
      if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
   });

   /* Collapse */
   var acc = document.getElementsByClassName("accordion");
   var i;

   for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
         this.classList.toggle("active");
         var panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
         } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
         }
      });
   }

   if ($(window).width() < 992) {
      $(".contact .title").attr("data-toggle", "collapse");
      $(".contact .content").addClass("collapse");
      $(".product .title").attr("data-toggle", "collapse");
      $(".product .list").addClass("collapse");
      $(".info .title").attr("data-toggle", "collapse");
      $(".info .list").addClass("collapse");
   }
   $("#close_cart_popup").click(function () {
      $(".cart-popup").css("display", "none");
   });
   $(".cart-popup #nagative_cart_content").click(function () {
      $(".cart-popup").css("display", "none");
   });


   // close spin game
   $('#spin-closer').click(function () {
      $(".spin-game-discount").addClass("hide");
   });

   $('.js-show-spin').click(function () {
      $(".spin-game-discount").removeClass("hide");
   });
   setTimeout(function () {
      $(".spin-game-discount").removeClass("hide");
   }, 3000);



});


$(window).bind('scroll', function () {
   if ($(window).scrollTop() > 200) {
      $('main').addClass('menu-fixed');
      $('.menu-main-fixed').addClass('fixed');
   } else {
      $('main').removeClass('menu-fixed');
      $('.menu-main-fixed').removeClass('fixed');
   }
});

// menu mobile
var check_isShow = 0;
$('.js-show-meni-mobile').click(function() {
    $('.menu-wrap').addClass('is-show');
});
$('.js-hide-menu').on('click', function () {
   if (check_isShow == 1) {
      check_isShow = 0;
      $('.child-main-menu.is-show').removeClass('is-show');
   } else {
      $('.menu-wrap').removeClass('is-show');
   }
});

$('.has-child >a').click(function() {
    check_isShow = 1;
    $(this).find('.child-main-menu').addClass('is-show');
})

$('.js-show-search').on('click', function() {
    $('.form-search').addClass('active');
});

$(document).mouseup(function(e) {
    var container = $(".form-search");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.form-search').removeClass('active');
    }
});
$(document).mouseup(function(e) {
    var container = $(".menu-wrap");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.menu-wrap').removeClass('is-show');
    }
});

$('.show-local-store').click(function() {
    $('.man__popup').show();
});
$('.man__popup--wrapper .closed').click(function() {
    $('.man__popup').hide();
});
$(document).mouseup(function(e) {
    var container = $(".man__popup--wrapper");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.man__popup').hide();
    }
});

$(window).scroll(function() {
    $('.man__popup').hide();
    $('.menu-wrap').removeClass('is-show');
    $('.form-search').removeClass('active');
});


function spin(deg, count) {
   let rotate = (deg * 30) + ((count * 5) * 360);
   $('.privy-s2w-text-container').css('transform', 'rotateZ(' + rotate + 'deg)');
   $('.privy-s2w-wheel-middleground').css('transform', 'rotateZ(' + rotate + 'deg)');
   $('.privy-s2w-wheel-pegs').css('transform', 'rotateZ(' + rotate + 'deg)');
}
var count_click = 1;
$('.privy-s2w-text-container').click(function () {
   count_click++;
   let deg = Math.floor(Math.random() * 12) + 1;
   spin(-deg, count_click);
   let data_spin = $("[data-spin=" + deg + "]").text();
   alert(deg);
   alert(data_spin);
})


if ($(".cart-fixed-wrap").length > 0) {
   window.onclick = function (event) {
      if ($(event.target).hasClass("cart-fixed-wrap")) {
         handleHideCartFixed();
      }
   }
   $("#close_cart_fixed").click(function () {
      handleHideCartFixed();
   });
}
function handleHideCartFixed() {
   if ($(".cart-fixed-wrap").length > 0) {
      $(".cart-fixed-wrap").removeClass('show');
      $(".cart-fixed").removeClass('show');
      $(".utilities").removeClass('d-none');
      setTimeout(function () { $(".cart-fixed-wrap").addClass("d-none"); }, 400);
   }
}

if ($(".utilities .cart").length > 0 && $(".cart-fixed-wrap").length > 0) {
   $(".utilities .cart").click(() => {
      $(".cart-fixed-wrap").addClass('show');
      $(".cart-fixed-wrap").removeClass('d-none');
      $(".cart-fixed").addClass('show');

      $(".utilities").addClass('d-none');
   });

}

$(window).bind('load', function () {
   AOS.init();
})
$('.btn-close').click(function() {
   $('.guide-size').fadeOut('slow');
});
$('.guide-calculator-size').click(function(){
   $('.guide-size').fadeIn('slow');
});