$(document).ready(function(){

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
    })

    $('#owl-carousel-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<i class='fas fa-arrow-circle-left fa-2x'></i>","<i class='fas fa-arrow-circle-right fa-2x'></i>"],
        dots:false,
        autoplay:false,
        autoplayTimeout:false,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
        })

    
        $('#owl-carousel-3').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: ["<i class='fas fa-arrow-circle-left fa-2x'></i>","<i class='fas fa-arrow-circle-right fa-2x'></i>"],
            dots:false,
            autoplay:false,
            autoplayTimeout:false,
            autoplayHoverPause:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
            })

});