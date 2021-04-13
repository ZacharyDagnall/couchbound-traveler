import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Chat from "./Chat";
import GuessForm from "./GuessForm";
import Map from "./Map";

function Travelling({ travelMode, api, user }) {
  const [modalShowing, setModalShowing] = useState(false);
  const [triggerA, setTriggerA] = useState(true);
  const [triggerB, setTriggerB] = useState(false);
  const [chatShowing, setChatShowing] = useState(false);
  const [address, setAddress] = useState({
    name: "Tokyo",
    state: "",
    country: "Japan",
    continent: "Asia",
    image_key: "IlFyfyTOvBxFrskJKyOZ6Q",
    flag_url:
      "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3342/18816/japan-flag__36690.1575327806.jpg?c=2",
    food: "You've never had sushi like we have here!",
    language: "We speak Japanese here. おはようございます！",
  });

  const [messages, setMessages] = useState([]);
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
          onClick={() => {
            setTriggerA(!triggerA);
            setTriggerB(!triggerB);
          }}
        >
          {" "}
          ↻
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
            address={address}
            messages={messages}
            setMessages={setMessages}
          />
        ) : null}
      </div>
      <div className="background">
        <Map
          api={api}
          address={address}
          setAddress={setAddress}
          user={user}
          triggerA={triggerA}
          triggerB={triggerB}
        />
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
