window.addEventListener("load", function () {
  // a태그 초기화
  const aTag = this.document.querySelectorAll("a");
  aTag.forEach(function (a) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
  // function(){실행하는 내용}
  //   this.alert("hi");
  // gnb에 마우스 엔터 했을때
  const gnb = this.document.querySelector(".gnb");
  const headerBg = this.document.querySelector(".header-bg");
  gnb.addEventListener("mouseenter", function () {
    headerBg.style.height = "400px";
  });
  //   gnb에 마우스 떠날때
  gnb.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
  //   visual btn에 클릭했을때
  const visualBtn = this.document.querySelector(".visual-btn");
  const business = this.document.querySelector(".business");
  visualBtn.addEventListener("click", () => {
    this.window.scrollTo({
      top: business.offsetTop,
    });
  });
  //   회사소개
  const aboutMenu = this.document.querySelector(".aboutMenu");
  const aboutSection = this.document.querySelector(".about");
  aboutMenu.addEventListener("click", () => {
    this.window.scrollTo({ top: aboutSection.offsetTop });
  });
});
