// pc 버전 일때

// mo 버전 일때 반복 코드 줄이는 방법 연습 및 생각

let startClientY = 0,
    touchStartY = 0;
let slideBox = document.getElementById("slide-box");
let slideArea = document.getElementById("slide-area");

slideArea.addEventListener("touchstart", slideStart);
slideArea.addEventListener("touchend", slideEnd);

function slideStart(event) {
    event.preventDefault();
    touchStartY = event.changedTouches[0].screenY;
    event = event.touches[0];
    startClientY = event.clientY;
    document.querySelector("body").style.overflow = "hidden";
}
function slideEnd(event) {
    event.preventDefault();
    toychEndY = event.changedTouches[0].screenY;
    slideArea.classList.remove("on_slide");
    document.querySelector("body").style.overflow = "";
}
