
    let startClientY = 0,
        touchStartY = 0;
    let slideBox = document.getElementById('slide-box');
    let slideArea = document.getElementById('slide-area');

    // slideArea.on('mousedown touchstart' , slideStart);
    // slideArea.on('mouseup touchend' , slideEnd);
    console.log('체크::::::::::::' + slideArea + ':::::::::' + slideBox);
    slideArea.addEventListener('touchstart',slideStart)
    slideArea.addEventListener('touchend', slideEnd)

    function slideStart(event) {
        event.preventDefault();
        touchStartY = event.changedTouches[0].screenY;
        console.log('터치슬라이드' + touchStartY);
        event = event.touches[0];
        startClientY = event.clientY;
        document.querySelector('body').style.overflow = 'hidden';
        console.log('테스트 시작');
    }

    function slideEnd(event){
        event.preventDefault();
        toychEndY = event.changedTouches[0].screenY;
            slideArea.classList.remove('on_slide');
            document.querySelector('body').style.overflow = '';
            console.log('테스트 끝');
    }
