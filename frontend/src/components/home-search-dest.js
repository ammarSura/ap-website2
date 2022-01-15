
import React, {useState} from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";
import HomeSearchDestPopComp from "./home-search-dest-pop";
import Fuse from 'fuse.js'


export default function HomeSearchDestComp(props) {

    const [ overlay, setOverlay ] = useState(false);
    const [ _class, setClass ] = useState(false);
    const [ term, setTerm ] = useState('');
    const lst = [{
        _id: "61e132774a9cd43bf8b7f90e",
        name: "Agatti Island Airport",
        city: "Agatti Island",
        code: "AGX"
    },
    {
        _id: "61e132774a9cd43bf8b7f90f",
        name: "Ahmedabad Airport",
        city: "Ahmedabad",
        code: "AMD"
    },
    {
        id: "61e132774a9cd43bf8b7f910",
        name: "Aizawl Airport",
        city: "Aizawl",
        code: "AJL"
    },
    {
        id: "61e132774a9cd43bf8b7f911",
        name: "Akola Airport",
        city: "Akola",
        code: "AKD"
    },
    {
        id: "61e132774a9cd43bf8b7f912",
        name: "Along Airport",
        city: "Along",
        code: "IXV"
    },
    {
        id: "61e132774a9cd43bf8b7f913",
        name: "Amausi Airport",
        city: "Lucknow",
        code: "LKO"
    },
    {
        id: "61e132774a9cd43bf8b7f914",
        name: "Amritsar Airport",
        city: "Ludhiana",
        code: "LUH"
    },
    {
        id: "61e132774a9cd43bf8b7f915",
        name: "Bagdogra Airport",
        city: "Bagdogra",
        code: "IXB"
    },
    {
        id: "61e132774a9cd43bf8b7f916",
        name: "Bajpe Airport",
        city: "Mangalore",
        code: "IXE"
    },]

    const [lster, setLster ] = useState(lst);
    console.log(_class);
    

    function searcher() {

        var value = document.getElementById(props.type).value;
        if (value.length > 1) {
            const options = {
                includeScore: true,
                
                keys: [
                    {name: 'name',
                    weight: 0.1},
                    {name: 'code',
                    weight: 0.2},
                    {name: 'city',
                    weight: 0.7}
                ],
                
                threshold: 0.52,
              }
              
            const fuse = new Fuse(lst, options)
            
            const result = fuse.search(value);

            console.log(result)
        
            var real = []
        
            for (let i = 0; i < result.length; i++) {
                real.push(result[i].item)
            }
            setLster(real);
            // console.log(real)
            
        } else {
            setLster(lst)
        }
        
    }

    
    return (
        <div style={{position: "relative"}}>
            <input className="home-search-input"type="text" placeholder={props.placeholder} id={props.type} onChange={()=>searcher()} onClick={() => setOverlay(true)} autoComplete="off"/>
                            
            <HomeSearchDestPopComp setClass={setClass} overlay={overlay} setOverlay={setOverlay} _class={_class} lst={lster} allowed1={props.type} allowed2={"home-search-boxes"} boxclass="home-search-select" squareclass="square" />
        </div> 
                           
                            
    );

    
  
  }
  


