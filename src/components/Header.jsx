import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';
import './Header.css';
function Header() {
  return (
    <header className="header fixed-top">
      <Navbar collapseOnSelect className="container-fluid" expand="md">
        <Navbar.Brand>
          <Link to="/" className="logo" style={ { textDecoration: 'none' } }>
            Portfó
            <span>lio</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse navbar id="responsive-navbar-nav">
          <Nav className="container me-auto links-navbar">
            <Nav.Link as={ Link } to="/" href="/" className="navlink">
              Home
            </Nav.Link>
            <Nav.Link as={ Link } to="/about" href="/about" className="navlink">
              Sobre
            </Nav.Link>
            <Nav.Link as={ Link } to="/projects" href="/projects" className="navlink">
              Projetos
            </Nav.Link>
            <Nav.Link as={ Link } to="/contact" href="/contact" className="navlink">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
export default Header;