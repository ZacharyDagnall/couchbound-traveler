import { useEffect, useState } from "react";
import React from "react";
import { MapillaryViewer } from "react-mapillary";

function Map({ imgKey }) {
  const [latlong, setLatlong] = useState({ lat: 0, long: 0 });
  console.log(latlong);

  return (
    <div
      id="map-container"
      // role="button"
      // tabIndex="-1"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <MapillaryViewer
        clientId="MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw"
        imageKey={imgKey}
        // filter={["==", "userKey", "2PiRXqdqbY47WzG6CRzEIA"]}
        // onTiltChanged={(tilt) => console.log(`Tilt: ${tilt}`)} //vertical angle
        // onFovChanged={(fov) => console.log(`FoV: ${fov}`)}  //zoom
        onNodeChanged={(node) => {
          console.log("Lat:", node.latLon.lat, "Long:", node.latLon.lon);
          setLatlong({ lat: node.latLon.lat, long: node.latLon.lon });
        }}
        // onBearingChanged={(bearing) => console.log(`Bearing: ${bearing}`)} //horiz angle
      />
    </div>
  );
}

export default Map;
