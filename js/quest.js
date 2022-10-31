// quest01 스크립트 시 사용해야할 코드
// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length

// quest01 color flipper

window.onload = function() {

  const colors = ["green", "red", "rgba(103,12,100)", "#f26582" ,"#69879b" , "#2e6f8a"];
  const btn = document.getElementById("btn");
  const color = document.getElementById("code");
  const bgArea = document.getElementById("bgcolor");

  btn.addEventListener("click", () => {
      const randomNumber = getRandomNumber();

      bgArea.style.backgroundColor = colors[randomNumber];
      color.textContent = colors[randomNumber];
  });
  
  const  getRandomNumber = () =>{
      return Math.floor(Math.random() * colors.length);
  }
} 


