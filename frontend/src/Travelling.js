import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Chat from "./Chat";
import GuessForm from "./GuessForm";
import Map from "./Map";

function Travelling({ travelMode, api }) {
  const [modalShowing, setModalShowing] = useState(false);
  const [chatShowing, setChatShowing] = useState(false);
  const [address, setAddress] = useState({
    city: "",
    state: "",
    country: "",
    continent: "",
  });

  const [messages, setMessages] = useState([
    { who: "user", text: "hey.." },
    { who: "bot", text: "welcome to the world" },
  ]);
  const history = useHistory();
  console.log(travelMode);

  return (
    <div id="wrapper">
      <div>
        {/* the line below gives an issue when you refresh the page, because you got
        here without props, because state reset... */}
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
        <Map api={api} address={address} setAddress={setAddress} />
      </div>

      {travelMode === "Find Yourself" ? (
        <GuessForm
          address={address}
          modalShowing={modalShowing}
          setModalShowing={setModalShowing}
        />
      ) : null}
    </div>
  );
}

export default Travelling;
