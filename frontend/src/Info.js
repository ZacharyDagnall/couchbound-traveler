import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import infopic from "./info.jpeg";
// import { window } from "react-window";

function Info() {
  const history = useHistory();
  return (
    <div
      style={{
        background: `url(${infopic})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="content content-button" onClick={() => history.push("/")}>
        Back
      </div>
      <br></br>
      <div id="the-info">
        <h1>Couchbound Traveler</h1>
        <h3>Travel the world from the comfort of your own home!</h3>
        <p>
          Welcome to Couchbound Traveler! After logging in, you'll be taken to
          the Airport, where you have the option to view your passport, edit
          your personal information, or go on a new trip around the world.{" "}
        </p>
        <p>
          Your passport keeps track of all the trips to various cities that you
          have made so far.
        </p>
        <p>
          When you bravely choose to take flight to a new virtual destination,
          you will be randomly taken to one of many cities around the world!
          Your task is to find out where in the world you are (or just explore
          around freely). To do so, you can navigate with the arrow buttons that
          show up onscreen, or you can press the space-bar to play through a
          sequence of images.
        </p>
        <small>
          Warning! If you are motion-sensitive, be careful with using the
          space-bar, as some image sequences may cause dizziness to some users.
        </small>
        <p>
          If you want to ask questions about the city or country that you are
          in, see if a local might be able to help you! Click on the "Chat with
          a Local" button to start a conversation.
        </p>
        <p>
          In many supported locations, the local may talk to you in their own
          language. (Don't worry, all of our wonderful locals understand some
          English.) If you wish to disable this feature, you can kindly request
          that the local speak to you in English only, by clicking on the little
          British flag inside of the chat box. To turn it back on again, just
          click on the little globe.
        </p>
        <p>
          If you feel you have a pretty good guess of where you are, click on
          the button to "Make a Guess". You can fill in as many or as few of the
          fields as you want to guess about, and then press "Check" to see which
          pasrts of your guess are correct. If you are wrong, see if you can
          find more clues or ask more questions to find out! If you want the
          information about your location revealed to you, click on the "Reveal"
          button in the guess box, and you'll see where in the world you are.
        </p>
        <p>
          When you are ready to leave, simply "Warp Back to the Airport". Now
          your passport will include the trip you just took, and you will be
          ready to take another journey!
        </p>
        <p>
          We live in an enormous world, with such a beautiful diversity of
          people, languages, and cultures. Learning about others, learning about
          ourselves, and learning about the world we all live in - these things
          go hand-in-hand!
        </p>
        <p>Have a blast and learn a lot, World Traveler! Bon Voyage!</p>
      </div>
    </div>
  );
}

export default Info;
