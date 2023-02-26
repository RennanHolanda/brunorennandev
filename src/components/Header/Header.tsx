import "./style.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand id="title-nav" href="/">Port<span>Folio</span></Navbar.Brand>
        <Container>
          <Nav className="nav">
            <Nav.Link id="nav-letter" href="/">Home</Nav.Link>
            <Nav.Link id="nav-letter" href="/about">Sobre</Nav.Link>
            <Nav.Link id="nav-letter" href="/myprojects">Projetos</Nav.Link>
            <Nav.Link id="nav-letter" href="/contact">Contatos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
