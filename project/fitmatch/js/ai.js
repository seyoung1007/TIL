/* ═══════════════════════════════════
   FITMATCH — ai.js  v5 (스크롤 위저드)
═══════════════════════════════════ */

/* ── 위저드 상태 ── */
let wizCurrentStep = 1;

const GOAL_META = {
  다이어트: {
    icon: "🔥",
    desc: "체지방 감소 전문 트레이너",
    tip: "식단 관리와 운동을 병행하면 다이어트 효과가 2배 이상이에요.",
    hot: true,
  },
  "근력 증가": {
    icon: "💪",
    desc: "근비대·파워 전문 트레이너",
    tip: "주 3~4회 프로그레시브 오버로드 방식으로 가장 빠른 성과를 냅니다.",
    hot: false,
  },
  "체형 교정": {
    icon: "🧘",
    desc: "자세교정·기능성 전문 트레이너",
    tip: "체형 교정은 일상 습관 교정이 함께 이루어질 때 효과적이에요.",
    hot: false,
  },
  바디프로필: {
    icon: "📸",
    desc: "바디프로필 전문 트레이너",
    tip: "촬영 8~12주 전부터 준비하는 것이 가장 좋아요.",
    hot: true,
  },
  "재활·부상": {
    icon: "🩹",
    desc: "재활·기능성 운동 트레이너",
    tip: "부상 부위와 정도를 트레이너에게 정확히 전달하면 더 안전한 프로그램을 받을 수 있어요.",
    hot: false,
  },
  "스트레스 해소": {
    icon: "🌿",
    desc: "멘탈·라이프스타일 운동 트레이너",
    tip: "유산소와 명상을 결합한 마음챙김 운동이 가장 효과적이에요.",
    hot: false,
  },
};

const BUDGET_INSIGHT = {
  3: "입문 가격대 — 온라인 PT나 그룹 레슨을 고려해보세요",
  4: "합리적인 가격대 — 신규 트레이너분들이 많아요",
  5: "합리적인 가격대 — 신규 트레이너분들이 많아요",
  6: "인기 가격대 — 경험 3년 이상 트레이너와 매칭 가능해요",
  7: "인기 가격대 — 경험 3년 이상 트레이너와 매칭 가능해요",
  8: "서울 평균 PT 비용이에요 (8~12만원) — 좋은 선택이에요!",
  9: "서울 평균 PT 비용이에요 (8~12만원) — 좋은 선택이에요!",
  10: "서울 평균 PT 비용이에요 (8~12만원) — 좋은 선택이에요!",
  11: "서울 평균 PT 비용이에요 (8~12만원) — 좋은 선택이에요!",
  12: "서울 평균 PT 비용이에요 (8~12만원) — 좋은 선택이에요!",
  13: "경력 5년+ 시니어 트레이너와 매칭이 가능해요",
  14: "경력 5년+ 시니어 트레이너와 매칭이 가능해요",
  15: "프리미엄 트레이너 — 전문 자격증 보유자가 많아요",
  16: "프리미엄 트레이너 — 전문 자격증 보유자가 많아요",
  17: "최고급 1:1 맞춤 트레이닝 서비스를 받을 수 있어요",
  18: "최고급 1:1 맞춤 트레이닝 서비스를 받을 수 있어요",
  19: "최고급 1:1 맞춤 트레이닝 서비스를 받을 수 있어요",
  20: "프리미엄 패키지 — 영양사 상담이 포함된 경우도 있어요",
};

