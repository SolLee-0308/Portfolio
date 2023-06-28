var video = $('#mont_video');
var btn = $('#mont_btn');


btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        video.get(0).pause();                
        btn.html('<i class="fa fa-circle-circle-o" aria-hidden="true"></i>');
    }
})

$('.tab_btn li').on('click',function(){
    const idx = $(this).index();
    console.log(idx);

    $('.tab_btn li').removeClass('on');
    $(this).addClass('on');

    $('.tab_contents .list').hide();
    $('.tab_contents .list').eq(idx).stop().show();
})

var swiper = new Swiper('.swiper-container',{
    slidesPerView: 4.2,
    spaceBetween: 2,
    loop: true,
    autoplay: true,
    loopFillGroupWidthBlank: true,
    centeredSildes: true,

    pagination: {
        el:'.swiper-pagination',
        type:'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const usTitle=document.querySelectorAll('.about_us_title p');
const usDot=document.querySelectorAll('.line_dots .dot');
const usContent=document.querySelectorAll('.about_us_content .about_us_content_container');
// const usPic=document.querySelectorAll('.about_us_pic');
for(var i=0; i<usTitle.length; i++){
    usTitle[i].addEventListener('click', function(){
        for(var j=0; j<usTitle.length; j++){
            usTitle[j].classList.remove('active');
            usDot[j].classList.remove('active');
            usContent[j].classList.remove('active');
            usPic[j].classList.remove('active');
        }
        let idx=$(this).index();
        usTitle[idx].classList.add('active');
        usDot[idx].classList.add('active');
        usContent[idx].classList.add('active');
        usPic[idx].classList.add('active');
    })
}




