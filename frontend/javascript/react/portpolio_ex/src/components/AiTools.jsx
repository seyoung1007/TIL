import aiTools from "../data/AiToolsdata";
import "../styles/AiTools.css";
function AiTools() {
  return (
    <>
      <section id="ai">
        <h2>AI 활용</h2>
    <div className="tab-list">
      {aiTools.map((tab)=>(
        console.log(tab)
        
      ))}
    </div>
      </section>
    </>
  );
}
export default AiTools;
