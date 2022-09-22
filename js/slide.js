$(function () {

    let startClientY = 0,
        touchStartY = 0;

    let slideArea = document.getElementById('slide-area');
    let slideBox = document.getElementById('slide-box');

    // slideArea.on('mousedown touchstart' , slideStart);
    // slideArea.on('mouseup touchend' , slideEnd);
    console.log('체크::::::::::::' + slideArea + ':::::::::' + slideBox);
    slideArea.addEventListener('mousedown touchstart',slideStart)
    slideArea.addEventListener('mouseup touchend', slideEnd)

    function slideStart(event) {
        event.preventDefault();
        touchStartY = event.originalEvent.changedTouches[0].screenY;
        event = event.originalEvent.touches[0];
        startClientY = event.clientY;
        slideBox.removeClass('fade');
        document.querySelector('body').style.overflow = 'hidden';
        console.log('테스트 시작');
    }

    function slideEnd(event){
        event.preventDefault();
        toychEndY = event.originalEvent.changedTouches[0].screenY;
            slideBox.addClass('fade');
            slideArea.removeClass('on_slide');
            document.querySelector('body').style.overflow = '';
            console.log('테스트 끝');
    }

})