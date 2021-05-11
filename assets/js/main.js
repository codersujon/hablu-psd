$(function ($){
    'use strict'

    //Data--Background
    $('[data-background]').each(function(){
        $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
    });

    //Owl-Carousel (For Single Slider)
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        loop: true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

})(jQuery)