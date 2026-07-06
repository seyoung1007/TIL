import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="title">상품 목록</h1>
        <div className="top-area">
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
export default App;
