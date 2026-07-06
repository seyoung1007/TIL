window.addEventListener("load", () => {
  // gotop

  // footer 상단 위치 픽셀값 파악
  // waypoin 라이브러리 :스크롤 위치를 감지 해서 득정 시점에 이벤트 실행해주는 자바스크립트 라이브러리
  let footer = document.querySelector(".footer");
  let footerY = footer.offsetTop;
  const gotop = document.querySelector(".gotop");
  // console.log(footerY);
  //gotop
  gotop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  console.log(typeof Waypoint);
  //  전체 높이에 95% 위치할때
  let waypoin_footer = new Waypoint({
    element: document.querySelector(".footer"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        gotop.classList.add("active-footer");
      } else {
        gotop.classList.remove("active-footer");
      }
    },
    offset: "90%",
  });
  //scroll 위치가 서비스 영역에 위치하면
  let waypoin_service = new Waypoint({
    element: document.querySelector(".service"),
    handler: function (direction) {
      // console.log(direction);
      if (direction === "down") {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    },
    offset: "80%",
  });
  AOS.init();
});
