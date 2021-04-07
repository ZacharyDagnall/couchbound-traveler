import React from "react";
import { useHistory } from "react-router-dom";
import Trip from "./Trip";
import world from "./world.png";
import peru from "./peru.png";
import cuba from "./cuba.jpeg";

function Passport() {
  const history = useHistory();
  const temptripsbeforefetch = [
    {
      id: 0,
      country: "peru",
      flag: peru,
      dateTravelled: "Tuesday March 8th 2021",
    },
    {
      id: 1,
      country: "cuba",
      flag: cuba,
      dateTravelled: "Saturday April 9th 2021",
    },
  ];

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
      {temptripsbeforefetch.map((trip) => {
        return (
          <Trip
            key={trip.id}
            country={trip.country}
            flag={trip.flag}
            dateTravelled={trip.dateTravelled}
          />
        );
      })}
      <br></br>
      <div className="content content-button" onClick={() => history.push("/")}>
        Exit Passport
      </div>
    </div>
  );
}

export default Passport;
