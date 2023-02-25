import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";

import logo from "./assets/Hearts_2.png"

import Popup from './pages/components/Popup';
import {useState} from 'react';


function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <header>
      <div class="left">
          <img src={logo}></img>
          <p>Hearts of Love</p>
      </div>
      <div class="right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/join">Join Us</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/shop">Shop</Link>
          <button onClick={() => setButtonPopup(true)} className="contact-us"> Contact Us </button>  
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <div className='popup-content'>
      <img src={logo}></img>
        <h1> Contact Us!</h1>
        <p> Need to contact us? 
        <br></br><br></br>
        Email: heartsofloveorganisation@gmail.com <br></br>
        Instagram: @hearts_of_love_organization</p>
        </div>
      </Popup>
    </header>
  );
}

export default Navbar;