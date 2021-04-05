import logo from "./logo.svg";
import "./App.css";
import Map from "./Map";

//
// import "mapillary-js/dist/mapillary.min.css";
// const Mapillary = require("../mapillary-js");

function App() {
  // const map = (
  //   <div className="App">
  //     <div id="mapillaryjs" style="width: 100%; height: 500px;"></div>
  //     {/* <script>{mlyCombined}</script> */}
  //   </div>
  // );

  // const mlyCombined = new Mapillary.Viewer({
  //   apiClient: "MHZvSFJXZjRWR0p0YWZpODRTMDhDbjoxOTUzYjNlMjVlMWM0NTcw",
  //   container: "mapillaryjs",
  //   imageId: "TUmg28hw3TfXy9D_ZINqNA",
  // });

  // map.script = mlyCombined;

  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
