window.addEventListener("load", () => {
  const tabLinks = document.querySelectorAll(".tab-nav li a");
  const tabItems = document.querySelectorAll(".tabitem");
  tabLinks.forEach((link) => {
    // console.log(link);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // 1. 메뉴 active제거
      tabLinks.forEach((tl) => tl.classList.remove("active"));
      // 2. 내용 active제거
      tabItems.forEach((ti) => ti.classList.remove("active"));
      // 3. 클릭한 메뉴 active add
      link.classList.add("active");
      //   tabItems[index].classList.add("active")
      //  4. 연견된 콘첸트 찾기
      const linkTarget = document.querySelector(link.getAttribute("href"));
      //   console.log(linkTarget);
      linkTarget.classList.add("active`");
    });
  });
});
