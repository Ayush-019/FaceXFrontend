import React from "react";
import "./FaceRecogniser.css";

const FaceRecogniser = ({imageurl,box}) => {
  return (
    <div className="face ma">
      <div className="absolute mt2">
        <img id="image" alt="" src={imageurl} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecogniser;
