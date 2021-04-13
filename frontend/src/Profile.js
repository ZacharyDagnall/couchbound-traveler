import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import deskpic from "./desk.jpeg";

function Profile({ user, api, setUser }) {
  const [usernameModalShowing, setUsernameModalShowing] = useState(false);
  const [passwordModalShowing, setPasswordModalShowing] = useState(false);
  const [newsername, setNewsername] = useState(user.username);
  const [UNsuccess, setUNsuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [PWsuccess, setPWsuccess] = useState(false);
  const history = useHistory();

  function handleUsernameChange(e) {
    e.preventDefault();
    fetch(`${api}/username/${user.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ username: newsername }),
    })
      .then((r) => r.json())
      .then((updatedUser) => {
        setUNsuccess(true);
        setUser(updatedUser);
      });
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    fetch(`${api}/password/${user.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ user, oldPassword, newPassword }),
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
        setPWsuccess(true);
        setErrors([]);
      })
      .catch((response) => {
        setPWsuccess(false);
        setErrors(response.errors);
      });
  }

  function UNclicked() {
    setUsernameModalShowing(true);
    setPasswordModalShowing(false);
  }

  function closeUNbox() {
    setUNsuccess(false);
    setUsernameModalShowing(false);
  }

  function PWclicked() {
    setPasswordModalShowing(true);
    setUsernameModalShowing(false);
  }

  return (
    <div
      style={{
        background: `url(${deskpic})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="content content-button" onClick={UNclicked}>
        Change Username
      </div>
      <div className="content content-button" onClick={PWclicked}>
        Change Password
      </div>
      <div className="content content-button" onClick={() => history.push("/")}>
        Back to Terminal
      </div>

      <div className={usernameModalShowing ? "modal-bg bg-active" : "modal-bg"}>
        <div className="modal">
          <form onSubmit={handleUsernameChange}>
            <input
              value={newsername}
              onChange={(e) => setNewsername(e.target.value)}
            ></input>
            <button type="submit">u p d a t e</button>
          </form>
          {UNsuccess ? <div style={{ color: "green" }}>success!</div> : null}
          <span className="close-mode-box" onClick={closeUNbox}>
            x
          </span>
        </div>
      </div>

      <div className={passwordModalShowing ? "modal-bg bg-active" : "modal-bg"}>
        <div className="modal">
          <form onSubmit={handlePasswordChange}>
            Password Change Form
            <br />
            <input
              type="password"
              name="oldPassword"
              placeholder="Enter current password"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            ></input>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter a new password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            ></input>
            <br />
            <button type="submit">Change your Credentials!</button>
          </form>
          {PWsuccess ? <div style={{ color: "green" }}>success!</div> : null}
          {errors.length !== 0 ? (
            <>
              {errors.map((er, i) => (
                <div key={i} style={{ color: "red" }}>
                  {er}
                </div>
              ))}
            </>
          ) : null}
          <span
            className="close-mode-box"
            onClick={(e) => setPasswordModalShowing(false)}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
