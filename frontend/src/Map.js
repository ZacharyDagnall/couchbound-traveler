import { useEffect, useState } from "react";
import React from "react";
// import * as Mapillary from "mapillary-js";
import { MapillaryViewer } from "react-mapillary";

function Map() {
  const [imgKey, setImgKey] = useState("085Gpl_xNxW1Lw2eeEG28w");
  //   useEffect(() => {
  //     fetch(
  //       "https://a.mapillary.com/v3/images?client_id=MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw"
  //     )
  //       .then((r) => r.json())
  //       .then((j) => setImgKey(j.features[10].properties.key));
  //   }, []);

  // const mly = new Mapillary.Viewer();
  //   {
  //   apiClient: "MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw",
  //   container: "map-container",
  //   imageKey: { imgKey },
  // }
  // console.log("import working???", mly);

  return (
    <div
      id="map-container"
      //   role="button"
      //   tabIndex="-1"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <div>{mly}</div> */}
      <MapillaryViewer
        clientId="MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw"
        imageKey={imgKey}
        filter={["==", "userKey", "2PiRXqdqbY47WzG6CRzEIA"]}
        onTiltChanged={(tilt) => console.log(`Tilt: ${tilt}`)}
        onFovChanged={(fov) => console.log(`FoV: ${fov}`)}
        onNodeChanged={(node) => console.log(node)}
        onBearingChanged={(bearing) => console.log(`Bearing: ${bearing}`)}
      />
    </div>
  );
}

// "Lat:", node.latLon.lat, "Long:", node.latLon.lon

export default Map;
