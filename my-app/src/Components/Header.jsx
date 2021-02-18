import { useState } from 'react';
import {Navbar, Nav, Container, Button, Modal, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// import { ModalWindowEnterName } from './ModalWindowEnterName'

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
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
              <Nav>
                <Button variant="primary" className='mr-2' onClick={handleShow}>Enter name</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Enter your nickname</Modal.Title>                
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>                        
                  <Form.Control size="lg" type="text" placeholder="Write your nickname to save your record..." />
                  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary">Submit</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
};
