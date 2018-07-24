$('#photo').owlCarousel({
    loop: true,
    // margin: 50,
    nav: true,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    smartSpeed: 600,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('#service-caro').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    slideTransition: 'ease-in-out',
    smartSpeed: 600,
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#client-caro').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    slideTransition: 'ease-out',
    autoplayHoverPause: false,
    animateIn: 'slideInDown',
    animateOut: 'slideOutLeft',

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(document).ready(function () {
    $('.home').mouseenter(function () {
        setTimeout(function () {
            $('.home-ul').addClass('home-display');

        }, 200);




    });
    $('.home').mouseleave(function () {
        setTimeout(function () {
            $('.home-ul').removeClass('home-display');

        }, 200);


    });
    $('.page').mouseenter(function () {
        setTimeout(function () {
            $('.page-ul').addClass('page-display');

        }, 200);



    });

    $('.page').mouseleave(function () {
        setTimeout(function () {
            $('.page-ul').removeClass('page-display');

        }, 200);



    });
    // left second
    $('.left-second').mouseenter(function () {
        setTimeout(function () {
            $('#ls').css('opacity', 1);
        }, 100);

    });
    $('.left-second').mouseleave(function () {
        setTimeout(function () {
            $('#ls').css('opacity', 0);
        }, 100);


    });
    // left first
    $('.left-first').mouseenter(function () {
        setTimeout(function () {
            $('#lf').css('opacity', 1);
        }, 100);

    });
    $('.left-first').mouseleave(function () {
        setTimeout(function () {
            $('#lf').css('opacity', 0);
        }, 100);


    });

    //right first
    $('.right-first').mouseenter(function () {
        setTimeout(function () {
            $('#rf').css('opacity', 1);
        }, 100);

    });
    $('.right-first').mouseleave(function () {
        setTimeout(function () {
            $('#rf').css('opacity', 0);
        }, 100);


    });

    //right second
    $('.right-second').mouseenter(function () {
        setTimeout(function () {
            $('#rs').css('opacity', 1);
        }, 100);

    });
    $('.right-second').mouseleave(function () {
        setTimeout(function () {
            $('#rs').css('opacity', 0);
        }, 100);


    });





});
