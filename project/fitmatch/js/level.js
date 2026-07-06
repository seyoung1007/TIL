/* ═══════════════════════════════════════
   FITMATCH — level.js  (레벨/보상 시스템)
═══════════════════════════════════════ */

const LEVEL_TABLE = [
  { lv: 1, name: '첫 걸음',          minXP: 0,    maxXP: 199  },
  { lv: 2, name: '루틴 메이커',       minXP: 200,  maxXP: 499  },
  { lv: 3, name: '피트니스 어드벤처', minXP: 500,  maxXP: 999  },
  { lv: 4, name: '변화의 시작',       minXP: 1000, maxXP: 1999 },
  { lv: 5, name: 'FitMatch 마스터',   minXP: 2000, maxXP: 9999 },
];

let userXP = 320;

function getLevelFromXP(xp) {
  for (let i = LEVEL_TABLE.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_TABLE[i].minXP) return LEVEL_TABLE[i];
  }
  return LEVEL_TABLE[0];
}

function renderLevelUI() {
  const lv     = getLevelFromXP(userXP);
  const nextLv = LEVEL_TABLE[lv.lv] || null;
  const xpInLevel = userXP - lv.minXP;
  const xpNeeded  = (nextLv ? nextLv.minXP : lv.maxXP + 1) - lv.minXP;
  const pct       = Math.min((xpInLevel / xpNeeded) * 100, 100);

  const badge = document.getElementById('upc-level-badge');
  if (badge) badge.textContent = `Lv.${lv.lv}`;

  const xpDisplay = document.getElementById('xp-display');
  if (xpDisplay) xpDisplay.textContent = `${userXP} XP`;

  const fill = document.getElementById('xp-bar-fill');
  if (fill) setTimeout(() => { fill.style.width = pct + '%'; }, 300);

  const hint = document.getElementById('xp-next-hint');
  if (hint) {
    hint.textContent = nextLv
      ? `다음 레벨까지 ${nextLv.minXP - userXP} XP`
      : '최고 레벨 달성! 🎉';
  }
}

function gainXP(amount, reason) {
  userXP += amount;
  renderLevelUI();
  showXPToast(amount, reason);
}

function showXPToast(amount, reason) {
  const toast  = document.getElementById('xp-toast');
  const textEl = document.getElementById('xp-toast-text');
  const xpEl   = document.getElementById('xp-toast-xp');
  if (!toast) return;
  if (textEl) textEl.textContent = reason || 'XP 획득!';
  if (xpEl)   xpEl.textContent  = `+${amount} XP`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function completeMission(missionId, xpAmount) {
  const el = document.getElementById(`mission-${missionId}`);
  if (!el || el.classList.contains('mission-done')) return;
  el.classList.add('mission-done');
  const fill = el.querySelector('.mission-progress-fill');
  if (fill) fill.style.width = '100%';
  gainXP(xpAmount, `미션 완료`);
}

// DOM 로드 후 렌더링 + showPage 패치
document.addEventListener('DOMContentLoaded', () => {
  renderLevelUI();

  // showPage 패치: 마이페이지 열릴 때 XP 바 재렌더
  const orig = window.showPage;
  if (typeof orig === 'function') {
    window.showPage = function(name, btn) {
      orig(name, btn);
      if (name === 'mypage') setTimeout(renderLevelUI, 150);
    };
  }
});
