const apps = [
  {
    name: "Illustrator",
    desc: "데스크탑 및 iPad에서 세밀한 디자인, 일러스트레이션 및 벡터 그래픽 제작",
    price: "₩30,800",
    icon: ["asset/program-icon/illustrator.png"],
    iconClass: "icon-ai",
    category: ["all", "graphic", "illustration"],
  },
  {
    name: "Adobe Express Premium",
    desc: "전단지, TikTok, 이력서, 콘텐츠 디자인을 빠르게 만들어 보세요.",
    price: "₩13,200",
    icon: ["asset/program-icon/express.png"],
    iconClass: "icon-express",
    category: ["all", "graphic", "social"],
  },
  {
    name: "Adobe Firefly Standard",
    desc: "2,000개의 크레딧으로 영상, 오디오, 이미지를 빠르게 만들어 보세요.",
    price: "₩11,000",
    icon: ["asset/program-icon/Fi.png"],
    iconClass: "icon-firefly",
    category: ["all", "graphic", "video", "photo", "illustration"],
  },
  {
    name: "Adobe Firefly Pro",
    desc: "웹과 모바일 등 어디서나 Adobe Photoshop으로 편집",
    price: "₩22,000",
    icon: ["asset/program-icon/Fi.png"],
    iconClass: "icon-firefly",
    category: ["all", "photo", "graphic", "illustration"],
  },
  {
    name: "Adobe Firefly Premium",
    desc: "50,000개의 크레딧으로 콘텐츠를 대규모로 만들어 보세요.",
    price: "₩114,950",
    icon: ["asset/program-icon/Fi.png"],
    iconClass: "icon-firefly",
    category: ["all", "graphic", "video", "photo", "illustration"],
    badge: "50%",
  },
  {
    name: "Adobe Firefly Pro Plus",
    desc: "10,000개의 크레딧을 활용하여 콘텐츠의 완성도를 높여보세요.",
    price: "₩28,050",
    icon: ["asset/program-icon/Fi.png"],
    iconClass: "icon-firefly",
    category: ["all", "graphic", "photo", "illustration"],
    badge: "50%",
  },
  {
    name: "InDesign",
    desc: "인쇄 및 디지털 미디어에 사용할 페이지 디자인 및 레이아웃 제작",
    price: "₩30,800",
    icon: ["asset/program-icon/Id.png"],
    iconClass: "icon-indesign",
    category: ["all", "graphic"],
  },
  {
    name: "InCopy",
    desc: "디자인에 영향을 미치지 않고 텍스트 편집 및 레이아웃 수정",
    price: "₩6,600",
    icon: ["asset/program-icon/incopy.png"],
    iconClass: "icon-incopy",
    category: ["all", "graphic"],
  },
  {
    name: "Acrobat Standard",
    desc: "첫해 20% 할인받으세요. 어디서든 쉽고 빠르게 PDF를 생성, 편집, 서명, 관리하세요. 신규 구독자에게만 적용됩니다",
    price: "₩14,080",
    icon: ["asset/program-icon/acrobat.png"],
    iconClass: "icon-acrobat",
    category: ["all", "pdf", "graphic"],
  },
  {
    name: "Acrobat Pro",
    desc: "첫해 20% 할인받으세요. 어디서든 쉽고 빠르게 PDF를 생성, 편집, 서명, 관리하세요. 신규 구독자에게만 적용됩니다",
    price: "₩21,120",
    icon: ["asset/program-icon/acrobat.png"],
    iconClass: "icon-acrobat",
    category: ["all", "pdf", "graphic"],
  },
  {
    name: "포토그래피",
    desc: "데스크탑, 웹, iPhone, iPad용 Photoshop, 1TB 클라우드 스토리지",
    price: "₩46,860",
    icon: ["asset/program-icon/photoshop.png", "asset/program-icon/lr.png"],
    iconClass: "icon-photography",
    category: ["all", "photo"],
  },
  {
    name: "Photoshop",
    desc: "데스크탑, 웹, 모바일에서 멋진 그래픽, 사진, 아트를 생성하세요.",
    price: "₩30,800",
    icon: ["asset/program-icon/photoshop.png"],
    iconClass: "icon-photoshop",
    category: ["all", "photo"],
  },
  {
    name: "Lightroom",
    desc: "어디서든 사진을 편집하고, 정리하고, 저장하고, 공유하세요.",
    price: "₩13,200",
    icon: ["asset/program-icon/Lr.png"],
    iconClass: "icon-Lightroom",
    category: ["all", "photo", "social"],
  },
  {
    name: "Adobe Stock",
    desc: "하나의 플랜으로 수백만 개의 로열티 프리 스톡 이미지, 4K 및 HD 비디오, 템플릿 등을 모두",
    price: "₩39,600",
    icon: ["asset/program-icon/st.png"],
    iconClass: "icon-Stock",
    category: ["all", "photo", "graphic", "video", "illustration"],
  },
  {
    name: "Adobe Premiere",
    desc: "데스크탑과 iPhone에서 전문적인 비디오와 영화 편집을 경험하세요.",
    price: "₩30,800",
    icon: ["asset/program-icon/Pr.png"],
    iconClass: "icon-Premiere",
    category: ["all", "video", "social"],
  },
  {
    name: "After Effects",
    desc: "영화, TV, 비디오, 웹을 위한 모션 그래픽과 시각 효과를 제작하세요.",
    price: "₩30,800",
    icon: ["asset/program-icon/Ae.png"],
    iconClass: "icon-After",
    category: ["all", "video"],
  },
  {
    name: "Audition",
    desc: "오디오 녹음, 믹싱, 복원 작업이 가능합니다.",
    price: "₩30,800",
    icon: ["asset/program-icon/Au.png"],
    iconClass: "icon-Audition",
    category: ["all", "video"],
  },
  {
    name: "Animate",
    desc: "다양한 플랫폼에 사용할 수 있는 인터랙티브한 벡터 애니메이션을 디자인하세요.",
    price: "₩30,800",
    icon: ["asset/program-icon/Au.png"],
    iconClass: "icon-Animate",
    category: ["all", "video"],
  },
  {
    name: "Adobe Substance 3D 컬렉션",
    desc: "3D 에셋과 장면을 모델링하고, 텍스처를 적용하고, 렌더링해 보세요. 수천 개의 3D 에셋을 다운로드.",
    price: "₩67,100",
    icon: ["asset/program-icon/substance.png"],
    iconClass: "icon-Substance",
    category: ["all", "3d"],
  },
  {
    name: "Adobe Substance 3D 텍스처링",
    desc: "3D 자료를 생성하고, 캡처하고, 페인팅하세요",
    price: "₩26,400",
    icon: [
      "asset/program-icon/sa.png",
      "asset/program-icon/Ds.png",
      "asset/program-icon/pt.png",
    ],
    iconClass: "icon-3D",
    category: ["all", "3d"],
  },
];

