import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import airportpic from "./airport.jpg";

function Airport({ setTravelMode }) {
  const [modalShowing, setModalShowing] = useState(false);

  function handleModeSelect(e) {
    setTravelMode(e.target.innerText);
    history.push("/travelling");
  }

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
      <div className="content content-button" onClick={letsgo}>
        Take a new trip
      </div>
      <br></br>
      <div className="content content-button" onClick={viewPassport}>
        View Passport
      </div>
      <br></br>
      <div className="content content-button" onClick={editProfile}>
        Edit Profile
      </div>

      <div className={modalShowing ? "modal-bg bg-active" : "modal-bg"}>
        <div className="modal">
          Choose your mode!
          <div className="mode-button" onClick={handleModeSelect}>
            Find Yourself
          </div>
          <div className="mode-button" onClick={handleModeSelect}>
            Mission Mode
          </div>
          <div className="mode-button" onClick={handleModeSelect}>
            Tourism
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
