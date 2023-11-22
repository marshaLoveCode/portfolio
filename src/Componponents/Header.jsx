import { motion } from "framer-motion";
export default function Header({ lang, setLang }) {
  const goToSection = (id) => {
    const section = document.getElementById(id);
    console.log(section.offsetTop);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  if (lang === "fr") {
    return (
      <motion.nav
        key={"frNav"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
      >
        <ul>
          <li
            onClick={() => {
              goToSection("home--section");
            }}
          >
            ACCEUIL
          </li>

          <li
            onClick={() => {
              goToSection("about--section");
            }}
          >
            A PROPOS
          </li>

          <li
            onClick={() => {
              goToSection("projets--section");
            }}
          >
            PROJETS
          </li>
          <li
            onClick={() => {
              goToSection("cv--section");
            }}
          >
            CV
          </li>
          <li
            onClick={() => {
              goToSection("contact--section");
            }}
          >
            CONTACT
          </li>
          <li
            onClick={() => {
              setLang("en");
            }}
          >
            FR
          </li>
        </ul>
      </motion.nav>
    );
  } else {
    return (
      <motion.nav
        key={"EnNav"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
      >
        <ul>
          <li
            onClick={() => {
              goToSection("home--section");
            }}
          >
            HOME
          </li>

          <li
            onClick={() => {
              goToSection("about--section");
            }}
          >
            ABOUT
          </li>

          <li
            onClick={() => {
              goToSection("projets--section");
            }}
          >
            PROJECTS
          </li>

          <li
            onClick={() => {
              goToSection("cv--section");
            }}
          >
            CV
          </li>

          <li
            onClick={() => {
              goToSection("contact--section");
            }}
          >
            CONTACTS
          </li>

          <li
            onClick={() => {
              setLang("fr");
            }}
          >
            EN
          </li>
        </ul>
      </motion.nav>
    );
  }
}
