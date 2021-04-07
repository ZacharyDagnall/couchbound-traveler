import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import airportpic from "./airport.jpg";

function Airport({ setTravelMode }) {
  const [modalShowing, setModalShowing] = useState(false);
  const history = useHistory();

  function letsgo() {
    setModalShowing(true);
  }

  function viewPassport() {
    history.push("/passport");
  }

  function editProfile() {
    history.push("/profile");
  }

  function handleModeSelect(e) {
    setTravelMode(e.target.innerText);
    history.push("/travelling");
  }

  return (
    <div
      style={{
        background: `url(${airportpic})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="content">Welcome {"Bingo Bongo"} !</div>
      <br></br>
      <div className="content" onClick={letsgo}>
        Take a new trip
      </div>
      <br></br>
      <div className="content" onClick={viewPassport}>
        View Passport
      </div>
      <br></br>
      <div className="content" onClick={editProfile}>
        Edit Profile
      </div>

      <div className={modalShowing ? "modal-bg bg-active" : "modal-bg"}>
        <div className="modal">
          Choose your mode!
          <div className="mode-button" onClick={handleModeSelect}>
            Mode 1
          </div>
          <div className="mode-button" onClick={handleModeSelect}>
            Mode 2
          </div>
          <div className="mode-button" onClick={handleModeSelect}>
            Mode 3
          </div>
          <span
            className="close-mode-box"
            onClick={(e) => setModalShowing(false)}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
}

export default Airport;
