import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Airport from "./Airport";
import Passport from "./Passport";
import Profile from "./Profile";
import Travelling from "./Travelling";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const API = "http://localhost:3000";
  const [user, setUser] = useState(null);
  const [travelMode, setTravelMode] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${API}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          setUser(user);
        });
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <>
      {user ? (
        <Switch>
          <Route exact path="/">
            <Airport
              setTravelMode={setTravelMode}
              setUser={setUser}
              user={user}
            />
          </Route>
          <Route exact path="/passport">
            <Passport user={user} api={API} />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} api={API} setUser={setUser} />
          </Route>
          <Route exact path="/travelling">
            <Travelling travelMode={travelMode} api={API} user={user} />
          </Route>
          <Route exact path="/*">
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          </Route>
        </Switch>
      ) : (
        <div id="welcome-holder">
          <span id="welcome-frame">
            <br></br>
            <Switch>
              <Route exact path="/login">
                <Login api={API} setUser={setUser} />
              </Route>

              <Route path="/signup">
                <Signup api={API} setUser={setUser} />
              </Route>
            </Switch>
          </span>
        </div>
      )}
    </>
  );
}

export default App;
