// Slider
$(function(){
    // 1. ABout Slider
    $('.slide_gallery').bxSlider({
        mode: 'horizontal',
        pager: true,
        auto: true,
        autoHover:true,
        slideWidth: 0,
        controls: false,
        autoSlideForOnePage: true,
        pause: 10000,
    });

    // 2. Portfolio Navigation Bar
    $('.portfolio').click(function(){
        $('.lnb_bar ul li').slideDown(600);
    });
    $('.portfolio').mouseleave(function(){
        $('.lnb_bar ul li').slideUp(600);
    });
});




