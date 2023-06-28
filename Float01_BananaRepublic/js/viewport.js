
const video = $('.video');
const doBtn = $('#car_btn');


// Video control
doBtn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        doBtn.html(' <i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else {
        video.get(0).pause();
        doBtn.html(' <i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
})


// Sound control
const soundBtn = $('#car_sound');
// 사운드 무음으로 초기값 설정
video.prop('muted',true);
soundBtn.click(function(){
    if(video.prop('muted')){ // 조건 = muted 상태일 때
        video.prop('muted',false); // 음 재생
        soundBtn.html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
    }else{
        video.prop('muted',true);
        soundBtn.html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
    }
})

// Slider
$(function(){
    // Slider
    $('.slide_gallery').bxSlider({
        mode: 'horizontal',
        pager: true,
        auto: true,
        autoHover:true,
        slideWidth: 0,
        controls: false,
        autoSlideForOnePage: true,
        pause: 3500,
    });
});





