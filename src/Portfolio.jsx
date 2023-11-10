import { useState } from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Header from "./Componponents/Header";
import Home from "./Componponents/Home";
import About from "./Componponents/About";
import CV from "./Componponents/Cv.jsx";
import Projets from "./Componponents/Projets";
import Contact from "./Componponents/Contact";
import Projetsprint from "./Componponents/Projetprint";
import "./App.sass";

function Portfolio() {
  const [lang, setLang] = useState("fr");
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <MouseTrail strokeColor="#EF7BA0" lineDuration="30" />
      <main>
        <Home lang={lang} />
        <About lang={lang} />
        <Projets lang={lang} />
        <Projetsprint />
        <CV lang={lang} />
        <Contact />
      </main>
    </>
  );
}

export default Portfolio;
