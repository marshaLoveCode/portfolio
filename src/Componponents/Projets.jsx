import ReactLogo from "../logo/react.svg";
import CssLogo from "../logo/css.svg";
import HtmlLogo from "../logo/html.svg";
import MysqlLogo from "../logo/mysql.svg";
import NodeLogo from "../logo/node.svg";
import SassLogo from "../logo/sass.svg";
import WordpressLogo from "../logo/wordpress.svg";

export default function Projets() {
  return (
    <section className="projets--section" id="projets--section">
      <h3>Projets</h3>
      <div className="projets--section--grid">
        <div className="projets--section--grid--element">
          <p>2023</p>
          <a
            href="https://fabien-gaillard.fr/"
            className="projets--section--grid--element--img"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/projets/Fabien-Gaillar.jpg" />
            <h4>Fabien Gaillar - Artiste peintre</h4>
          </a>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={ReactLogo} />
              <img src={MysqlLogo} />
              <img src={NodeLogo} />
              <img src={SassLogo} />
            </div>
          </div>
        </div>
        <div className="projets--section--grid--element">
          <p>2023</p>
          <a
            href="https://www.imakethingsmove.com"
            className="projets--section--grid--element--img"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/projets/i-make-things-moves.jpg" />
            <h4>I make things moves - Motion Design</h4>
          </a>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={ReactLogo} />
              <img src={SassLogo} />
            </div>
          </div>
        </div>
        <div className="projets--section--grid--element">
          <p>2022</p>
          <a
            href="https://gite-le-revel.fr/"
            className="projets--section--grid--element--img"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/projets/gite-le-revel.jpg" />
            <h4>Gîte Le Revel</h4>
          </a>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={WordpressLogo} />
              <img src={CssLogo} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element">
          <p>2022</p>
          <a
            href="https://www.imakethingsmove.com"
            className="projets--section--grid--element--img"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/projets/50-cinquante-production.jpg" />
            <h4>50-Cinquante Production</h4>
          </a>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={ReactLogo} />
              <img src={CssLogo} />
              <img src={MysqlLogo} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element">
          <p>2022</p>
          <a
            href="https://onpassealacte.fr/"
            className="projets--section--grid--element--img"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/projets/on-passe-a-l-acte.jpg" />
            <h4>Association On passe à l'acte </h4>
          </a>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={HtmlLogo} />
              <img src={CssLogo} />
              <img src={MysqlLogo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
