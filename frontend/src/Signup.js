import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import security from "./security.jpeg";

function Signup({ api, setUser }) {
  const [errors, setErrors] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  function handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;

    setUserInfo({ ...userInfo, [key]: val });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${api}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => {
        return r.json().then((data) => {
          if (r.ok) {
            return data;
          } else {
            throw data;
          }
        });
      })
      .then((response) => {
        const { user, token } = response;
        localStorage.setItem("token", token);
        setUser(user);
        history.push("/home");
      })
      .catch((response) => setErrors(response.errors));
  }

  return (
    <div
      className="checkin"
      style={{
        background: `url(${security})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div id="welcome-holder">
        <span id="welcome-frame">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              className="field"
              placeholder="Pick a Username!"
              value={userInfo.username}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type="password"
              name="password"
              className="field"
              placeholder="Choose a Password!"
              value={userInfo.password}
              onChange={handleChange}
            ></input>
            <br />
            <button type="submit" className="field">
              Signup!
            </button>
          </form>
          {errors.length !== 0 ? (
            <>
              {errors.map((er, i) => (
                <div key={i}>{er}</div>
              ))}
            </>
          ) : null}
          <button onClick={() => history.push("/login")} className="field">
            Back to Check In...
          </button>
        </span>
      </div>
    </div>
  );
}

export default Signup;
