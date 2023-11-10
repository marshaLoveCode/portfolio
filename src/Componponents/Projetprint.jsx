import photoshop from "../logo/photoshop.svg";
import illustrator from "../logo/illustrator.svg";
import difusionBee from "../logo/difusionBee.svg";
import Popup from "reactjs-popup";

export default function Projetsprint() {
  return (
    <section className="projets--section" id="projets--section">
      <div className="projets--section--grid design-grid">
        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <Popup
              trigger={
                <img
                  src="/design/wall-exercice.png"
                  style={{ objectFit: "cover" }}
                />
              }
              modal
            >
              <img src="/design/wall-exercice.png" />
            </Popup>
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <Popup trigger={<img src="/design/kamasi.png" />} modal>
              <img src="/design/kamasi.png" style={{ objectFit: "cover" }} />
            </Popup>
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <Popup trigger={<img src="/design/jlpt-road-phone.png" />} modal>
              <img src="/design/jlpt-road-phone.png" />
            </Popup>
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <Popup trigger={<img src="/design/jlpt-road-tshirt.png" />} modal>
              <img src="/design/jlpt-road-tshirt.png" />
            </Popup>
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={photoshop} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <Popup
              trigger={<img src="/design/jlpt-road-presentation.png" />}
              modal
            >
              <img src="/design/jlpt-road-presentation.png" />
            </Popup>
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
            <Popup trigger={<img src="/design/logo-owl.png" />} modal>
              <img src="/design/logo-owl.png" />
            </Popup>
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={illustrator} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <Popup trigger={<img src="/design/typo-logo.png" />} modal>
              <img src="/design/typo-logo.png" />
            </Popup>
          </div>
          <div>
            <div className="projets--section--grid--element--techno">
              <img src={illustrator} />
            </div>
          </div>
        </div>

        <div className="projets--section--grid--element design">
          <div className="projets--section--grid--element--img design">
            <Popup trigger={<img src="/design/calculatrice.png" />} modal>
              <img src="/design/calculatrice.png" />
            </Popup>
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
