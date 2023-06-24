import "./style.css";

import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div id="copy">
        <p id="footer-text">
          &copy; 2023 Desenvolvido por{" "}
          <a href="https://github.com/RennanHolanda/portfolio">
            <strong>Bruno Rennan O Holanda </strong>
          </a>
        </p>
      </div>

      <div id="icons">
        <a href="https://www.linkedin.com/in/rennanholanda/">
          <AiOutlineLinkedin id="tag-icon" />
        </a>
        <a href="https://github.com/RennanHolanda">
          <VscGithub id="tag-icon" />
        </a>
        <a href="https://www.instagram.com/rennanholanda/">
          <AiOutlineInstagram id="tag-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
