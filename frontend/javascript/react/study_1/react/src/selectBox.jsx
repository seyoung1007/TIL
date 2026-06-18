import { useState } from "react";

function SelectBox() {
  const [fruit, setFruit] = useState("");
  const [agree, setAgree] = useState(false); // 체크 여부 저장

  function handleChange(e) {
    // e.target.value = > 사용자가 선택한 값을 가져온다.
    setFruit(e.target.value);
  }
  //   동의하기(체크박스)
  function handleCheckbox(e) {
    setAgree(e.target.checked);
  }
  console.log(agree);

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "#ddd" }}>
        <select onChange={handleChange}>
          <option value="">과일 선택</option>
          <option value="사과">사과</option>
          <option value="참외">참외</option>
          <option value="바나나">바나나</option>
          <option value="포도">포도</option>
        </select>
        <h3>선택한 과일 : {fruit} </h3>
      </div>
      <div style={{ padding: "20px", backgroundColor: "#b3fef7" }}>
        <label>
          <input type="checkbox" checked={agree} onChange={handleCheckbox} />
          약관에 동의합니다.
        </label>
        <p>{agree ? "✅동의 완료!" : "❌아직 동의하지 않았어요!"}</p>
      </div>
    </>
  );
}
export default SelectBox;
z