import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";

export default function FligthSearchModalComp(props) {
    // const [show, setShow] = useState(false);
  
    const handleClose = () => props.setShow(false);
    
    return (
        
        <Modal
          show={props.show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
    );
  }
  