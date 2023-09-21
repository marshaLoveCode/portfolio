import { useState } from "react";
import ReactLogo from "../logo/react.svg";
import BlenderLogo from "../logo/blender.svg";
import CssLogo from "../logo/css.svg";
import DifusionBeeLogo from "../logo/difusionBee.svg";
import FigmaLogo from "../logo/figma.svg";
import HtmlLogo from "../logo/html.svg";
import IlustratorLogo from "../logo/illustrator.svg";
import MongodbLogo from "../logo/mongoDb.svg";
import MysqlLogo from "../logo/mysql.svg";
import NodeLogo from "../logo/node.svg";
import PhotoshopLogo from "../logo/photoshop.svg";
import SassLogo from "../logo/sass.svg";
import ThreejsLogo from "../logo/threeJS.svg";
import WordpressLogo from "../logo/wordpress.svg";
import { motion } from "framer-motion";

export default function About({ lang }) {
  const [techno, setTechno] = useState("Figma");

  return (
    <section className="about--section" id="about--section">
      <div className="about--section--text">
        {lang === "fr" ? <h3>A propos</h3> : <h3>About</h3>}
        {lang === "fr" ? (
          <p>
            Bonjour, je suis Shango, apprenti designer web. En 2020, à la suite
            d'une reconversion professionnelle, j'ai entamé un apprentissage
            autodidacte du développement web. Rapidement, ma passion pour les
            les technologies qu'offre le web pris forme. Actuellement, je
            recherche une opportunité d'alternance en tant que Web Designer,
            dans le but de développer davantage ma créativité et mon autonomie
            dans mes projets web à venir. Mes passion s'articule autour de la
            musique, du cinéma et de la littérature.
          </p>
        ) : (
          <p>
            Hello, I'm Shango, a self-taught web designer apprentice. In 2020,
            following a career change, I embarked on a self-guided journey into
            web development. Quickly, my passion for the technologies offered by
            the web took shape. Currently, I am seeking an opportunity for an
            apprenticeship as a Web Designer, with the aim of further developing
            my creativity and autonomy in my future web projects. My passions
            revolve around music, cinema, and literature.
          </p>
        )}
      </div>
      <div className="about--section--competence">
        <h3>Compétence</h3>
        <div className="about--section--competence--logo">
          <img src={ReactLogo} onMouseOver={() => setTechno("React")} />

          <img src={NodeLogo} onMouseOver={() => setTechno("Node JS")} />

          <img src={HtmlLogo} onMouseOver={() => setTechno("HTML")} />

          <img src={CssLogo} onMouseOver={() => setTechno("CSS")} />

          <img src={MysqlLogo} onMouseOver={() => setTechno("My SQL")} />

          <img src={SassLogo} onMouseOver={() => setTechno("SASS / SCSS")} />

          <img src={WordpressLogo} onMouseOver={() => setTechno("WORDPRESS")} />

          <img src={MongodbLogo} onMouseOver={() => setTechno("Mongo DB")} />

          <img src={FigmaLogo} onMouseOver={() => setTechno("Figma")} />

          <img src={PhotoshopLogo} onMouseOver={() => setTechno("Photoshop")} />

          <img
            src={IlustratorLogo}
            onMouseOver={() => setTechno("Ilustrator")}
          />

          <img src={ThreejsLogo} onMouseOver={() => setTechno("Three JS")} />

          <img src={BlenderLogo} onMouseOver={() => setTechno("Blender")} />

          <img
            src={DifusionBeeLogo}
            onMouseOver={() => setTechno("Difusion Bee")}
          />
        </div>
        <motion.p
          key={`${techno}key`}
          className="about--section--competence--logo--title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
          }}
        >
          {techno}
        </motion.p>
      </div>
    </section>
  );
}
