import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from "./pages/About";
import Contact from "./pages/Contact";
import heroData from "./data/hero_data";

function App() {
  const location = useLocation();
  const currentpage = location.pathname.replace("/", "") || "home";
  const currentHero = heroData[currentpage] ?? heroData.home;
  const showHero = currentpage !== "contact";

  return (
    <>
      <Header
        hero={currentHero}
        showHero={showHero}
        showButton={currentpage === "home"}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
