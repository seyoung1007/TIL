function WorkCard({ title, category, image, desc }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{desc}</p>
    </div>
  );
}
export default WorkCard;
