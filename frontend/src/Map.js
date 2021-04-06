import { useEffect, useState } from "react";
import React from "react";
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

  return (
    <div
      //   role="button"
      //   tabIndex="-1"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
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

export default Map;

// import React from "react";
// // import * as Mapillary from "mapillary-js";
// import { MapillaryViewer } from "react-mapillary";

// import {
//   isFallbackSupported,
//   isSupported,
//   RenderMode,
//   Viewer,
// } from "mapillary-js";

// let viewer;

// checkSupport();
// init();
// addButtons();

// function checkSupport() {
//   const sup = `isSupported: ${isSupported()}`;
//   const fSup = `isFallbackSupported: ${isFallbackSupported()}`;
//   console.log(`${sup}, ${fSup}`);
// }

// function init() {
//   const container = document.createElement("div");
//   container.className = "viewer";
//   document.body.append(container);

//   viewer = new Viewer({
//     apiClient: "MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw",
//     component: { cover: false },
//     container,
//     imageId: "zarcRdNFZwg3FkXNcsFeGw",
//     renderMode: RenderMode.Letterbox,
//   });
// }

// function addButton(content, handler) {
//   const button = document.createElement("button");
//   button.textContent = content;
//   button.addEventListener("click", handler);
//   document.body.append(button);
// }

// function addButtons() {
//   addButton("Activate", () => viewer.deactivateCover());
//   addButton("Deactivate", () => viewer.activateCover());
//   addButton("Remove", () => viewer.remove());
//   addButton("Fill", () => viewer.setRenderMode(RenderMode.Fill));
//   addButton("Letterbox", () => viewer.setRenderMode(RenderMode.Letterbox));

//   let filterIndex = 0;
//   const filters = [
//     [],
//     ["==", "cameraType", "spherical"],
//     ["==", "sequenceId", "s5I5m7BvYykB677MpFnOIw"],
//     ["in", "sequenceId", "s5I5m7BvYykB677MpFnOIw", "-aC4wx-8oOkCp6SFGXoyAg"],
//     [
//       "all",
//       [">=", "capturedAt", 1370509079741 - 24 * 60 * 60 * 1000],
//       ["<=", "capturedAt", 1370509079741 + 24 * 60 * 60 * 1000],
//     ],
//   ];
//   addButton("Filter", () => {
//     filterIndex = (filterIndex + 1) % filters.length;
//     viewer.setFilter(filters[filterIndex]).then(function (n) {
//       console.log("filter", filters[filterIndex]);
//     });
//   });

//   const sequenceComponent = viewer.getComponent("sequence");
//   addButton("Play", () => {
//     viewer.deactivateComponent("cache");
//     sequenceComponent.play();
//   });
//   addButton("Stop", () => {
//     viewer.activateComponent("cache");
//     sequenceComponent.stop();
//   });

//   let sliderActive = false;
//   addButton("Slider", () => {
//     if (sliderActive) {
//       viewer.activateComponent("imagePlane");
//       viewer.activateComponent("direction");
//       viewer.activateComponent("sequence");
//       viewer.activateComponent("keyboard");
//       viewer.deactivateComponent("slider");
//       sliderActive = false;
//     } else {
//       viewer.activateComponent("slider");
//       viewer.deactivateComponent("imagePlane");
//       viewer.deactivateComponent("direction");
//       viewer.deactivateComponent("sequence");
//       viewer.deactivateComponent("keyboard");
//       sliderActive = true;
//     }
//   });
// }

// const Map = () => {
//   return (
//     <MapillaryViewer
//       clientId="MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw"
//       imageKey="085Gpl_xNxW1Lw2eeEG28w"
//       //   filter={["==", "userKey", "2PiRXqdqbY47WzG6CRzEIA"]}
//       //   onTiltChanged={(tilt) => console.log(`Tilt: ${tilt}`)}
//       //   onFovChanged={(fov) => console.log(`FoV: ${fov}`)}
//       //   onNodeChanged={(node) => console.log(node)}
//       //   onBearingChanged={(bearing) => console.log(`Bearing: ${bearing}`)}
//     />
//   );
// };

// export default Map;
