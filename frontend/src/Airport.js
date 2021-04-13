import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import airportpic from "./airport.jpg";

function Airport({ setTravelMode, setUser, user }) {
  const [modalShowing, setModalShowing] = useState(false);
  const history = useHistory();

  function handleModeSelect(e) {
    setTravelMode(e.target.innerText);
    history.push("/travelling");
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    history.push("/login");
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
      <div className="content">Nice to see ya again, {user.username} !</div>
      <br></br>
      <div
        className="content content-button"
        onClick={() => history.push("/travelling")} //setModalShowing(true)
      >
        Take a new trip
      </div>
      <br></br>
      <div
        className="content content-button"
        onClick={() => history.push("/passport")}
      >
        View Passport
      </div>
      <br></br>
      <div
        className="content content-button"
        onClick={() => history.push("/profile")}
      >
        Edit Profile
      </div>
      <br></br>
      <div className="content content-button" onClick={logout}>
        Logout
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
