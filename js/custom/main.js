/**
 * Created by themeforseo on 5/5/2016.
 */

(function ($) {
    "use strict";
    var tfs_close = $(".tfs-close");
    var tfs_wrap = $(".tfs-wrap");
    var tfs_popup_bg = $(".tfs-popup-bg");
    var popup_search = $(".popup-search");
    var search_popup = $(".search-popup");
    var search_close = $(".search-close");

    tfs_close.click(function () {
        tfs_wrap.removeClass("tfs-popup-ready");
        tfs_popup_bg.removeClass("tfs-popup-ready");
    });
    tfs_popup_bg.click(function () {
        tfs_wrap.removeClass("tfs-popup-ready");
        tfs_popup_bg.removeClass("tfs-popup-ready");
        popup_search.removeClass("search-show");
    });


    // popup search box
    search_popup.click(function () {
        popup_search.addClass("search-show");
        tfs_popup_bg.addClass("tfs-popup-ready");
    });
    search_close.click(function () {
        popup_search.removeClass("search-show");
        tfs_popup_bg.removeClass("tfs-popup-ready");
    });


    /*----------------------------
     First Popup
     ------------------------------ */
    tfs_close.on('click', function () {
        tfs_wrap.removeClass("tfs-popup-ready");
        tfs_popup_bg.removeClass("tfs-popup-ready");
    });
    tfs_popup_bg.on('click', function () {
        tfs_wrap.removeClass("tfs-popup-ready");
        tfs_popup_bg.removeClass("tfs-popup-ready");
        popup_search.removeClass("search-show");
    });
    /*----------------------------
      One Columns Slider
     ------------------------------ */
    $(".columns1").owlCarousel({
        loop: true,
        autoPlay: true,
        nav: true,
        navText: ["<i class='fa fa-caret-left btn-ctr'></i>", "<i class='fa fa-caret-right btn-ctr'></i>"],
        items: 1,
        margin: 0,
        singleItem: true,
        autoplayTimeout: 5000
    });

    /*----------------------------
     Two Columns Slider
     ------------------------------ */

    $(".columns2").owlCarousel({
        loop: true,
        autoplay: false,
        responsiveClass: true,
        margin: 30,
        nav: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true,
                loop: true
            },
            992: {
                items: 2,
                nav: true,
                loop: true
            }
        }
    });

    /*----------------------------
     Three Columns Slider
     ------------------------------ */

    $(".columns3").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 5000,
        margin: 30,
        nav: true,
        size: 2,
        vertical: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true,
                loop: true
            },
            992: {
                items: 3,
                nav: true,
                loop: true
            },
            1200: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });

    /*----------------------------
     Four Columns Slider
     ------------------------------ */

    $(".columns4").owlCarousel({
        loop: true,
        autoplay: false,
        responsiveClass: true,
        margin: 30,
        nav: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                // nav:true
            },
            480: {
                items: 1,
                // nav:true
            },
            768: {
                items: 2,
                // nav:true,
                loop: true
            },
            992: {
                items: 3,
                // nav:true,
                loop: true
            },
            1200: {
                items: 4,
                // nav:true,
                loop: true
            }
        }
    });
    /*----------------------------
     five Columns Slider
     ------------------------------ */
    $(".columns5").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        margin: 30,
        nav: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
                nav: true
            },
            768: {
                items: 3,
                nav: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });
    /*----------------------------
     Six Columns Slider
     ------------------------------ */
    $(".columns6").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        margin: 30,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
                nav: true
            },
            768: {
                items: 3,
                nav: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                loop: true
            },
            1200: {
                items: 6,
                nav: true,
                loop: true
            }
        }
    });

    /*----------------------------
     gallery image thumb
     ------------------------------ */
    $(".gallery-image-thumb").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        margin: 24,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            480: {
                items: 3,
                nav: true
            }
        }
    });
    /*----------------------------
     gallery image thumb fullwidth
     ------------------------------ */
    $(".gallery-image-thumb-fullwidth").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        margin: 24,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            480: {
                items: 4,
                nav: true
            }
        }
    });


    //hover top bar
    $('.hover-dropdown').hover(function () {
        $(this).find('.show-dropdown').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.show-dropdown').stop(true, true).delay(200).fadeOut(500);
    });

    //hover cart
    $('.top-mini-cart').hover(function () {
        $(this).find('.cart-dd').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.cart-dd').stop(true, true).delay(200).fadeOut(500);
    });
    /*----------------------------
    menu
     ------------------------------ */
    var w_doc = $(document).width();
    var icon = "<i class='fa fa-angle-right' aria-hidden='true'></i>";
    var i_m = $('.nav .item');
    var s_m = $('.sub-menu li');
    if ('.menu-left .nav .item div'.length) {
        if (w_doc > 992) {
            $('.menu-left .nav .item div').siblings('a').append(icon);
        }
    }
    i_m.on('mouseenter mouseleave', function () {
        $(this).toggleClass('active');
    });
    s_m.on('mouseenter mouseleave',function () {
        $(this).toggleClass('active');
    });
    var main_mega = $('.main-mega');
    var w_main = $('.main').width();
    var item_menu = $('.menu-left .item');
    if (w_doc > 1200) {
        main_mega.css('width', ' ' + w_main + 'px');
    }
    item_menu.on('mouseenter mouseleave', function () {
        var submenu = $(this).find('.tfs-sub-mennu');
        var height_submenu = submenu.height();
        var position_submenu = (height_submenu / 2);
        if (w_doc > 1200) {
            submenu.css('bottom', ' -' + position_submenu + 'px');
        }
    });



})(jQuery);
