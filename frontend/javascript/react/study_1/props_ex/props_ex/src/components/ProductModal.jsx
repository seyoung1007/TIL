function ProductModal() {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-class">X</button>
          <img src="" alt="" />
          <div className="modal-content">
            <span className="category">{}</span>
            <h2>{}</h2>
            <p className="price">{}원</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductModal;
