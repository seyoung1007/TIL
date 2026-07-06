function SearchBox({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        className="search-box"
        placeholder="검색어 입력"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export default SearchBox;
