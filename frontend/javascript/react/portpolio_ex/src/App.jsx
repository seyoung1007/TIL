import About from "./components/About";
import AiTools from "./components/AiTools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
 
function App() {
  return (
    <>
      {/* 상단 */}
      <Header />
      {/* 비주얼 */}
      <Hero />
      {/* 소개 */}
      <About />
      {/* 스킬 */}
      <Skills />
      {/* 작업 영역 */}
      <Works />
      {/* Ai도구 활용 */}
      <AiTools />
      {/* contact */}
      <Contact />
      {/* 하단 */}
      <Footer />
    </>
  );
}
export default App;
