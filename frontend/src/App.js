import logo from "./logo.svg";
import "./App.css";
import Mapillary from "mapillary-js";

function App() {
  // <script>
  let mlyCombined = new Mapillary.Viewer(
    "mapillaryjs", // div node ID

    // Replace this with your own client ID
    // To start using MapillaryJS, you need a create a Mapillary account
    // and register your application to obtain a Client ID.
    "QjI1NnU0aG5FZFZISE56U3R5aWN4Zzo3NTM1MjI5MmRjODZlMzc0",

    "TUmg28hw3TfXy9D_ZINqNA", // Mapillary image key

    // No loading cover, and disable sequence stepper
    {
      component: {
        cover: false,
        sequence: {
          visible: false,
        },
      },
    }
  );
  // </script>
  return (
    <div className="App">
      <div id="mapillaryjs" style="width: 100%; height: 500px;"></div>
    </div>
  );
}

export default App;
