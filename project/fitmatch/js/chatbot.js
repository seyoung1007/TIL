/* ═══════════════════════════════════════
   FITMATCH — chatbot.js  (AI 챗봇)
═══════════════════════════════════════ */

let chatbotOpen = false;
let chatHistory = [];
let chatTyping  = false;

const SYSTEM_PROMPT = `당신은 FitMatch의 AI 트레이너 매칭 어시스턴트 "FIT AI"입니다.

역할:
- 사용자가 자신에게 맞는 PT 트레이너를 찾도록 도와주세요
- 운동 목표, 예산, 경험 수준에 맞는 조언을 제공하세요
- FitMatch 플랫폼에 대한 안내를 해주세요

플랫폼 정보:
- 247명의 인증된 트레이너 보유
- PT 1회 3만원~20만원 (평균 8~12만원)
- AI 매칭으로 목표·예산·수준에 맞는 트레이너 즉시 추천
- 수수료 0%, 환불 보장

트레이너 정보:
- 이민준: 다이어트 & 체형교정 전문, 6만원/회, ★4.9, 7년 경력
- 한소희: 바디프로필 & 다이어트, 7.5만원/회, ★5.0, 3년 경력
- 박정호: 재활 & 기능성 운동, 7만원/회, ★4.9, 물리치료사 자격증
- 김수아: 근력 & 바디프로필, 8만원/회, ★4.8, 여성 전문
- 정태양: 파워리프팅, 9만원/회, ★4.8, 파워리프팅 대회 입상
- 최은지: 다이어트 & 필라테스, 5.5만원/회, ★4.7

응답 스타일:
- 친근하고 따뜻하게, 하지만 전문적으로
- 답변은 2~4문장으로 간결하게
- 필요하면 구체적인 트레이너나 가격을 언급
- 한국어로만 답변
- 마크다운 볼드(**)나 특수기호 최소화`;

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  const panel = document.getElementById('chatbot-panel');
  const fab   = document.getElementById('chatbot-fab');
  const icon  = document.getElementById('chatbot-fab-icon');
  const notif = document.getElementById('chatbot-notif');

  panel.classList.toggle('open', chatbotOpen);
  fab.classList.toggle('open', chatbotOpen);
  icon.textContent = chatbotOpen ? '✕' : '💬';
  if (notif) notif.style.display = 'none';

  if (chatbotOpen && chatHistory.length === 0) {
    initChatbot();
  }
}

function initChatbot() {
  const msgs = document.getElementById('chatbot-messages');
  msgs.innerHTML = '';
  chatHistory = [];

  // 웰컴 메시지
  setTimeout(() => {
    appendMsg('bot', '안녕하세요! 저는 FitMatch AI 상담사예요 👋\n트레이너 매칭, 운동 목표, 가격 안내까지 뭐든지 물어보세요!');
  }, 400);
}

function appendMsg(role, text, isTyping = false) {
  const msgs = document.getElementById('chatbot-messages');

  if (isTyping) {
    const el = document.createElement('div');
    el.className = 'chat-msg bot';
    el.id = 'chat-typing-indicator';
    el.innerHTML = `
      <div class="chat-msg-avatar">✦</div>
      <div class="chat-typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>`;
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    return;
  }

  // 타이핑 인디케이터 제거
  const typing = document.getElementById('chat-typing-indicator');
  if (typing) typing.remove();

  const el = document.createElement('div');
  el.className = `chat-msg ${role}`;
  const avatar = role === 'bot' ? '✦' : '👤';
  const bubbleText = text.replace(/\n/g, '<br>');
  el.innerHTML = `
    <div class="chat-msg-avatar">${avatar}</div>
    <div class="chat-bubble">${bubbleText}</div>`;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendChatMessage() {
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send-btn');
  const text  = input.value.trim();
  if (!text || chatTyping) return;

  input.value = '';
  input.style.height = 'auto';
  appendMsg('user', text);

  chatHistory.push({ role: 'user', content: text });
  chatTyping = true;
  sendBtn.disabled = true;

  // 타이핑 인디케이터
  setTimeout(() => appendMsg('bot', '', true), 300);

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: chatHistory.slice(-10), // 최근 10개만
      }),
    });
    const data = await res.json();
    const reply = data.content?.map(i => i.text || '').join('') || '죄송해요, 잠시 후 다시 시도해주세요.';

    chatHistory.push({ role: 'assistant', content: reply });
    setTimeout(() => appendMsg('bot', reply), 200);
  } catch {
    setTimeout(() => appendMsg('bot', '네트워크 연결을 확인해주세요. 직접 AI 매칭을 이용하시면 최적의 트레이너를 바로 찾아드려요!'), 200);
  } finally {
    chatTyping = false;
    sendBtn.disabled = false;
  }
}

function sendQuickReply(text) {
  const input = document.getElementById('chatbot-input');
  input.value = text;
  sendChatMessage();
}

// 챗봇 FAB 알림 – 3초 후 표시
setTimeout(() => {
  const notif = document.getElementById('chatbot-notif');
  if (notif && !chatbotOpen) notif.style.display = 'flex';
}, 3000);
