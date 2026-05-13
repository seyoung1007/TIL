// window.addEventListener("load" ,function(){
// 실행코드
// })
// window.onload = function(){실행코드}

//   변수에 요소를 담는다
const heading = document.querySelector("#heading");
heading.onclick = function () {
  heading.style.color = "red";
};