var video = $('#freitag_video');
var btn = $('#freitag_btn');


btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        video.get(0).pause();                
        btn.html('<i class="fa fa-circle-circle-o" aria-hidden="true"></i>');
    }
})


// Slider
$(function(){
    $('.slide_gallery').bxSlider({
        mode: 'horizontal',
        pager: false,
        auto: true,
        autoHover:true,
        slideWidth: 0,
        controls: true,
        autoSlideForOnePage: true,
        pause: 3500,
    });

    $('.tab_btn li').on('click',function(){
        const idx = $(this).index();
        console.log(idx);
    
        $('.tab_btn li').removeClass('on');
        $(this).addClass('on');
    
        $('.freitag_mov .video').hide();
        $('.freitag_mov .video').eq(idx).stop().show();
    })
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

