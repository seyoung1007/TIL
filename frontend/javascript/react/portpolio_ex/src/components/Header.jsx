import "../styles/Header.css";
function Header() {
  return (
    <>
      <header className="header">
        <h1>PORTFOLIO</h1>
        <nav>
          <a href="#">소개</a>
          <a href="#">스킬</a>
          <a href="#">작업물</a>
          <a href="#">AI 활용</a>
          <a href="#">연락처</a>
        </nav>
      </header>
    </>
  );
}
export default Header;
