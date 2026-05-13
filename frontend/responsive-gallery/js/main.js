window.addEventListener("load", () => {
  // Icotope 레이아웃 정리 도구
  const grid = new Isotope("section", {
    // 정리할 대상은
    itemSelector: "article",
    // article너비를 기준으로 줄을 맞춰라!
    columnWidth: "article",
    // 움직일때 0.5s동안 부드럽게 이동해라
    transitionDuration: "0.3s",
  });
  // 메뉴 클릭시
  const btns = document.querySelectorAll("main ul li");
  btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", (e) => {
      // a태그 기본동작 기능을 막는다
      e.preventDefault();
      console.log(e.target);

      // console.log("click");
      // 클릭한 버튼 안에 있는 a태그의 href값을 가져오기
      const sort = e.target.getAttribute("href");
      console.log(sort);
      grid.arrange({
        // sort 변수에 들어있는 조건으로 정렬해라
        filter: sort,
      });
      //    모든 버튼에서 "on"클래스를 제거(초기화)
      btns.forEach((btn) => {
        btn.classList.remove("on");
      });
      //   지금 클릭한 버튼에만 "on"클래스 추가
      e.currentTarget.classList.add("on");
    });
  });
});
