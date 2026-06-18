window.addEventListener("load", () => {
  // console.log("로딩 완료");
  const pics = document.querySelectorAll(".pic");
  const lightBox = document.querySelector("#lightBox");
  const lightBoxImg = document.querySelector("#lightBox-img")
  // console.log(pics);
   console.log(lightBoxImg);
  pics.forEach((pic, index) => {
    // console.log(pic , index);
    pic.addEventListener("click", () => {
      console.log(pic);
      lightBox.style.display = "block";
    //   클릭시 해당하는 이미지 가지고 온다
    const bigSrc = pic.dataset.src
    console.log(bigSrc);
    // console.log(lightBoxImg.id);
   
    lightBoxImg.src = bigSrc
    console.log(lightBoxImg);
    
    });
  });
  lightBox.addEventListener("click",()=>{
     lightBox.style.display = "none";
  })
});
