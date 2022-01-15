
import React, { useState, useEffect } from "react";
import "../App.css";
import { Overlay, OverlayTrigger, Popover, Stack } from "react-bootstrap";



export default function HomeSearchDestPopComp(props) {

    function handleClick(obj) {
        props.setClass(obj);
        document.getElementById(props.allowed1).value = obj.city + " (" + obj.code + ")";
        console.log(document.getElementById(props.allowed1))
    };

    function looper() {
      const els = props.lst.map((ele)=>{
        return (<div className={props.allowed2} key={ele.code} onClick={()=> handleClick({code: ele.code, city: ele.city})} style={props._class===ele.code? {backgroundColor: "#dee8fc"}: null}>
        

        {ele.city} ({ele.code})
    </div>)
      })

      return els;
    }



    if (props.overlay) {
      document.addEventListener("click", (evt) => {
        let targetElement = evt.target; // clicked element
        if (!(targetElement.id === props.allowed1 || targetElement.className === props.allowed2)) {
          props.setOverlay(false);
        } 
    });

      return (
        <div style={{position: "relative"}}>
        <div className={props.squareclass}>
        </div>
        <div className={props.boxclass} >
          {looper()}
        </div>
        </div>

      );
    } else {
      return (null);
    }
 
   

    
  
  }


