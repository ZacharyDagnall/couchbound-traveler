import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import security from "./security.jpeg";
import Draggable from "react-draggable";

function Login({ api, setUser }) {
  const [disabled, setDisabled] = useState(false);
  const [shoePosition, setShoePosition] = useState({ x: 75, y: -2 });
  const [sockPosition, setSockPosition] = useState({ x: 75, y: -2 });
  const [binPosition, setBinPosition] = useState({ x: 275, y: -2 });
  const [errors, setErrors] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  useEffect(() => {
    console.log("bin", binPosition);
    console.log("shoe", shoePosition);
    console.log("sock", sockPosition);
  }, [binPosition, shoePosition, sockPosition]);

  function positionNearEnough(pos1, pos2) {
    return Math.abs(pos1.x - pos2.x) < 10 && Math.abs(pos1.y - pos2.y) < 10;
  }

  function handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;

    setUserInfo({ ...userInfo, [key]: val });
  }

  function checkDisabled() {
    return !positionNearEnough(shoePosition, binPosition);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!checkDisabled()) {
      fetch(`${api}/login`, {
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
        .catch((response) => {
          setUserInfo({ ...userInfo, password: "" });
          setErrors(response.errors);
        });
    }
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
              placeholder="Enter Username"
              value={userInfo.username}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type="password"
              name="password"
              className="field"
              placeholder="Enter Password"
              value={userInfo.password}
              onChange={handleChange}
            ></input>
            <br />
            <div id="please-remove-shoes">
              Please remove your shoes and place them in the bin
            </div>
            {positionNearEnough(sockPosition, shoePosition) ? null : (
              <Draggable
                defaultPosition={sockPosition}
                onDrag={(e, data) => setSockPosition({ x: data.x, y: data.y })}
              >
                <div className="box">
                  <div style={{ fontSize: "30px" }}>{"🧦"}</div>
                </div>
              </Draggable>
            )}
            <Draggable
              defaultPosition={shoePosition}
              onDrag={(e, data) => setShoePosition({ x: data.x, y: data.y })}
            >
              <div className="box">
                <div style={{ fontSize: "30px" }}>{"👞"}</div>
              </div>
            </Draggable>
            <Draggable
              defaultPosition={binPosition}
              onDrag={(e, data) => setBinPosition({ x: data.x, y: data.y })}
            >
              <div className="box">
                <div style={{ fontSize: "30px" }}>{"🗑️"}</div>
              </div>
            </Draggable>
            <br />
            <br />
            <br />
            <button
              type="submit"
              className={checkDisabled() ? "field disabled" : "field"}
            >
              Check In
            </button>
          </form>
          {errors.length !== 0 ? (
            <>
              {errors.map((er, i) => (
                <div key={i}>{er}</div>
              ))}
            </>
          ) : null}
          <Link id="signup-button" className="button field" to="/signup">
            First time flying? Signup for a passport!
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
