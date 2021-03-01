import { useState } from 'react';
import {Navbar, Nav, Container, Button, Modal, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";


export const ModalWinWindow = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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
