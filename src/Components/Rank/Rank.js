import React from "react";
import './Rank.css';

const Rank = ({name,entries}) =>{ 
    return (
      <div>
        <div className="first white">{`${name}, your total detection count is...`}</div>
        <div className="second white ">{entries}</div>
      </div>
    );
}

export default Rank;