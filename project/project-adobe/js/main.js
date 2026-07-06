const cardData = {
  image: [
    {
      icon: "asset/program-icon/creativeCloud.png",
      color: "#da0f0f",
      name: "Creative Cloud",
      desc: "20개 이상의 Adobe 앱을<br>하나의 플랜으로 이용",
    },
    {
      icon: "asset/program-icon/photoshop.png",
      color: "#0d7fc1",
      name: "Photoshop",
      desc: "이미지 편집, 합성 및<br>AI 기반 디자인 제작",
    },
    {
      icon: "asset/program-icon/Lr.png",
      color: "#1c3fce",
      name: "Lightroom",
      desc: "사진을 보정하고<br>언제 어디서나 관리",
    },
    {
      icon: "asset/program-icon/Lrc.png",
      color: "#2196c4",
      name: "Lightroom Classic",
      desc: "전문적인 사진 관리와<br>데스크톱 편집 기능 제공",
    },
    {
      icon: "asset/program-icon/st.png",
      color: "#c62535",
      name: "Adobe Stock",
      desc: "수백만 개의 이미지와<br>영상·그래픽 에셋 제공",
    },
  ],

  video: [
    {
      icon: "asset/program-icon/pr.png",
      color: "#9999ff",
      name: "Premiere Pro",
      desc: "전문가용 영상 편집을 위한<br>업계 표준 툴",
    },
    {
      icon: "asset/program-icon/ae.png",
      color: "#a259ff",
      name: "After Effects",
      desc: "모션 그래픽 및<br>시각 효과 제작",
    },
    {
      icon: "asset/program-icon/au.png",
      color: "#4b0082",
      name: "Audition",
      desc: "오디오 녹음, 편집 및<br>믹싱 작업 지원",
    },
    {
      icon: "asset/program-icon/me.png",
      color: "#333333",
      name: "Media Encoder",
      desc: "다양한 포맷으로<br>미디어 파일 변환",
    },
    {
      icon: "asset/program-icon/ch.png",
      color: "#00bcd4",
      name: "Character Animator",
      desc: "캐릭터 애니메이션을<br>실시간으로 제작",
    },
    {
      icon: "asset/program-icon/an.png",
      color: "#ff9800",
      name: "Animate",
      desc: "인터랙티브 애니메이션과<br>웹 콘텐츠 제작",
    },
  ],

  design: [
    {
      icon: "asset/program-icon/creativeCloud.png",
      color: "#da0f0f",
      name: "Creative Cloud",
      desc: "20개 이상의 Adobe 앱을<br>하나의 플랜으로 이용",
    },
    {
      icon: "asset/program-icon/illustrator.png",
      color: "#e8a427",
      name: "Illustrator",
      desc: "벡터 그래픽 및<br>일러스트 제작",
    },
    {
      icon: "asset/program-icon/express.png",
      color: "#b84e9c",
      name: "Adobe Express",
      desc: "SNS 콘텐츠와 포스터를<br>쉽고 빠르게 제작",
    },
    {
      icon: "asset/program-icon/photoshop.png",
      color: "#0d7fc1",
      name: "Photoshop",
      desc: "이미지 편집 및<br>디지털 아트 제작",
    },
    {
      icon: "asset/program-icon/st.png",
      color: "#c62535",
      name: "Adobe Stock",
      desc: "고품질 이미지와<br>디자인 리소스 제공",
    },
  ],

  "3d": [
    {
      icon: "asset/program-icon/ds.png",
      color: "#2ecc71",
      name: "Substance 3D Designer",
      desc: "절차적 재질 및<br>텍스처 제작",
    },
    {
      icon: "asset/program-icon/md.png",
      color: "#1abc9c",
      name: "Substance 3D Modeler",
      desc: "직관적인 3D 모델링<br>환경 제공",
    },
    {
      icon: "asset/program-icon/pt.png",
      color: "#16a085",
      name: "Substance 3D Painter",
      desc: "3D 모델 텍스처링과<br>재질 작업 지원",
    },
    {
      icon: "asset/program-icon/sa.png",
      color: "#27ae60",
      name: "Substance 3D Sampler",
      desc: "실제 이미지를 활용한<br>재질 생성",
    },
    {
      icon: "asset/program-icon/sg.png",
      color: "#2ecc71",
      name: "Substance 3D Stager",
      desc: "3D 장면 구성 및<br>렌더링 작업 지원",
    },
  ],

  document: [
    {
      icon: "asset/program-icon/creativeCloud.png",
      color: "#da0f0f",
      name: "Creative Cloud",
      desc: "20개 이상의 Adobe 앱을<br>하나의 플랜으로 이용",
    },
    {
      icon: "asset/program-icon/acrobat.png",
      color: "#e53935",
      name: "Acrobat Pro",
      desc: "PDF 생성, 편집 및<br>전자 서명 기능 제공",
    },
  ],
};

window.addEventListener("DOMContentLoaded", () => {
  const toolList = document.getElementById("solCards");
  const buttons = document.querySelectorAll(".content1-button");

  // 카드 출력 함수
  function renderCards(category) {
    const cards = cardData[category];

    if (!cards) return;

    toolList.innerHTML = cards
      .map(
        (card, i) => `
        <div class="sol-card"
          style="--rotate:${["-6deg", "2deg", "5deg", "-3deg", "4deg", "1deg"][i]}">
          
          <div class="sol-icon"
            style="background:linear-gradient(135deg, ${card.color}, ${card.color}99)">
            <img src="${card.icon}" alt="${card.name}">
          </div>

          <h3>${card.name}</h3>

          <p>${card.desc}</p>

          <span class="sol-arrow">
            <img src="asset/mainpage/nextBtn.png" alt="">
          </span>
        </div>
      `,
      )
      .join("");
  }

  // 카테고리 버튼 클릭
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      buttons.forEach((item) => {
        item.classList.remove("active");
      });

      btn.classList.add("active");

      renderCards(btn.dataset.filter);
    });
  });

  // 첫 화면
  renderCards("image");
});

const menuBtn = document.querySelector(".menu-btn");
const gnb = document.querySelector(".gnb");
const overlay = document.querySelector(".overlay");



menuBtn.addEventListener("click", () => {
  gnb.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  gnb.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});
