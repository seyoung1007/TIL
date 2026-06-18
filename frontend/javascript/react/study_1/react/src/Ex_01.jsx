import { useState } from "react";

function Ex_01() {
  const [emoji, setEmoji] = useState("😂");
  // 이모지 변경 함수
function changeEmoji (){
    // console.log("클릭");
    setEmoji("😂🤣🤗")
}
// 토글 이모지 변경 함수
function toggleEmoji(){
    // 삼항 연산자
    setEmoji(emoji === "😂" ? "🤗":"😂")
}
  return (
    <>
      <hr />
      <p>지금 기분: {emoji} </p>
      <button onClick={changeEmoji}>기분 바꾸기</button>
      <button onClick={toggleEmoji}>토글 기분 바꾸기</button>
      {/* 입력창 값 출력하기 */}

      <input style={{display:"block" , marginTop:"20px" , padding:"10px"}} type="text" placeholder="이름을 입력하세요." />
    </>
  );
}
export default Ex_01;
