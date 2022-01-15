import React, { useState } from "react";
import { Stack, Modal } from "react-bootstrap";
import "../App.css";

export default function CheckinTCModalComp(props) {
    const [ agreed, setAgreed ] = useState(false);
    const [ checkinConfirmed, setCheckinConfirmed ] = useState(false)

    console.log(agreed)
   
    const flight =
    {
        time: "03:05-05:05",
        flight_number: "6E151",
        duration: "2h 5m",
        from: "BOM",
        to: "DEL",
        passengers: 3
    
    };

    function handleAgreed() {
        if (document.getElementById("agree").checked) {
            setAgreed(true);
        } else {
            setAgreed(false);
        }

    }

    if (!props.checkinConfirmed) {
        return (
            <Modal
            show={!checkinConfirmed}
            onHide={()=>window.location.replace("/")}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Check-in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Stack>
                  <div>
                      <h3>
                          Flight Details
                      </h3>
                  </div>
      
                  <div>
                      <p>
                          {flight.from}-{flight.to}
                      </p>
                  </div>
      
                  <div>
                      <p>
                          {flight.time}
                      </p>
                  </div>
      
                  <div>
                      <p>
                          {flight.passengers}
                      </p>
                  </div>
      
                  <div>
                      <p>
                          {flight.flight_number}
                      </p>
                  </div>

                  <div>
                      <h3>
                          Terms and Conditions
                      </h3>
                  </div>

                  <div>
                      <p>
                          details
                      </p>
                  </div>

                  <div>
                      <input type="checkbox" id="agree" onChange={() => handleAgreed()}/>
                      <label htmlFor="agree">Agree to terms and conditions</label>
                  </div>
      
                  
              </Stack>
  
            </Modal.Body>
            <Modal.Footer>
              <button onClick={()=>window.location.replace('/')}>
                Cancel Check-in
              </button>
              <div>
                  <button onClick={() => setCheckinConfirmed(true)} disabled={agreed? false: true}>Confirm Check-in</button>
              </div>
            </Modal.Footer>
          </Modal>
          
    
        );

       
    } else {
        return (null);
    }
    
  }
  
