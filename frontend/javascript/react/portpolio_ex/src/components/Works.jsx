import worksData from "../data/worksData";
import "../styles/Works.css";
import WorkCard from "./WorkCard";
function Works() {
  return (
    <>
      <section id="works">
        <h2>작업물</h2>
        <div className="card-wrap">
          {worksData.map((item) => (
            <WorkCard
              key={item.id}
              title={item.title}
              image={item.image}
              category={item.category}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Works;
