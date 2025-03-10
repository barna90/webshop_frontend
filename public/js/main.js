! function(b) {
    "use strict";
    /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream;
    var c = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return c.Android() || c.BlackBerry() || c.iOS() || c.Opera() || c.Windows()
        }
    };
    b(function() {
        var w, a, t, s, e, i, o, n, l, r;
        b("[data-background]").each(function() {
                if (b(this).attr("data-background")) {
                    var e = b(this).attr("data-background");
                    b(this).css({
                        background: "url(" + e + ")"
                    })
                }
            }), 0 < (w = b(".owl-slider")).length && w.each(function() {
                var e = b(this),
                    a = e.data("owl-auto"),
                    t = e.data("owl-loop"),
                    s = e.data("owl-speed"),
                    i = e.data("owl-gap"),
                    o = e.data("owl-nav"),
                    n = e.data("owl-dots"),
                    l = e.data("owl-animate-in") ? e.data("owl-animate-in") : "",
                    r = e.data("owl-animate-out") ? e.data("owl-animate-out") : "",
                    c = e.data("owl-item"),
                    d = e.data("owl-item-xs"),
                    p = e.data("owl-item-sm"),
                    u = e.data("owl-item-md"),
                    f = e.data("owl-item-lg"),
                    v = e.data("owl-nav-left") ? e.data("owl-nav-left") : "<i class='fa fa-angle-left'></i>",
                    h = e.data("owl-nav-right") ? e.data("owl-nav-right") : "<i class='fa fa-angle-right'></i>",
                    g = e.data("owl-duration"),
                    m = "on" == e.data("owl-mousedrag");
                2 <= w.children("div, span, a, img, h1, h2, h3, h4, h5, h5").length && e.owlCarousel({
                    animateIn: l,
                    animateOut: r,
                    margin: i,
                    autoplay: a,
                    autoplayTimeout: s,
                    autoplayHoverPause: !0,
                    loop: t,
                    nav: o,
                    mouseDrag: m,
                    touchDrag: !0,
                    autoplaySpeed: g,
                    navSpeed: g,
                    dotsSpeed: g,
                    dragEndSpeed: g,
                    navText: [v, h],
                    dots: n,
                    items: c,
                    responsive: {
                        0: {
                            items: d
                        },
                        480: {
                            items: p
                        },
                        768: {
                            items: u
                        },
                        992: {
                            items: f
                        },
                        1200: {
                            items: c
                        }
                    }
                })
            }), a = b(".navigation--sidebar"), t = b(".ps-cart--sidebar"), s = b(".ps-filter--sidebar"), b(".header  .menu-toggle").on("click", function(e) {
                e.preventDefault(), a.addClass("active"), b(".ps-site-overlay").addClass("active")
            }), b(".ps-cart-toggle").on("click", function(e) {
                e.preventDefault(), t.addClass("active"), b(".ps-site-overlay").addClass("active")
            }), b(".navigation--sidebar .navigation__header .ps-btn--close").on("click", function(e) {
                e.preventDefault(), a.removeClass("active"), b(".ps-site-overlay").removeClass("active")
            }), b(".ps-cart--sidebar .ps-cart__header .ps-btn--close").on("click", function(e) {
                e.preventDefault(), t.removeClass("active"), b(".ps-site-overlay").removeClass("active")
            }), b("#filter-sidebar").on("click", function(e) {
                e.preventDefault(), s.addClass("active"), b(".ps-site-overlay").addClass("active")
            }), b(".ps-filter--sidebar .ps-filter__header .ps-btn--close").on("click", function(e) {
                e.preventDefault(), s.removeClass("active"), b(".ps-site-overlay").removeClass("active")
            }), b("body").on("click", function(e) {
                b(e.target).siblings(".navigation--sidebar").hasClass("active") && (a.removeClass("active"), b(".ps-site-overlay").removeClass("active")), b(e.target).siblings(".ps-cart--sidebar").hasClass("active") && (t.removeClass("active"), b(".ps-site-overlay").removeClass("active")), b(e.target).siblings(".ps-filter--sidebar").hasClass("active") && (s.removeClass("active"), b(".ps-site-overlay").removeClass("active"))
            }), b(".menu--mobile .menu-item-has-children > .sub-toggle").on("click", function(e) {
                e.preventDefault();
                var a = b(this).parent(".menu-item-has-children");
                b(this).toggleClass("active"), a.siblings().find(".sub-toggle").removeClass("active"), a.children(".sub-menu").slideToggle(350), a.siblings().find(".sub-menu").slideUp(350), a.hasClass("has-mega-menu") && (a.children(".mega-menu").slideToggle(350), a.siblings(".has-mega-menu").find(".mega-menu").slideUp(350))
            }), b(".menu--mobile .has-mega-menu .mega-menu__column .sub-toggle").on("click", function(e) {
                e.preventDefault();
                var a = b(this).closest(".mega-menu__column");
                b(this).toggleClass("active"), a.siblings().find(".sub-toggle").removeClass("active"), a.children(".mega-menu__list").slideToggle(350), a.siblings().find(".mega-menu__list").slideUp(350)
            }),
            function(e) {
                var a = b(e);
                if (0 < a.length)
                    if (a.hasClass("filter")) {
                        a.imagesLoaded(function() {
                            a.isotope({
                                columnWidth: ".grid-sizer",
                                itemSelector: ".grid-item",
                                isotope: {
                                    columnWidth: ".grid-sizer"
                                },
                                filter: "*"
                            })
                        });
                        var t = a.closest(".masonry-root").find(".ps-masonry-filter > li > a");
                        t.on("click", function(e) {
                            e.preventDefault();
                            var a = b(this).attr("href");
                            return t.find("a").removeClass("current"), b(this).parent("li").addClass("current"), b(this).parent("li").siblings("li").removeClass("current"), b(this).closest(".masonry-root").find(".ps-masonry").isotope({
                                itemSelector: ".grid-item",
                                isotope: {
                                    columnWidth: ".grid-sizer"
                                },
                                filter: a
                            }), !1
                        })
                    } else a.imagesLoaded(function() {
                        a.masonry({
                            columnWidth: ".grid-sizer",
                            itemSelector: ".grid-item"
                        })
                    })
            }(".ps-masonry"), b(".ps-filter__trigger").on("click", function(e) {
                e.preventDefault();
                var a = b(this);
                a.find(".ps-filter__icon").toggleClass("active"), a.closest(".ps-filter").find(".ps-filter__content").slideToggle()
            }), 0 < b(".ps-sidebar--home").length && b(".ps-sidebar--home > .ps-sidebar__header > a").on("click", function(e) {
                e.preventDefault(), b(this).closest(".ps-sidebar--home").children(".ps-sidebar__content").slideToggle()
            }), b(".ps-tab-list > li > a ").on("click", function(e) {
                e.preventDefault();
                var a = b(this).attr("href");
                b(this).closest("li").siblings("li").removeClass("active"), b(this).closest("li").addClass("active"), b(a).addClass("active"), b(a).siblings(".ps-tab").removeClass("active")
            }),
            function() {
                var e = b(".ps-product--detail");
                if (0 < e.length) {
                    var a = e.find(".ps-product__gallery"),
                        t = e.find(".ps-product__variants"),
                        s = e.find(".ps-product__thumbnail").data("vertical");
                    a.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: ".ps-product__variants",
                        fade: !0,
                        dots: !1,
                        infinite: !1,
                        arrows: a.data("arrow"),
                        prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
                        nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
                    }), t.slick({
                        slidesToShow: t.data("item"),
                        slidesToScroll: 1,
                        infinite: !1,
                        arrows: t.data("arrow"),
                        focusOnSelect: !0,
                        prevArrow: "<a href='#'><i class='fa fa-angle-up'></i></a>",
                        nextArrow: "<a href='#'><i class='fa fa-angle-down'></i></a>",
                        asNavFor: ".ps-product__gallery",
                        vertical: s,
                        responsive: [{
                            breakpoint: 1200,
                            settings: {
                                arrows: t.data("arrow"),
                                slidesToShow: 4,
                                vertical: !1,
                                prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
                                nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                arrows: t.data("arrow"),
                                slidesToShow: 4,
                                vertical: !1,
                                prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
                                nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3,
                                vertical: !1,
                                prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
                                nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>"
                            }
                        }]
                    })
                }
            }(), 0 < (e = b(".ps-product--detail")).length && (b(".ps-product__gallery").lightGallery({
                selector: ".item a",
                thumbnail: !0,
                share: !1,
                fullScreen: !1,
                autoplay: !1,
                autoplayControls: !1,
                actualSize: !1
            }), e.hasClass("ps-product--sticky") && b(".ps-product__thumbnail").lightGallery({
                selector: ".item a",
                thumbnail: !0,
                share: !1,
                fullScreen: !1,
                autoplay: !1,
                autoplayControls: !1,
                actualSize: !1
            })), b(".ps-gallery--image").lightGallery({
                selector: ".ps-gallery__item",
                thumbnail: !0,
                share: !1,
                fullScreen: !1,
                autoplay: !1,
                autoplayControls: !1,
                actualSize: !1
            }), b(".ps-video").lightGallery({
                thumbnail: !1,
                share: !1,
                fullScreen: !1,
                autoplay: !1,
                autoplayControls: !1,
                actualSize: !1
            }), b("select.ps-rating").barrating({
                theme: "fontawesome-stars"
            }), i = 0, o = b("#back2top"), b(window).scroll(function() {
                var e = b(window).scrollTop();
                i < e && 500 < e ? o.addClass("active") : o.removeClass("active"), i = e
            }), o.on("click", function() {
                b("html, body").animate({
                    scrollTop: "0px"
                }, 800)
            }),
            function() {
                var e = b(".header");
                if (!0 !== e.data("sticky")) return;
                b(window).scroll(function() {
                    50 < b(this).scrollTop() ? e.addClass("header--sticky") : e.removeClass("header--sticky")
                });
                var a = b("#cart-sticky");
                0 < a.length && b(window).scroll(function() {
                    50 < b(this).scrollTop() ? a.addClass("active") : a.removeClass("active")
                })
            }(),
            function() {
                var e = b(".ps-slider"),
                    s = e.siblings().find(".ps-slider__min"),
                    i = e.siblings().find(".ps-slider__max"),
                    a = e.data("default-min"),
                    t = e.data("default-max"),
                    o = e.data("max"),
                    n = e.data("step");
                if (0 < e.length) {
                    e.slider({
                        min: 0,
                        max: o,
                        step: n,
                        range: !0,
                        values: [a, t],
                        slide: function(e, a) {
                            var t = a.values;
                            s.text("$" + t[0]), i.text("$" + t[1])
                        }
                    });
                    var l = e.slider("option", "values");
                    console.log(l[1]), s.text("$" + l[0]), i.text("$" + l[1])
                }
            }(),
            function() {
                var e = b("#contact-map");
                if (!(0 < e.length)) return;
                e.gmap3({
                    address: e.data("address"),
                    zoom: e.data("zoom"),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1
                }).marker(function(e) {
                    return {
                        position: e.getCenter(),
                        icon: "img/marker.png"
                    }
                }).infowindow({
                    content: e.data("address")
                }).then(function(e) {
                    var a = this.get(0),
                        t = this.get(1);
                    t.addListener("click", function() {
                        e.open(a, t)
                    })
                })
            }(), (n = b(".ps-modal")).length && n.hasClass("active") && b("body").css("overflow-y", "hidden"), n.find(".ps-modal__close, .ps-btn--close").on("click", function(e) {
                e.preventDefault(), b(this).closest(".ps-modal").removeClass("active")
            }), b(".ps-modal-link").on("click", function(e) {
                e.preventDefault();
                var a = b(this).attr("href");
                b(a).addClass("active"), b("body").css("overflow-y", "hidden")
            }), b(".ps-modal").on("click", function(e) {
                b(e.target).closest(".ps-modal__container").length || (n.removeClass("active"), b("body").css("overflow-y", "auto"))
            }), l = b(".ps-search"), b(".ps-search-btn").on("click", function(e) {
                e.preventDefault(), l.addClass("active")
            }), l.find(".ps-btn--close").on("click", function(e) {
                e.preventDefault(), l.removeClass("active")
            }), b(".ps-countdown").each(function() {
                var n = b(this),
                    e = b(this).data("time"),
                    l = new Date(e).getTime(),
                    r = setInterval(function() {
                        var e = (new Date).getTime(),
                            a = l - e,
                            t = Math.floor(a / 864e5),
                            s = Math.floor(a % 864e5 / 36e5),
                            i = Math.floor(a % 36e5 / 6e4),
                            o = Math.floor(a % 6e4 / 1e3);
                        n.find(".days").html(t), n.find(".hours").html(s), n.find(".minutes").html(i), n.find(".seconds").html(o), a < 0 && (clearInterval(r), n.closest(".ps-section").hide())
                    }, 1e3)
            }), b(".ps-carousel--animate").slick({
                autoplay: !0,
                speed: 1e3,
                lazyLoad: "progressive",
                arrows: !1,
                fade: !0,
                dots: !0,
                prevArrow: "<i class='slider-prev ba-back'></i>",
                nextArrow: "<i class='slider-next ba-next'></i>"
            }), b(".bg--parallax").each(function() {
                var t = b(this),
                    s = b(window).height();
                c.any() ? b(this).css("background-attachment", "scroll") : b(window).scroll(function() {
                    var e = b(window).scrollTop(),
                        a = t.offset().top;
                    a + t.outerHeight() < e || e + s < a || t.css("backgroundPosition", "50% " + Math.round(.2 * (a - e)) + "px")
                })
            }),
            function() {
                var e, a = b(".ps-product--sticky"),
                    t = b(window).innerWidth();
                if (!(0 < a.length)) return;
                if (e = new StickySidebar(".ps-product__sticky .ps-product__info", {
                        topSpacing: 20,
                        bottomSpacing: 20,
                        containerSelector: ".ps-product__sticky"
                    }), 0 < b(".sticky-2").length) var s = new StickySidebar(".ps-product__sticky .sticky-2", {
                    topSpacing: 20,
                    bottomSpacing: 20,
                    containerSelector: ".ps-product__sticky"
                });
                t < 992 && (e.destroy(), s.destroy())
            }(), b(".ps-hotpot__point").each(function() {
                var e = b(this),
                    a = e.data("x"),
                    t = e.data("y");
                e.css({
                    top: a + "%",
                    left: t + "%"
                })
            }), b(".ps-hotpot__point").on("click", function(e) {
                e.preventDefault(), b(this).toggleClass("active")
            }), b("#video-bg").YTPlayer({
                showControls: !1
            }), (r = b(".ps-accordion")).find(".ps-accordion__content").hide(), b(".ps-accordion.active").find(".ps-accordion__content").show(), r.find(".ps-accordion__header").on("click", function(e) {
                e.preventDefault(), b(this).closest(".ps-accordion").hasClass("active") ? (b(this).closest(".ps-accordion").removeClass("active"), b(this).closest(".ps-accordion").find(".ps-accordion__content").slideUp(350)) : (b(this).closest(".ps-accordion").addClass("active"), b(this).closest(".ps-accordion").find(".ps-accordion__content").slideDown(350), b(this).closest(".ps-accordion").siblings(".ps-accordion").find(".ps-accordion__content").slideUp()), b(this).closest(".ps-accordion").siblings(".ps-accordion").removeClass("active"), b(this).closest(".ps-accordion").siblings(".ps-accordion").find(".ps-accordion__content").slideUp()
            })
    }), b(window).on("load", function() {
        var a, e;
        b("body").addClass("loaded"), a = b("#subscribe"), e = a.data("time"), setTimeout(function() {
            0 < a.length && (a.addClass("active"), b("body").css("overflow", "hidden"))
        }, e), b(".ps-popup__close").on("click", function(e) {
            e.preventDefault(), b(this).closest(".ps-popup").removeClass("active"), b("body").css("overflow", "auto")
        }), b("#subscribe").on("click", function(e) {
            b(e.target).closest(".ps-popup__content").length || (a.removeClass("active"), b("body").css("overflow-y", "auto"))
        })
    })
}(jQuery);