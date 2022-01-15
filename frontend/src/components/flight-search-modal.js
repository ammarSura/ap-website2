import React from "react";
import { Modal } from "react-bootstrap";
import "../App.css";

export default function FligthSearchModalComp(props) {
  
    const handleClose = () => props.setShow(false);

    
    
    return (
        
        <Modal
          show={props.show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Important information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h3>
              Guidelines for visa
            </h3> */}

            <h3>
              Guidelines for covid
            </h3>
          </Modal.Body>
          <Modal.Footer>
            <button className="home-search-btn"onClick={handleClose}>
              Close
            </button>
            <button className="home-search-btn"onClick={() => window.location.href="/booking"}>Okay</button>
          </Modal.Footer>
        </Modal>
    );
  }
  