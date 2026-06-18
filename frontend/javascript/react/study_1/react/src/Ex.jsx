import { use } from "react";
import { useState } from "react";

function Ex() {
  function getName() {
    return "반가워요~";
  }
  // 함수에 매개변수 전달
  function greet(name) {
    alert(`${name}님 환영합니다.`);
  }
  //   useState 함수
  const [count, setCount] = useState(0);
  //   const [name , setName] = useState("하경미")
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  //   좋아버튼 카운트
  const [like, setLike] = useState(0);
  function plusLike() {
    setLike(like + 1);
  }
  //   배열 출력
  const menus = ["HTML", "CSS", "JS", "React"];
  return (
    <>
      <h1>{getName()}</h1>
      {/* 함수에 매개변수 전달 */}
      <button onClick={() => greet("김수철")}>인사하기</button>
      <button onClick={() => greet("하경미")}>인사하기</button>
      {/* useState 함수 */}
      <h2>{count}</h2>
      <button onClick={increase}> +1증가 </button>
      <button onClick={decrease}> -1감소 </button>
      {/* 좋아요 버튼 클릭시 카운트 */}
      <p>좋아요 : {like}</p>
      <button onClick={plusLike}>💓좋아요 콕!</button>
      {/* 배열 출력 */}
      <ul>
        {/* key={index} -리액트가 각 항목을 구별하기 위한 이름표 */}
        {menus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
    </>
  );
}
export default Ex;
