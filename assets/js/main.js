$(function ($) {
    'use strict'

    //Data--Background
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    //Owl-Carousel (For Single Slider)
    $('.slider-area').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        dots: true,
        loop: true,
        nav: false,
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
    })

    //Project - MagnificPopup Image 
    $('.project-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // Video PopUP in CALL TO ACTION
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    //Owl-Carousel (For Testimonials Area)
    $('.testimonials').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    //Owl-Carousel (For Client Branding Logo area)
    $('.client-branding').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    //ScrollTop (For Menu Fixed)
    $(window).on('scroll',function (){
        if ($(this).scrollTop() > 1 ) {
            $('.header-top').addClass('sticky');
        } else {
            $('.header-top').removeClass('sticky');
        }
    });


    //One Page Nav for Smooth Scrolling 
    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

})(jQuery)



