
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
