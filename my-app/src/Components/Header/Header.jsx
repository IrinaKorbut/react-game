import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Styles = styled.div `
  a, .navbar-nav, .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
`

export const Header = () => {
  return (
    <div>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="">NumberAma</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/game'>Game</Link></Nav.Link>
                <Nav.Link><Link to='/rules'>How to play</Link></Nav.Link>
                <Nav.Link><Link to='/settings'>Settings</Link></Nav.Link>
                <Nav.Link><Link to='/statistic'>Statistic</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  )
};
