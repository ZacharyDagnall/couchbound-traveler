import React from "react";
import Card from "react-bootstrap/Card";

function Trip({ trip }) {
  return (
    <>
      <Card
        style={{
          margin: "15px 15px 15px 15px",
        }}
      >
        <Card.Header>Country: {trip.country}</Card.Header>
        <Card.Body style={{ justifyContent: "center", alignItems: "center" }}>
          {/* have to change the way that these trips come in from the backend because right now we can't see the city name or flag etc etc, no info about city... change in models  */}
          {/* <Card.Title>trip.nameCity, {country}</Card.Title> */}
          <Card.Text>City: {trip.city}</Card.Text>
          <img
            src={trip.flag}
            alt={trip.country + "'s Flag"}
            style={{ maxWidth: "70px" }}
            className="flag"
          ></img>
          {/* <div
            style={{
              background: `url(${flag})`,
              height: "200px",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            variant="top"
              onError={(e) => {
                console.log("errored")(
                  (e.target.style = {
                    background: `url(${noimg})`,
                    height: "200px",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  })
                );
              }}
          /> */}
        </Card.Body>

        <Card.Footer>Date: {trip.date}</Card.Footer>
      </Card>
    </>
  );
}

export default Trip;
