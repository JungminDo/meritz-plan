//   헤더 푸터 넣기

fetch("../include/_footer.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    });
fetch("../include/_head.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("head").innerHTML = data;
    });
