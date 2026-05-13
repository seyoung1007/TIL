window.addEventListener("load", () => {
  // 비주얼 스와퍼
  const visualSwiper = new Swiper(".visual-sw", {
    navigation: {
      nextEl: ".custom-prev",
      prevEl: ".custom-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });
  //   상품리스트 스와퍼
  const productSwiper = new Swiper(".itemSwiper", {
    loop: true,
    // 초기값 설정 모바일이 먼저!!!!!
    slidesPerView: 1.3,
    spaceBetween: 10,
    // 스와이퍼 반응형 적용
    breakpoints: {
      // 브라우저가 1024보다 클때
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
    },
  });
});
