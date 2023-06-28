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

// Section ABOUT US Tab Menu
$('.about_us_title p').on('click',function(){
    const idx = $(this).index();
    console.log(idx);

    $('.about_us_title p').removeClass('on');
    $(this).addClass('on');

    $('.about_us_content_all .about_us_content').hide();
    $('.about_us_content_all .about_us_content').eq(idx).stop().show();
    $('.line_dots .dot').hide();
    $('.line_dots .dot').eq(idx).stop().show();
})



/* Footer 2depth 스크립트 */
const plusBtn = document.querySelectorAll('.faq_menu>dl>dt');
console.log('plusBtn : ', plusBtn);
// plusBtn item들 추출후 각각 할당하기
for(let i=0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click',toggleFooterMenu);
}
// classList CSS 클래스명 연동
const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';
// 이벤트 리스너
function toggleFooterMenu(){
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}


$(document).ready(function(){
    /* 스크롤 101px이상 되었을때 TOP 버튼 나오도록 코딩 */
    var sa = 500;
    var dw = 800;
    $(window).scroll(function(){
        var num = $(window).scrollTop();
        console.log(num);
        if(num>sa){
            $('aside .top').stop().fadeIn();
        }else{
            $('aside .top').stop().fadeOut();
        }
        var num2 = $(window).scrollTop();
        if(num2<dw){
            $('aside .down').stop().fadeIn();
            // 아래 방향으로 향하는 .. 그거.. 흑흑
        }else{
            $('aside .down').stop().fadeOut();
        }
    });
});
