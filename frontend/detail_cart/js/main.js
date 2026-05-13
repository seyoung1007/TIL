window.addEventListener("load", () => {
  // 요소 선택
  const cup = document.getElementById("cup");
  const smallPick = document.querySelectorAll(".small");
  const viewBtn = document.getElementById("view");
  const detail = document.getElementById("detail");

  //   바뀔정보 내용
  const descName = document.getElementById("desc-name");
  const descPrice = document.getElementById("desc-price");
  const descDelivery = document.getElementById("desc-delivery");
  const descPoints = document.getElementById("desc-points");
  const descRoasting = document.getElementById("desc-roasting");
  //   상세내용
  const detailOrigin = document.getElementById("detail-origin");
  const detailRegion = document.getElementById("detail-region");
  const detailFarm = document.getElementById("detail-farm");
  const detailAltitude = document.getElementById("detail-altitude");
  const detailVariety = document.getElementById("detail-variety");
  const detailProcess = document.getElementById("detail-process");
  const detailDescription = document.getElementById("detail-description");
  const flavorNote = document.getElementById("flavor-note");
  // 장바구니 담기
  const addBtn = document.getElementById("desc-btn");
  const cartBox = document.getElementById("cart");
  const totalBox = document.getElementById("total");
  const cartCount = document.getElementById("cart-count");

  // 작은 이미지 클릭시 정보 변경 (클래스 selected토글 포함)
  smallPick.forEach((small) => {
    // console.log(small);
    small.addEventListener("click", () => {
      smallPick.forEach((s) => s.classList.remove("selected"));
      small.classList.add("selected");
      changPic(small);
    });
  });
  //   changPic() : 큰이미지변경 /정보변경
  function changPic(el) {
    // console.log(el);//el : 클릭하는 작은이미지
    //    이미지변경 //
    cup.src = el.src;

    // 내용변경
    descName.textContent = `상품명 : ${el.dataset.name}`;
    descPrice.textContent = `판매가 : ${el.dataset.price}`;
    descDelivery.textContent = `배송비 : ${el.dataset.delivery}`;
    descPoints.textContent = `적립금 : ${el.dataset.points}`;
    descRoasting.textContent = `로스팅 : ${el.dataset.roasting}`;
    // 상세내용
    detailOrigin.textContent = `원산지 : ${el.dataset.origin}`;
    detailRegion.textContent = `지 역 : ${el.dataset.region}`;
    detailFarm.textContent = `농 장 : ${el.dataset.farm}`;
    detailAltitude.textContent = `고 도 : ${el.dataset.altitude}`;
    detailVariety.textContent = `품 종  : ${el.dataset.variety}`;
    detailProcess.textContent = `가공법  : ${el.dataset.process}`;
    detailDescription.textContent = `${el.dataset.description}`;
    flavorNote.textContent = `${el.dataset.flavornote}`;
    // 버튼 데이터 저장
    addBtn.dataset.name = el.dataset.name;
    const price = Number(el.dataset.price.replace(/[^0-9]/g, ""));
    addBtn.dataset.price = price;
    console.log(price);
  }
  // 첫 상품 기본 선택
  smallPick[0].classList.add("selected");
  changPic(smallPick[0]);

  //   상세보기클릭시
  viewBtn.addEventListener("click", () => {
    // detail.classList.toggle("show")
    // 삼항연산자(if(){}else{})
    detail.style.display = detail.style.display === "block" ? "none" : "block";
  });
  // 장바구니 기능
  // 장바구니 데이터
  let cartItems = {};
  // 장바구니 담기
  addBtn.addEventListener("click", () => {
    const name = addBtn.dataset.name;
    console.log(name);
    const price = Number(addBtn.dataset.price);
    // console.log(price);
    // 장바구니 추가
    if (!cartItems[name]) {
      cartItems[name] = {
        price: price,
        quantity: 1,
      };
    } else {
      cartItems[name].quantity++;
    }
    // 화면 업데이트
    updateCart();
  });

  // 장바구니 박스 업데이트 기능
  function updateCart() {
    cartBox.innerHTML = `<strong>🛒 장바구니</strong>`;
    let totalPrice = 0;
    let totalCount = 0;
    for (let key in cartItems) {
      const item = cartItems[key];
      totalPrice += item.price * item.quantity;
      totalCount += item.quantity;
      const p = document.createElement("p");
      p.textContent = `
      ${key} - ${item.price.toLocaleString()}원 X ${item.quantity}
      `;
      console.log(p);
      cartBox.appendChild(p);
    }
    // 총합
    totalBox.textContent = `
    총 합계 : ${totalPrice.toLocaleString()}원
    `;
    // 장바구니 숫자
    cartCount.textContent = totalCount;
    console.log(totalPrice);
    console.log(totalCount);
  }

  console.log(cartItems);
});
