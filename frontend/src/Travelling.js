import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Chat from "./Chat";
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
  const [guessAddress, setGuessAddress] = useState({
    city: { name: "", status: "" },
    state: { name: "", status: "" },
    country: { name: "", status: "" },
    continent: { name: "", status: "" },
  });
  console.log(guessAddress);

  const [messages, setMessages] = useState([
    { who: "user", text: "hey.." },
    { who: "bot", text: "welcome to the world" },
  ]);
  const history = useHistory();
  console.log(travelMode);

  function handleLocationGuess(e) {
    e.preventDefault();
    if (guessAddress.city.name === address.city) {
      guessAddress.city.status = "You guessed it!";
    } else {
      guessAddress.city.status = "Not quite, try again!";
    }
    if (guessAddress.state.name === address.state) {
      guessAddress.state.status = "You guessed it!";
    } else {
      guessAddress.state.status = "Not quite, try again!";
    }
    if (guessAddress.country.name === address.country) {
      guessAddress.country.status = "You guessed it!";
    } else {
      guessAddress.country.status = "Not quite, try again!";
    }
    if (guessAddress.continent.name === address.continent) {
      guessAddress.continent.status = "You guessed it!";
    } else {
      guessAddress.continent.status = "Not quite, try again!";
    }
    console.log("great guess!");
  }

  function handleFormChange(e) {
    const key = e.target.id;
    const val = e.target.value;

    setGuessAddress((guessAddress) => ({
      ...guessAddress,
      [key]: { name: val, status: "" },
    }));
  }

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
        <div className={modalShowing ? "modal-bg bg-active" : "modal-bg"}>
          <form className="modal" onSubmit={handleLocationGuess}>
            <input
              id="continent"
              type="text"
              placeholder="Continent"
              value={guessAddress.continent.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.continent.status ? (
              <small>{guessAddress.continent.status}</small>
            ) : null}
            <input
              id="country"
              type="text"
              placeholder="Country"
              value={guessAddress.country.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.country.status ? (
              <small>{guessAddress.country.status}</small>
            ) : null}
            <input
              id="state"
              type="text"
              placeholder="State/Locality"
              value={guessAddress.state.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.state.status ? (
              <small>{guessAddress.state.status}</small>
            ) : null}
            <input
              id="city"
              type="text"
              placeholder="City/Sublocality"
              value={guessAddress.city.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.city.status ? (
              <small>{guessAddress.city.status}</small>
            ) : null}
            <button type="submit">Check!</button>
            <span
              className="close-mode-box"
              onClick={(e) => setModalShowing(false)}
            >
              nvm lol
            </span>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Travelling;
