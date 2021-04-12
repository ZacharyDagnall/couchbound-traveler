import React, { useState } from "react";

function GuessForm({ address, modalShowing, setModalShowing }) {
  const [guessAddress, setGuessAddress] = useState({
    city: { name: "", status: "" },
    state: { name: "", status: "" },
    country: { name: "", status: "" },
    continent: { name: "", status: "" },
  });

  // function continentEqual(guess, correct) {
  //   if (correct === "asia" || correct === "europe") {
  //     return guess === correct || guess === "eurasia";
  //   } else if (correct === "australia" || correct === "oceania") {
  //     return guess === "australia" || guess === "oceania";
  //   } else {
  //     return guess === correct;
  //   }
  // }

  function handleLocationGuess(e) {
    e.preventDefault();

    if (guessAddress.city.name === address.city) {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        city: { name: guessAddress.city.name, status: "You guessed it!" },
      }));
    } else {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        city: { name: guessAddress.city.name, status: "Not quite, try again!" },
      }));
    }
    if (guessAddress.state.name === address.state) {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        state: { name: guessAddress.state.name, status: "You guessed it!" },
      }));
    } else {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        state: {
          name: guessAddress.state.name,
          status: "Not quite, try again!",
        },
      }));
    }
    if (guessAddress.country.name === address.country) {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        country: { name: guessAddress.country.name, status: "You guessed it!" },
      }));
    } else {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        country: {
          name: guessAddress.country.name,
          status: "Not quite, try again!",
        },
      }));
    }
    if (guessAddress.continent.name === address.continent) {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        continent: {
          name: guessAddress.continent.name,
          status: "You guessed it!",
        },
      }));
    } else {
      setGuessAddress((guessAddress) => ({
        ...guessAddress,
        continent: {
          name: guessAddress.continent.name,
          status: "Not quite, try again!",
        },
      }));
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
    <div className={modalShowing ? "modal-bg bg-active" : "modal-bg"}>
      <form className="modal" onSubmit={handleLocationGuess}>
        {address.continent ? (
          <>
            <input
              id="continent"
              type="text"
              placeholder="Continent"
              value={guessAddress.continent.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.continent.status ? (
              <small
                style={
                  guessAddress.continent.status === "You guessed it!"
                    ? { color: "green", backgroundColor: "white" }
                    : { color: "red", backgroundColor: "white" }
                }
              >
                {guessAddress.continent.status}
              </small>
            ) : null}
          </>
        ) : (
          <input
            id="continent"
            type="text"
            placeholder="No Continent information available"
            value={guessAddress.continent.name}
            style={{ color: "white", backgroundColor: "grey" }}
          ></input>
        )}

        {address.country ? (
          <>
            <input
              id="country"
              type="text"
              placeholder="Country"
              value={guessAddress.country.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.country.status ? (
              <small
                style={
                  guessAddress.country.status === "You guessed it!"
                    ? { color: "green", backgroundColor: "white" }
                    : { color: "red", backgroundColor: "white" }
                }
              >
                {guessAddress.country.status}
              </small>
            ) : null}
          </>
        ) : (
          <input
            id="country"
            type="text"
            placeholder="No Country information available"
            value={guessAddress.country.name}
            style={{ color: "white", backgroundColor: "grey" }}
          ></input>
        )}

        {address.state ? (
          <>
            <input
              id="state"
              type="text"
              placeholder="State/Locality"
              value={guessAddress.state.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.state.status ? (
              <small
                style={
                  guessAddress.state.status === "You guessed it!"
                    ? { color: "green", backgroundColor: "white" }
                    : { color: "red", backgroundColor: "white" }
                }
              >
                {guessAddress.state.status}
              </small>
            ) : null}
          </>
        ) : (
          <input
            id="state"
            type="text"
            placeholder="No State/Locality information available"
            value={guessAddress.state.name}
            style={{ color: "white", backgroundColor: "grey" }}
          ></input>
        )}

        {address.city ? (
          <>
            <input
              id="city"
              type="text"
              placeholder="City"
              value={guessAddress.city.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.city.status ? (
              <small
                style={
                  guessAddress.city.status === "You guessed it!"
                    ? { color: "green", backgroundColor: "white" }
                    : { color: "red", backgroundColor: "white" }
                }
              >
                {guessAddress.city.status}
              </small>
            ) : null}
          </>
        ) : (
          <input
            id="city"
            type="text"
            placeholder="No City information available"
            value={guessAddress.city.name}
            style={{ color: "white", backgroundColor: "lightgrey" }}
          ></input>
        )}

        <button type="submit">Check!</button>
        <span
          className="close-mode-box"
          onClick={(e) => setModalShowing(false)}
          style={{ color: "yellow", backgroundColor: "black" }}
        >
          ―
        </span>
      </form>
    </div>
  );
}

export default GuessForm;
