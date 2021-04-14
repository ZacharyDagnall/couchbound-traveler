import React, { useState } from "react";

function GuessForm({ address, modalShowing, setModalShowing }) {
  const [guessAddress, setGuessAddress] = useState({
    city: { name: "", status: "" },
    state: { name: "", status: "" },
    country: { name: "", status: "" },
    continent: { name: "", status: "" },
  });
  const [revealed, setRevealed] = useState(false);

  function continentEqual(guess, correct) {
    if (correct === "australia" || correct === "oceania") {
      return guess === "australia" || guess === "oceania";
    } else {
      return guess === correct;
    }
  }

  function countryEqual(guess, correct) {
    if (correct === "people's republic of china") {
      return guess === "china" || guess === correct;
    } else if (correct === "united states of america") {
      return (
        guess === "united states" ||
        guess === "us" ||
        guess === "usa" ||
        guess === "u.s." ||
        guess === "u.s.a." ||
        guess === correct
      );
    } else if (correct === "republic of uganda") {
      return guess === "uganda" || guess === correct;
    } else if (correct === "republic of côte d'ivoire") {
      return (
        guess === "côte d'ivoire" ||
        guess === "cote d'ivoire" ||
        guess === "cote d ivoire" ||
        guess === "côte ivoire" ||
        guess === "cote ivoire" ||
        guess === "cote divoire" ||
        guess === "ivory coast" ||
        guess === "republic of the ivory coast" ||
        guess === correct
      );
    } else {
      return guess === correct;
    }
  }

  function cityEqual(guess, correct) {
    if (correct === "macao") {
      return guess === "macau" || guess === "macow" || guess === correct;
    } else if (correct === "bengaluru") {
      return guess === "bangalore" || guess === correct;
    } else if (correct === "zürich") {
      return guess === "zurich" || guess === correct;
    } else if (correct === "são paulo") {
      return (
        guess === "sao paulo" || guess === "sao paolo" || guess === correct
      );
    } else {
      return guess === correct;
    }
  }

  function stateEqual(guess, correct) {
    if (correct === "macao") {
      return guess === "macau" || guess === "macow" || guess === correct;
    } else if (correct === "île-de-france") {
      return (
        guess === "ile-de-france" ||
        guess === "ile de france" ||
        guess === "île de france" ||
        guess === correct
      );
    } else if (correct === "zürich") {
      return guess === "zurich" || guess === correct;
    } else if (correct === "são paulo") {
      return (
        guess === "sao paulo" || guess === "sao paolo" || guess === correct
      );
    } else {
      return guess === correct;
    }
  }

  function handleLocationGuess(e) {
    e.preventDefault();

    if (
      cityEqual(
        guessAddress.city.name.toLocaleLowerCase(),
        address.name.toLocaleLowerCase()
      )
    ) {
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
    if (
      stateEqual(
        guessAddress.state.name.toLocaleLowerCase(),
        address.state.toLocaleLowerCase()
      )
    ) {
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
    if (
      countryEqual(
        guessAddress.country.name.toLocaleLowerCase(),
        address.country.toLocaleLowerCase()
      )
    ) {
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
    if (
      continentEqual(
        guessAddress.continent.name.toLocaleLowerCase(),
        address.continent.toLocaleLowerCase()
      )
    ) {
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
            {guessAddress.continent.status && guessAddress.continent.name ? (
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
            {revealed ? <div>{address.continent}</div> : null}
          </>
        ) : (
          <input
            id="continent"
            type="text"
            placeholder="No Continent information available"
            readOnly
            value={guessAddress.continent.name}
            style={{ color: "white", backgroundColor: "lightgrey" }}
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
            {guessAddress.country.status && guessAddress.country.name ? (
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
            {revealed ? <div>{address.country}</div> : null}
          </>
        ) : (
          <input
            id="country"
            type="text"
            placeholder="No Country information available"
            readOnly
            value={guessAddress.country.name}
            style={{ color: "white", backgroundColor: "lightgrey" }}
          ></input>
        )}

        {address.state ? (
          <>
            <input
              id="state"
              type="text"
              placeholder="State/Region"
              value={guessAddress.state.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.state.status && guessAddress.state.name ? (
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
            {revealed ? <div>{address.state}</div> : null}
          </>
        ) : (
          <input
            id="state"
            type="text"
            placeholder="No State/Region information available"
            readOnly
            value={guessAddress.state.name}
            style={{ color: "white", backgroundColor: "lightgrey" }}
          ></input>
        )}

        {address.name ? (
          <>
            <input
              id="city"
              type="text"
              placeholder="City"
              value={guessAddress.city.name}
              onChange={handleFormChange}
            ></input>
            {guessAddress.city.status && guessAddress.city.name ? (
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
            {revealed ? <div>{address.name}</div> : null}
          </>
        ) : (
          <input
            id="city"
            type="text"
            placeholder="No City information available"
            readOnly
            value={guessAddress.city.name}
            style={{ color: "white", backgroundColor: "lightgrey" }}
          ></input>
        )}
        <span>
          <button type="submit">Check!</button>

          <button onClick={(e) => setRevealed(!revealed)}>
            <small>
              <em>{revealed ? "Hide" : "Reveal"}</em>
            </small>
          </button>
        </span>
        <span
          className="close-mode-box"
          onClick={(e) => {
            setRevealed(false);
            setModalShowing(false);
          }}
          style={{ color: "yellow", backgroundColor: "black" }}
        >
          ―
        </span>
      </form>
    </div>
  );
}

export default GuessForm;
