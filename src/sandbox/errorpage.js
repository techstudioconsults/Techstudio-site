import React from "react";
import "./error.css";
import pana from "./pana.png";

const Errorpage = () => {
  const data = {
    errorheader: "Oops! Page not Found",
    errortext: "We can't seem to find the page you're looking for.",
    buttontext: "Go to Home",
  };
  return (
    <div className="container p-4">
      <div className="container  mt-5">
        <img className="errimg" src={pana} alt="img"></img>
      </div>
      <div className="mt-5">
        <h1 className="htag fw-bold">{data.errorheader}</h1>
        <p className="ptag text-grey fs-4">{data.errortext}</p>
      </div>
      <button className="btn btn-primary mt-3  fs-5">{data.buttontext}</button>
    </div>
  );
};

export default Errorpage;
