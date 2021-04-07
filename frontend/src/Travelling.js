import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Chat from "./Chat";
import Map from "./Map";

function Travelling({ travelMode }) {
  const [modalShowing, setModalShowing] = useState(false);
  const [chatShowing, setChatShowing] = useState(false);
  const [messages, setMessages] = useState([
    { who: "user", text: "hey.." },
    { who: "bot", text: "welcome to the world" },
  ]);
  const history = useHistory();
  console.log(travelMode);

  return (
    <div id="wrapper">
      <div>
        {/* the line below gives an issue when you refresh the page, because you got here without props, because state reset... */}
        <h3 className="content">{travelMode}!</h3>
        <div className="content">
          {travelMode === "Tourism"
            ? "Roam around freely!"
            : travelMode === "Find Yourself"
            ? "Guess your location!"
            : "Find your way to a GIVEN-PLACE"}
        </div>
        <br></br>
        <div
          className="content content-button"
          onClick={() => history.push("/")}
        >
          Warp Back to Airport
        </div>
        {travelMode === "Find Yourself" ? (
          <div
            className="content content-button"
            onClick={() => setModalShowing(true)}
          >
            Make a guess!
          </div>
        ) : null}
        <div
          className="content content-button"
          onClick={() => setChatShowing(true)}
        >
          Chat with a local
        </div>
        {chatShowing ? (
          <Chat
            setChatShowing={setChatShowing}
            messages={messages}
            setMessages={setMessages}
          />
        ) : null}
      </div>
      <div className="background">
        <Map />
      </div>

      {travelMode === "Find Yourself" ? (
        <div className={modalShowing ? "modal-bg bg-active" : "modal-bg"}>
          <div className="modal">
            <input id="Continent" type="text" placeholder="Continent"></input>
            <input id="Country" type="text" placeholder="Country"></input>
            <input id="State" type="text" placeholder="State"></input>
            <input id="City" type="text" placeholder="City"></input>
            <button>Check!</button>
            <span
              className="close-mode-box"
              onClick={(e) => setModalShowing(false)}
            >
              nvm lol
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Travelling;
