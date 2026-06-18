$(function () {
  // console.log("시작");
  // 1. classList
  //   $(".menu > li").hover(
  //     function () {
  //       // console.log(this);
  //       $(this).find(".submenu").addClass("active");
  //     },
  //     function () {
  //       $(this).find(".submenu").removeClass("active");
  //     },
  //   );
  // 2. toggleClass()
  //   $(".menu > li").hover(function () {
  //     $(this).find(".submenu").toggleClass("active");
  //   });
  // 3.전체메뉴 slideDown / slideUp
  //   $(".menu").hover(
  //     function () {
  //       // console.log(this);
  //       $(".submenu").stop().slideDown(400);
  //     },
  //     function () {
  //       $(".submenu").stop().slideUp(400);
  //     },
  //   );
  // 4.전체메뉴 slideToggle
  //   $(".menu").hover(function () {
  //     $(".submenu").stop().slideToggle(400);
  //   });
  // 5.전체메뉴 fadeToggle
  //   $(".menu ").hover(function () {
  //     $(".submenu").stop().fadeToggle(400);
  //   });
  // 6. 각메뉴의 서브메뉴 slideToggle
  //   $(".menu > li").hover(function () {
  //     $(this).find(".submenu").stop().slideToggle(400);
  //   });
  // 7. 전체 메뉴 + 헤더 배경
  //   $(".menu").hover(function () {
  //     $(".submenu , .header-bg").stop().slideToggle(400);
  //   });
  // 8.li 서브메뉴 + 헤더배경
  $(".menu > li").hover(
    function () {
      $(this).find(".submenu").stop().slideDown(400);
      $(".header-bg").stop().slideDown(400);
    },
    function () {
      $(this).find(".submenu").stop().slideUp(400);
      $(".header-bg").stop().slideUp(400);
    },
  );
});
