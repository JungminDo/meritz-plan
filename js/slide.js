$(function () {

    let startClientY = 0,
        pixelOffset = 0,
        touchStartY = 0,
        touchEndY = 0 ;

    let $slideArea = $('.slide-area');
    let $slideBox = $('.slide-box');
    let $slideContent = $('.slide-content');

    $slideArea.on('mousedown touchstart' , slideStart);
    $slideArea.on('mouseup touchend' , slideEnd);
    $slideArea.on('mousemove touchmove' , slide);

    function slideStart(event) {
        event.preventDefault();
        touchStartY = event.originalEvent.changedTouches[0].screenY;
        event = event.originalEvent.touches[0];
        startClientY = event.clientY;

    }

    function slide(event) {
        event.preventDefault();
        event = event.originalEvent.touches[0];
        deltaSlide = event.clientY - startClientY;
        pixelOffest = startPixelOffest + deltaSlide;
        $slideBox.css('transfom', 'translateY(' + pixelOffset + 'px').removeClass();

    }

    function slideEnd(event){
        event.preventDefault();
        toychEndY = event.originalEvent.changedTouches[0].screenY;
        if (touchEndY = touchStartY  > 20) {
            $slideArea.fadeOut();
            $slideContent.removeClass('on_slide');
        }

    }






})