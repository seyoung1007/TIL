const programs = [
  {
    name: "포토그래피",
    desc: "데스크탑, 웹, iPhone, iPad용 Photoshop, 1TB 클라우드 스토리지",
    salePrice: "₩46,860",
    icons: ["asset/program-icon/photoshop.png", "asset/program-icon/lr.png"],
  },
  {
    name: "Photoshop",
    desc: "그래픽, 사진, 아트웍 작업에 집중하시나요?",
    salePrice: "₩30,800",
    icon: "asset/program-icon/ps.png",
  },
  {
    name: "Acrobat Pro",
    desc: "학생 및 교사라면 <br><span class='strong'>최대 60% 할인!</span> <br><br> <span class='small'>학생, 교사, 교직원을 위한 특별할인을 이용해보세요</span>",
    bgImage: "asset/plan/Plan-Card-bg.png",
    buttonText: "무료 체험",
    buttonType: "wide",
    icon: "asset/program-icon/acrobat.png",
    noPrice: true,
    hideLink: true,
  },
  {
    name: "Adobe Firefly Pro Plus",
    desc: "10,000개의 크레딧을 활용하여 콘텐츠의 완성도를 높여보세요.",
    salePrice: "₩28,050",
    regularPrice: "₩56,100",
    icon: "asset/program-icon/fi.png",
  },
];

const cardsGrid = document.querySelector(".cards-grid");

programs.forEach((program) => {
  const card = document.createElement("article");
  card.classList.add("program-card");

  if (program.bgImage) {
    card.classList.add("program-card--bg");
    card.style.backgroundImage = `url(${program.bgImage})`;
  }

  const icons = program.icons || [program.icon];

  card.innerHTML = `
    ${
      icons[0]
        ? `
          <div class="program-card_thumb">
            ${icons
              .map(
                (icon) => `
                  <img src="${icon}" alt="${program.name}">
                `,
              )
              .join("")}
          </div>
        `
        : ""
    }

    <div class="program-card_info">
      <h3 class="program-card_title">${program.name}</h3>
      <p class="program-card_desc">${program.desc}</p>
    </div>

    ${
      program.noPrice
        ? ""
        : `
          <div class="program-card_price-area">
            <p class="program-card_sale-price">
              <strong>${program.salePrice}</strong>
              <span>/월</span>
            </p>

            ${
              program.regularPrice
                ? `
                  <p class="program-card_regular-price">
                    정상가 <del>${program.regularPrice}</del><span>/월</span>
                  </p>
                `
                : ""
            }
          </div>
        `
    }

    <div class="program-card_button-group">
  <button type="button" class="program-card_button ${
    program.buttonType === "wide" ? "program-card_button--wide" : ""
  }">
    ${program.buttonText || "구매"}
  </button>

  ${
    program.hideLink
      ? ""
      : `<a href="#" class="program-card_link">자세히 보기</a>`
  }
</div>
  `;

  cardsGrid.appendChild(card);
});
