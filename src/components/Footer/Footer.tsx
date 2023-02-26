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
        <p>
        </p>
        <a href="https://www.linkedin.com/in/rennanholanda/">
          <AiOutlineLinkedin className="icon"/>
        </a>
        <a href="https://github.com/RennanHolanda">
          <VscGithub className="icon"/>
        </a>
        <a href="">
          <AiOutlineInstagram className="icon"/>
        </a>
    </footer>
      </Container>
  );
};

export default Footer;
