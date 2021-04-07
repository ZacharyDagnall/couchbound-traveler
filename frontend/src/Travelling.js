import React from "react";
import Map from "./Map";

function Travelling({ travelMode }) {
  console.log(travelMode);

  return (
    <div id="wrapper">
      <div className="content">
        <p>hey there!</p>
      </div>
      <div className="background">
        <Map />
      </div>
    </div>
  );
}

export default Travelling;
