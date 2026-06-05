window.addEventListener("load", () => {
  const items = document.querySelectorAll("article");
  const aside = document.querySelector("aside");
  const close = aside.querySelector("span");
  items.forEach((item) => {
    // console.log(item);
    // article 호버시
    item.addEventListener("mouseenter", (e) => {
      //   console.log(e.currentTarget);
      e.currentTarget.querySelector("video").play();
    });
    item.addEventListener("mouseleave", (e) => {
      e.currentTarget.querySelector("video").pause();
    });
    item.addEventListener("click", (e) => {
      let title = e.currentTarget.querySelector("h2").innerText;
      //   console.log(title);
      let txt = e.currentTarget.querySelector("p").innerText;
      // console.log(txt);
      let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
      //   console.log(vidSrc);
      aside.querySelector("h1").innerText = title;
      aside.querySelector("p").innerText = txt;
      aside.querySelector("video").setAttribute("src", vidSrc);
      //   aside 보이게
      aside.classList.add("on");
      //   aside 요소의 동영상 재생
      aside.querySelector("video").play();
      //   스크롤 제거
      document.body.style.overflow = "hidden";
      //   스크롤 맨위로 이동
      window.scrollTo({
        top: 0,
      });
    });

    // close 클릭시
    close.addEventListener("click", () => {
      //   aside 안보이게
      aside.classList.remove("on");
      //   aside 요소의 동영상 재생
      aside.querySelector("video").pause();
      //   스크롤 다시 생성
      document.body.style.overflow = "auto";
    });
  });
});
