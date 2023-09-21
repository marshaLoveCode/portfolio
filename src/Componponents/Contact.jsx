export default function Contact() {
  return (
    <section className="contact--section" id="contact--section">
      <h3>Contact</h3>
      <div className="contact--section--grid">
        {" "}
        <a
          href="https://www.linkedin.com/in/shango-walungua-233679218/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/contact/linkedin.svg" />
          <p>Linkedin</p>
        </a>
        <a
          href="https://www.instagram.com/mrsh.web/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/contact/instagram.svg" />
          <p>Instagram</p>
        </a>
        <a href="mailto:shango.walungua@gmail.com">
          <img src="/contact/mail.svg" />
          <p>Mail</p>
        </a>
      </div>
    </section>
  );
}
