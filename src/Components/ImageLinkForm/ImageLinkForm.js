import React from "react";
import "./Imagelink.css";


const ImageLinkForm = ({InputChange,onSubmit}) => {
  return (
    <div>
      <p className="text fw4">
        This Smart Brain will detect faces in your picture.Give it a try!
        <br></br>
        Enter your url here.
      </p>

      <div className="all">
        <div className="formbtn br3 shadow-5">
          <input onChange = {InputChange} type="text" className="form f4 w-70"></input>
          <button onClick = {onSubmit} className="btn w-30 grow f4 link dib white">
            Detect!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
