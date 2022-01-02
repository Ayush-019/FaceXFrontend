import React from "react";
import Tilt from "react-tilt";
import './Logo.css';
import logo from './logo.png'

const Logo = () => {
  return (
    <div className="logo ma4 mt0">
      <Tilt
        className="Tilt shadow-2 br2"
        options={{ max: 60 }}
        style={{ height: 130, width: 130 }}
      >
        <div className="Tilt-inner pa3">
        <img src = {logo} alt = "brain"/>
             </div>
      </Tilt>
    </div>
  );
};

export default Logo;
