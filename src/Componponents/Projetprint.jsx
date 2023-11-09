import photoshop from "../logo/photoshop.svg";
import illustrator from "../logo/illustrator.svg";
import difusionBee from "../logo/difusionBee.svg";

export default function Projetsprint() {
  return (
    <section className="projets--section" id="projets--section">
      <div className="projets--section--grid design-grid">
        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img
              src="/design/wall-exercice.png"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img src="/design/kamasi.png" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img
              src="/design/jlpt-road-phone.png"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img
              src="/design/jlpt-road-tshirt.png"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img
              src="/design/jlpt-road-presentation.png"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
              <img src={difusionBee} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img src="/design/logo-owl.png" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={illustrator} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img src="/design/typo-logo.png" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={illustrator} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <img
              src="/design/calculatrice.png"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={illustrator} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
