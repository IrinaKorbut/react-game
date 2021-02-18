import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="">Numberama</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/game'>New game</Link></Nav.Link>
          <Nav.Link><Link to='/rules'>How to play</Link></Nav.Link>
          <Nav.Link><Link to='/settings'>Settings</Link></Nav.Link>
          <Nav.Link><Link to='/statistic'>Statistic</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};
