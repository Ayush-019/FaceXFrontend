import React from "react";
import "./Navigation.css";

const Navigation = ({onroute,isSignedIn}) => {
      if(isSignedIn){
        return (
      <nav className="navbar">
        <p onClick= {()=>onroute('signout')}  className="txt link dib pa3 pointer underline signout">Sign out</p>
      </nav>
        )
      }
      else{
        return(
        <nav className="navbar">
        <p onClick= {()=>onroute('signin')}  className="txt link dib pa3 pointer underline signin">Sign In</p>
        <p onClick= {()=>onroute('register')}  className="txt link dib pa3 pointer underline register">Register</p>
      </nav>
        );
      }
};

export default Navigation;
