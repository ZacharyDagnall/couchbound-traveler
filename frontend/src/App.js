import "./App.css";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Airport from "./Airport";
import Passport from "./Passport";
import Profile from "./Profile";
import Travelling from "./Travelling";

function App() {
  const [travelMode, setTravelMode] = useState("");
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Airport setTravelMode={setTravelMode} />
        </Route>
        <Route exact path="/passport">
          <Passport />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/travelling">
          <Travelling travelMode={travelMode} />
        </Route>
        <Route exact path="/*">
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
