$(function () {
  // 이동 애니메이션
  $(".move").click(function () {
    // console.log("로드 완료");
    $(".box").animate(
      {
        left: "300px",
        top: "100px",
      },
      1000,
    );
  });
  //   크기 변경 애니메이션
  $(".resize").click(function () {
    $(".box").animate(
      {
        width: "300px",
        height: "300px",
      },
      800,
    );
  });
  //   보였다가 사라지기
  $(".fade").click(() => {
    $(".box").animate(
      {
        opacity: 0.2,
      },
      500,
    );
  });
  //   모든 애니메이션
  $(".all").click(() => {
    $(".box").animate(
      {
        left: "300px",
        width: "300px",
        height: "300px",
        opacity: 0.2,
        borderRadius: "50%",
      },
      1000,
    );
  });
});