/* ── 위저드 이동 ── */
function wizGoTo(step) {
  document.querySelectorAll(".ai-wiz-panel").forEach((p, i) => {
    p.classList.toggle("active", i + 1 === step);
  });
  document.querySelectorAll(".ai-wiz-step").forEach((s, i) => {
    s.classList.remove("active", "done");
    if (i + 1 < step) s.classList.add("done");
    if (i + 1 === step) s.classList.add("active");
  });
  document.querySelectorAll(".ai-wiz-line").forEach((l, i) => {
    l.classList.toggle("done", i + 1 < step);
  });
  wizCurrentStep = step;
  // step 2 선택 요약 업데이트
  if (step === 2) updateSelectionSummary();
  // 스크롤 위로
  document
    .getElementById("ai-form-anchor")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function wizNext(currentStep) {
  wizGoTo(currentStep + 1);
}

/* ── 칩 공통 이벤트 (위저드 버전) ── */
document.addEventListener("click", (e) => {
  // goal 칩
  if (e.target.classList.contains("chip") && e.target.dataset.g === "goal") {
    document
      .querySelectorAll('.chip[data-g="goal"]')
      .forEach((c) => c.classList.remove("on"));
    e.target.classList.add("on");
    onGoalSelect(e.target.textContent.trim());
    checkStep1Valid();
  }
  // level 카드
  if (e.target.closest(".level-card")) {
    const card = e.target.closest(".level-card");
    document
      .querySelectorAll(".level-card")
      .forEach((c) => c.classList.remove("on"));
    card.classList.add("on");
    checkStep1Valid();
  }
  // gender 카드
  if (e.target.closest(".gender-card")) {
    const card = e.target.closest(".gender-card");
    document
      .querySelectorAll(".gender-card")
      .forEach((c) => c.classList.remove("on"));
    card.classList.add("on");
    updateSelectionSummary();
  }
});

function onGoalSelect(goal) {
  const meta = GOAL_META[goal];
  const box = document.getElementById("goal-insight");
  if (!meta || !box) return;
  box.innerHTML = `<strong>${meta.icon} ${goal} 전문</strong> — ${meta.desc}<br>
    <span style="color:var(--gray3)">💡 ${meta.tip}</span>`;
  box.classList.add("show");

  // 인사이트 박스 업데이트
  const chip = document.querySelector('.chip.on[data-g="goal"]');
  const count = parseInt(chip?.dataset.count || 50);
  const insightBox = document.getElementById("ai-insight-box-1");
  const insightTitle = insightBox?.querySelector(".ai-insight-title");
  const insightSub = insightBox?.querySelector(".ai-insight-sub");
  const badge = document.getElementById("ai-match-count-1");
  if (insightTitle)
    insightTitle.textContent = `${goal} 전문 트레이너 ${count}명 대기 중`;
  if (insightSub)
    insightSub.textContent = `지금 바로 매칭 가능 · 평균 응답시간 2시간 이내`;
  if (badge) badge.textContent = `${count}명`;
  if (insightBox && meta.hot) insightBox.classList.add("hot");
  else insightBox?.classList.remove("hot");
}

function checkStep1Valid() {
  const hasGoal = !!document.querySelector('.chip.on[data-g="goal"]');
  const hasLevel = !!document.querySelector(".level-card.on");
  const btn = document.getElementById("wiz-btn-1");
  if (btn) btn.disabled = !(hasGoal && hasLevel);
}

function onBudgetChange(val) {
  const display = document.getElementById("bval");
  if (display) display.textContent = val;
  const biText = document.getElementById("bi-text");
  if (biText)
    biText.textContent = BUDGET_INSIGHT[parseInt(val)] || "좋은 예산이에요!";
  updateSelectionSummary();
}

function updateSelectionSummary() {
  const goal = document
    .querySelector('.chip.on[data-g="goal"]')
    ?.textContent?.trim();
  const level = document
    .querySelector(".level-card.on .level-card-name")
    ?.textContent?.trim();
  const budget = document.getElementById("bslider")?.value || 8;
  const gender =
    document
      .querySelector(".gender-card.on .gender-card-name")
      ?.textContent?.trim() || "상관없음";

  const ssGoal = document.getElementById("ss-goal");
  const ssLevel = document.getElementById("ss-level");
  const ssBudget = document.getElementById("ss-budget");
  const ssGender = document.getElementById("ss-gender");
  const ssMatch = document.getElementById("ss-match-num");

  if (ssGoal) ssGoal.textContent = goal || "—";
  if (ssLevel) ssLevel.textContent = level || "—";
  if (ssBudget) ssBudget.textContent = `${budget}만원 이하`;
  if (ssGender) ssGender.textContent = gender;

  // 예상 매칭 수 계산
  if (goal && level) {
    const chip = document.querySelector('.chip.on[data-g="goal"]');
    const base = parseInt(chip?.dataset.count || 50);
    const budgetAdj = Math.round(base * (parseInt(budget) / 12));
    const final = Math.max(8, Math.min(base, budgetAdj));
    if (ssMatch) ssMatch.textContent = `${final}명`;
  } else {
    if (ssMatch) ssMatch.textContent = "—";
  }
}

/* ── AI 실행 (위저드 ver.) ── */
async function runAI() {
  const goal =
    document.querySelector('.chip.on[data-g="goal"]')?.textContent?.trim() ||
    "다이어트";
  const level =
    document
      .querySelector(".level-card.on .level-card-name")
      ?.textContent?.trim() || "초보";
  const budget = document.getElementById("bslider")?.value || 8;
  const gender =
    document
      .querySelector(".gender-card.on .gender-card-name")
      ?.textContent?.trim() || "상관없음";

  wizGoTo(3);

  const title = document.getElementById("result-panel-title");
  const desc = document.getElementById("result-panel-desc");
  if (title) title.textContent = "AI 분석 중...";
  if (desc)
    desc.textContent = `${goal} · ${level} · ${budget}만원 이하 조건으로 매칭 중이에요`;

  const loadingScreen = document.getElementById("ai-loading-screen");
  const resultBox = document.getElementById("ai-box");
  const body = document.getElementById("ai-body");
  const btns = document.getElementById("ai-btns");
  const restartBtn = document.getElementById("ai-restart-btn");

  // 로딩 화면 표시, 결과 숨김
  if (loadingScreen) loadingScreen.classList.add("active");
  if (resultBox) resultBox.className = "ai-result-box";
  if (body) body.innerHTML = "";
  if (btns) btns.innerHTML = "";
  if (restartBtn) restartBtn.style.display = "none";

  // ── 드라마틱 분석 애니메이션 ──
  const stages = document.querySelectorAll(".ai-stage-item");
  const termEl = document.getElementById("ai-terminal-lines");
  const pctEl = document.getElementById("ai-pct");

  const logs = [
    [
      "analyzing",
      `[INFO] 사용자 프로필 로드 완료 — 목표: ${goal}, 예산: ${budget}만원`,
    ],
    ["analyzing", "[SCAN] 트레이너 데이터베이스 연결 중... ✓"],
    ["analyzing", `[MATCH] ${goal} 태그 트레이너 필터링 중...`],
    ["analyzing", "[AI] 매칭 알고리즘 v3.2 실행 중..."],
    ["ok", "[RESULT] 최적 트레이너 선정 완료 ✓"],
    ["ok", "[DONE] 추천 결과 생성 중..."],
  ];

  let stageIdx = 0;
  let logIdx = 0;
  let pct = 0;

  const now = () => {
    const d = new Date();
    return `${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  };

  const stageInterval = setInterval(() => {
    if (stageIdx < stages.length) {
      if (stageIdx > 0) {
        stages[stageIdx - 1].classList.remove("stage-active");
        stages[stageIdx - 1].classList.add("stage-done");
      }
      stages[stageIdx].classList.add("stage-active");
      stageIdx++;
    }
  }, 600);

  const pctInterval = setInterval(() => {
    pct = Math.min(pct + Math.floor(Math.random() * 8 + 3), 99);
    if (pctEl) pctEl.textContent = pct + "%";
  }, 150);

  const logInterval = setInterval(() => {
    if (logIdx < logs.length && termEl) {
      const [type, text] = logs[logIdx];
      const line = document.createElement("div");
      line.className = "ai-log-line";
      line.innerHTML = `<span class="log-time">${now()}</span><span class="log-${type}">${text}</span>`;
      termEl.appendChild(line);
      logIdx++;
      // keep only last 4 lines visible
      while (termEl.children.length > 4) termEl.removeChild(termEl.firstChild);
    }
  }, 500);

  // ── 트레이너 필터링 ──
  const matched = TRAINERS.filter((t) => t.price <= budget * 10000 + 10000)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 2);

  const prompt = `당신은 PT 플랫폼 AI 어시스턴트입니다.

사용자 정보:
- 운동 목표: ${goal}
- 경험 수준: ${level}
- 1회 예산: ${budget}만원 이하
- 성별 선호: ${gender}

추천 트레이너:
${matched.map((t) => `- ${t.name} (${t.spec}, ${Math.round(t.price / 10000)}만원/회, ★${t.rating})`).join("\n")}

위 정보를 바탕으로 2~3문장으로 왜 이 트레이너들이 사용자에게 적합한지 친근하고 간결하게 설명해주세요. 마지막에 첫 PT 시작 전 유용한 팁 한 가지를 알려주세요.`;

  const showResult = (bodyHTML) => {
    clearInterval(stageInterval);
    clearInterval(pctInterval);
    clearInterval(logInterval);

    // 마지막 단계 완료
    stages.forEach((s) => {
      s.classList.remove("stage-active");
      s.classList.add("stage-done");
    });
    if (pctEl) pctEl.textContent = "100%";

    // 완료 로그
    if (termEl) {
      const line = document.createElement("div");
      line.className = "ai-log-line";
      line.innerHTML = `<span class="log-time">${now()}</span><span class="log-ok">[✓] 매칭 완료! 결과를 표시합니다.</span>`;
      termEl.appendChild(line);
    }

    setTimeout(() => {
      if (loadingScreen) loadingScreen.classList.remove("active");
      if (title)
        title.textContent = `${matched.length}명의 최적 트레이너를 찾았어요!`;
      if (desc)
        desc.textContent = `${goal} 목표 · ${budget}만원 이하 조건 기준`;

      resultBox.className = "ai-result-box show";
      body.innerHTML = bodyHTML.replace(/\n/g, "<br>");
      btns.innerHTML = matched
        .map(
          (t) =>
            `<button class="ai-r-btn" onclick="openSheet(${t.id})">${t.name} 트레이너 예약 →</button>`,
        )
        .join("");
      if (restartBtn) restartBtn.style.display = "";

      // XP 획득 이벤트
      gainXP(50, "AI 매칭 완료");
    }, 600);
  };

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await res.json();
    const text = data.content?.map((i) => i.text || "").join("") || "";
    showResult(text || `<b>${goal}</b> 목표에 최적의 트레이너를 찾았어요!`);
  } catch {
    showResult(`<b>${goal}</b> 목표와 <b>${budget}만원</b> 예산에 맞는 트레이너를 찾았어요!<br>
      ${matched.map((t) => t.name).join(", ")} 트레이너를 추천드립니다.<br><br>
      💡 <b>Tip:</b> 첫 PT 전에 현재 체력 수준과 목표를 구체적으로 전달하면 더 효과적인 프로그램을 받을 수 있어요.`);
  }
}
