import { useRef } from "react";

export default function Cv() {
  const cvref = useRef(null);

  return (
    <section ref={cvref} className="cv--section" id="cv--section">
      <div>
        <img src="CV.png" />
      </div>

      <a className="cv--section--download" target="_blank" href="CV.pdf">
        Télécharger le PDF
        <img src="download.svg" />
      </a>
    </section>
  );
}
