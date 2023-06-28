
// Hamburger Menu
$('.header .menu_toggle_btn').on('click',function(){
    $('.header .gnb').stop().toggle();
});

// Slider
$(function(){
    $('.slide_gallery').bxSlider({
        mode: 'horizontal',
        pager: true,
        auto: true,
        autoHover:true,
        slideWidth: 0,
        controls: true,
        autoSlideForOnePage: true,
        pause: 3500,
    });
});

$(document).ready(function(){
    var sa = 100;
    $(window).scroll(function(){
        var num = $(window).scrollTop();
        console.log(num);
        if(num>sa){
            $('.top_aside div').stop().fadeIn();
        }else{
            $('.top_aside div').stop().fadeOut();
        }
    });
});