const categories = [
  "all",
  "photo",
  "graphic",
  "video",
  "illustration",
  "pdf",
  "3d",
  "social",
];

const grid = document.querySelector(".app-cards-grid");
const sidebarItems = document.querySelectorAll(".sidebar-item");
const searchInput = document.querySelector(".search-bar input");
const sortSelect = document.querySelector(".sort-select");
const dotsWrap = document.querySelector(".dots");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentCategory = "all";
let currentIndex = 0;
let currentSort = "전체";

function getPriceNumber(price) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function sortApps(appList) {
  const sortedApps = [...appList];

  if (currentSort === "전체" || currentSort === "인기순") {
    return sortedApps;
  }

  if (currentSort === "가격순") {
    sortedApps.sort(
      (a, b) => getPriceNumber(a.price) - getPriceNumber(b.price),
    );
  }

  if (currentSort === "이름순") {
    sortedApps.sort((a, b) => a.name.localeCompare(b.name, "ko"));
  }

  return sortedApps;
}

function renderApps(category = "all", keyword = "") {
  const filteredApps = apps.filter((app) => {
    const matchCategory = app.category.includes(category);
    const matchKeyword = app.name.toLowerCase().includes(keyword.toLowerCase());

    return matchCategory && matchKeyword;
  });

  const sortedApps = sortApps(filteredApps);

  grid.innerHTML = "";

  if (sortedApps.length === 0) {
    grid.innerHTML = `<p class="no-result">검색 결과가 없습니다.</p>`;
    return;
  }

  sortedApps.forEach((app) => {
    grid.innerHTML += `
      <div class="app-card">
        ${app.badge ? `<div class="app-badge">${app.badge}</div>` : ""}

        <div class="app-card-header">
          <div class="app-card-icons">
            ${app.icon
              .map(
                (src) => `
                  <img src="${src}" alt="${app.name}">
                `,
              )
              .join("")}
          </div>

          <h4>${app.name}</h4>
        </div>

        <p class="app-desc">${app.desc}</p>

        <div class="app-card-footer">
          <div class="app-price">${app.price} <span>/월</span></div>
          <button class="add-btn">+</button>
        </div>
      </div>
    `;
  });
}

function renderDots() {
  dotsWrap.innerHTML = "";

  categories.forEach((category, index) => {
    dotsWrap.innerHTML += `
      <div class="dot ${index === currentIndex ? "active" : ""}" data-index="${index}"></div>
    `;
  });

  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = Number(dot.dataset.index);
      currentCategory = categories[currentIndex];
      updateCategory();
    });
  });
}

function updateCategory() {
  sidebarItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.category === currentCategory);
  });

  searchInput.value = "";
  renderApps(currentCategory);
  renderDots();
}

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    currentCategory = item.dataset.category;
    currentIndex = categories.indexOf(currentCategory);
    updateCategory();
  });
});

searchInput.addEventListener("input", (e) => {
  renderApps(currentCategory, e.target.value);
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderApps(currentCategory, searchInput.value);
});

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
  currentCategory = categories[currentIndex];
  updateCategory();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
  currentCategory = categories[currentIndex];
  updateCategory();
});

renderApps(currentCategory);
renderDots();
