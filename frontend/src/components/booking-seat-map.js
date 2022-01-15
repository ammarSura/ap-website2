import React, { useState, useEffect } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

import BookingSeatRowComp from "./booking-seat-row";
import BookingSeatComp from "./booking-seat";



export default function BookingSeatMapComp(props) {

    

    const rows = 10;
    
    const max = 3;

    const [ maxed, setMaxed ] = useState(false);
    const [ seats, setSeats ] = useState(0)
    // var seats = 0



    function addSeat(number) {
        
        if (!document.getElementById(number).checked) {
            setSeats(seats - 1);
            console.log('-', number);

        } else {
            if (seats < max) {
                setSeats(seats + 1);
                console.log('+', number);
            } 
        }

       


        
    }
    
    function seatDisplayer(col) {
        let helper = []
        for (let i = 1; i < 31; i++) {
            helper.push(i)
        
        }

        if (col===1) {
            var lst = helper.map( (row) => {

                if (row===1 ||  row===11 || row===12) {
                    return (
                        <div key={row}>
                        <Row >
                            <Col>
                                <p>
                                    exit
                                </p>
                            </Col>
                        </Row>
                        <Row >
                            <BookingSeatComp seat={row + "A"} addSeat={addSeat} maxed={maxed}/>
                            <BookingSeatComp seat={row + "B"} addSeat={addSeat} maxed={maxed}/>
                            <BookingSeatComp seat={row + "C"} addSeat={addSeat} maxed={maxed}/>
                        </Row>
                        </div>
                        
                    );  
                } 
    
            
                return (
                    
                    <Row key={row}>
                        <BookingSeatComp seat={row + "A"} addSeat={addSeat} maxed={maxed}/>
                        <BookingSeatComp seat={row + "B"} addSeat={addSeat} maxed={maxed}/>
                        <BookingSeatComp seat={row + "C"} addSeat={addSeat} maxed={maxed}/>
                    </Row>
                    
                );
            });
        } else {
            var lst = helper.map( (row) => {
                if (row===1 ||  row===11 || row===12) {
                    return (
                        <div key = {row}>
                            <Row>
                                <Col>
                                    <p>
                                        exit
                                    </p>
                                </Col>
                            </Row>

                            <Row key={row}>
                            <BookingSeatComp seat={row + "D"} addSeat={addSeat} maxed={maxed}/>
                            <BookingSeatComp seat={row + "E"} addSeat={addSeat} maxed={maxed}/>
                            <BookingSeatComp seat={row + "F"} addSeat={addSeat} maxed={maxed}/>
                            </Row>
                        </div>
                    );
                    

                } 

                return (
                    
                   
                    
                    <Row key={row}>
                        <BookingSeatComp seat={row + "D"} addSeat={addSeat} maxed={maxed}/>
                        <BookingSeatComp seat={row + "E"} addSeat={addSeat} maxed={maxed}/>
                        <BookingSeatComp seat={row + "F"} addSeat={addSeat} maxed={maxed}/>
                    </Row>
                    
                );
            });
        }
        

        return lst;
    }

    useEffect( () => {
        if (seats >= max  && !maxed) {
            setMaxed(true);
            console.log("max is true now");
        } 

        if (seats < max && maxed) {
            setMaxed(false);
            console.log('max is false now');
        }
    })
        
    return (
        <div >
        <Container fluid style={{border:"solid", height: "35em", width:"25em", overflowY: "scroll", }}>
            <Row>
                <Col sm={6} xs={6}>
                <div className="plane-front">
                    n
                </div>
                </Col>
                
            </Row>
            <Row>
                <Col sm={6} xs={6}>
                    {seatDisplayer(1)}
                </Col>

                <Col sm={6} xs={6}>
                    {seatDisplayer(2)}
                </Col>
            </Row>

            <Row>
                <Col sm={6} xs={6}>
                <div >
                    <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1642226608/Mediamodifier-Design_1_jhjazd.svg" style={{width: "100em"}}/>
                </div>
                </Col>
                
            </Row>
            
        </Container>
        

        </div>
       
    );
}
                
                