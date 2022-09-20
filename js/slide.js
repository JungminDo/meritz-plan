$(function () {

    let sliding = 0,
        startClientY = 0,
        pixelOffset = 0,
        currentSlide = 0,
        touchStartY = 0,
        touchEndY = 0 ;

    let $kkoArea = $('.kkopop');
    let $kkoArea = $('.kkopop');
    let $kkoArea = $('.kkopop');

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
        $slideId.css('transfom', 'translateY(' + pixelOffset + 'px').removeClass();

    }

    function slideEnd(event){
        event.preventDefault();
        toychEndY = event.originalEvent.changedTouches[0].screenY;
        if (touchEndY = touchStartY  > 20) {
            $kkoArea.fadeOut();
            $('.').removeClass('on_slide');
        }

    }






})