window.addEventListener("load", function () {
  // 모달창 닫기
  const modalWrap = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modalClose");
  modalClose.addEventListener("click", function () {
    modalWrap.style.display = "none";
  });
  // gotop 스크롤 이벤트
  // 변수 선언
  const goTop = this.document.querySelector("#gotop");
  this.window.addEventListener("scroll", () => {
    if (this.document.documentElement.scrollTop > 1000) {
      goTop.style.display = "block";
    } else {
      goTop.style.display = "none";
    }
  });
  //   gotop버튼 클릭시 위로 스크롤
  goTop.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      //   behavior: "smooth",
    });
  });
});
