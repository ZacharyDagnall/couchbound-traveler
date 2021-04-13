import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Trip from "./Trip";
import world from "./world.png";

function Passport({ user, api }) {
  const history = useHistory();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(`${api}/usertrips/${user.id}`)
      .then((r) => r.json())
      .then((tList) => setTrips(tList));
  }, []);

  return (
    <div
      style={{
        background: `url(${world})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>Here is your passport!</h1>
      {trips.map((trip, i) => {
        return <Trip key={i} trip={trip} api={api} setTrips={setTrips} />;
      })}
      <br></br>
      <div
        className="content content-button"
        key={trips.length + 1}
        onClick={() => history.push("/")}
      >
        Back to Terminal
      </div>
    </div>
  );
}

export default Passport;
