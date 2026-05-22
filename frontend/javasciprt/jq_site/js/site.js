$(function () {
  const products = [
    {
      id: 1, // 상품 번호
      name: "러닝화", // 상품 이름
      price: 129000, // 상품 가격
      category: "shoes", // 상품 카테고리
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200", // 상품 이미지
    },
    {
      id: 2,
      name: "백팩",
      price: 89000,
      category: "bag",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200",
    },
    {
      id: 3,
      name: "볼캡",
      price: 39000,
      category: "cap",
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200",
    },
    {
      id: 4,
      name: "스니커즈",
      price: 159000,
      category: "shoes",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200",
    },
    {
      id: 5,
      name: "크로스백",
      price: 99000,
      category: "bag",
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200",
    },
    {
      id: 6,
      name: "버킷햇",
      price: 45000,
      category: "cap",
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1200",
    },
  ];
  //모바일 버튼 클릭시
  $(".mobile-btn").click(function () {
    $(".mobile-menu").slideToggle();
  });
  // 화면 크기 변경 이벤트
  $(window).resize(function () {
    // 브라우저 가로 크기가 768보다 커지면
    if ($(window).width() > 768) {
      // 열려있는 모바일메뉴 닫기
      $(".mobile-menu").slideUp();
    }
  });
  //   처음 페이지가 열리면 모든 상품 출력
  renderProducts(products);
  //   상품 화면에 출력하는 함수
  function renderProducts(list) {
    console.log(list);
    // 기존 내용을 모두 초기화 - 중복 출력 방지
    $(".product-wrap").empty();
    // 배열 데이터를 하나씩 반복
    $.each(list, function (index, item) {
      //   console.log(item);
      // 상품 HTML 추가
      $(".product-wrap").append(`
         <div class="product">
        <!-- 상품 이미지 -->
         <div class="pro-img">
          
        <img src="${item.image}" alt="${item.name}" /></div>
        <div class="product-content">
          <!-- 상품 이름 -->
          <h3>${item.name}</h3>
          <!-- 상품가격 -->
          <p class="price">${item.price.toLocaleString()} 원</p>
          <!-- 버튼들 -->
          <div class="btn-wrap">
            <!-- 장바구니 버튼 -->
            <button class="cart-btn">장바구니</button>
            <button class="like-btn">❤</button>
          </div>
        </div>
      </div>
        `);
    });
  }
  //   좋아요 버튼 클릭 이벤트
  $(".like-btn").click(function () {
    console.log(this);
    $(this).toggleClass("active");
  });
});
