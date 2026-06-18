$(function () {
  // slideDown
  $(".slideDown").click(() => {
    $(".box").slideDown(800);
  });
  // slideUp
  $(".slideUp").click(function () {
    $(".box").slideUp(1000);
  });
  // slideToggle
  $(".slideToggle").click(() => {
    $(".box").slideToggle(1000);
  });
  // fadeIn
  $(".fadeIn").click(() => {
    $(".box").fadeIn(1000);
  });
  // fadeOut
  $(".fadeOut").click(() => {
    $(".box").fadeOut(1000);
  });
  // fadeToggle
  $(".fadeToggle").click(() => {
    $(".box").fadeToggle(1000);
  });
  // hide
  $(".hide").click(() => {
    $(".box").hide(1000);
  });
  // show
  $(".show").click(() => {
    $(".box").show(1000);
  });
  // toggle
  $(".toggle").click(() => {
    $(".box").toggle(1000);
  });
});
