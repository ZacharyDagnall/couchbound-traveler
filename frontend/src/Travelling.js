import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Chat from "./Chat";
import GuessForm from "./GuessForm";
import Map from "./Map";

function Travelling({ travelMode, api, user }) {
  const [modalShowing, setModalShowing] = useState(false);
  const [chatShowing, setChatShowing] = useState(false);
  const [englishOnly, setEnglishOnly] = useState(false);
  const [imgKey, setImgKey] = useState("KGHbNmfZQ8z9BcWb1a_3lg"); //defaults to Macao, arbitrarily in case any problem with fetch
  const [address, setAddress] = useState({
    name: "Macao",
    state: "Macao",
    country: "People's Republic of China",
    continent: "Asia",
    image_key: "KGHbNmfZQ8z9BcWb1a_3lg",
    flag_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/1200px-Flag_of_Macau.svg.png",
    flag_emoji: "🇲🇴",
    food: "Oh, I love a good Portguese Egg Tart! 吃飯囉！",
    language:
      "Though some people here speak Portuguese, my family and I speak in Chinese!",
    religion:
      "Many people here are Buddhists, and there are a few Catholics, but I don't practice any religion.",
  });

  useEffect(() => {
    fetch(`${api}/city_info/${user.id}`)
      .then((r) => r.json())
      .then((city) => {
        setAddress(city);
        setImgKey(city.image_key);
      });
  }, []);

  const [messages, setMessages] = useState([]);
  const history = useHistory();

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
            address={address}
            messages={messages}
            setMessages={setMessages}
            englishOnly={englishOnly}
            setEnglishOnly={setEnglishOnly}
          />
        ) : null}
      </div>
      <div className="background">
        <Map imgKey={imgKey} />
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
