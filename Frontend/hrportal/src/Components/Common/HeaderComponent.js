import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = (prop) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand href="#home" className="logo-color">
          NexTurn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link eventKey={2} href="#memes" className="topnav-menu-link">
              SIGN IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
