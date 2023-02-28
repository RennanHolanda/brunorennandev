import "./style.css";

import { AiOutlineLinkedin } from "react-icons/ai"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineInstagram } from "react-icons/ai"

import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
      <Container>
    <footer>
        <p id="footer-text">
          &copy; 2023 Desenvolvido por{" "}
          <a href="https://github.com/RennanHolanda/portfolio">
            Bruno Rennan O Holanda 
          </a>
        </p>
        <div id="icons">
        <a href="https://www.linkedin.com/in/rennanholanda/">
          <AiOutlineLinkedin id="tag-icon"/>
        </a>
        <a href="https://github.com/RennanHolanda">
          <VscGithub id="tag-icon"/>
        </a>
        <a href="https://www.instagram.com/rennanholanda/">
          <AiOutlineInstagram id="tag-icon"/>
        </a>
        </div>
    </footer>
      </Container>
  );
};

export default Footer;
