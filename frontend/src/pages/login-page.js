import React, {useState} from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

import { GoogleLogin } from 'react-google-login';


const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }



export default function Login() {

    const [state, setState] = useState(false);

    async function Check() {
   
        console.log()
        // fetch('/login/google')
        //     .then(res => res.json())
        //     .then(result => {
        //     console.log(result)
        //     });
    
        // window.location.reload();
    
    }

    // function handleLogin() {
    //     console.log('cool')
    // }

    
    // console.log(googleData)
   
    return (
        <div>
                <GoogleLogin
            clientId={"143028299259-77tcdvhq79g2tah482640g4cbjpe2rh3.apps.googleusercontent.com"}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}

            cookiePolicy={'single_host_origin'}
        />
        <h1>hi</h1>
        </div>
        
    );

    
  
  }
  
