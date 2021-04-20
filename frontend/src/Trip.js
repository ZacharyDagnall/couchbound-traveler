import React from "react";
import Card from "react-bootstrap/Card";

function Trip({ trip, api, setTrips }) {
  function deleteTrip(e) {
    fetch(`${api}/trips/${trip.id}`, {
      method: "DELETE",
    }).then(() => {
      setTrips((trips) => {
        return trips.filter((t) => t.id !== trip.id);
      });
    });
  }
  return (
    <>
      <Card
        style={{
          margin: "15px 15px 15px 15px",
        }}
      >
        <span className="delete-button" onClick={deleteTrip}>
          {" "}
          X
        </span>
        <div className="card-wrapper">
          <Card.Header>Country: {trip.country} </Card.Header>
          <Card.Body style={{ justifyContent: "center", alignItems: "center" }}>
            {/* <Card.Title>trip.nameCity, {country}</Card.Title> */}
            {trip.city ? (
              <Card.Text>City: {trip.city}</Card.Text>
            ) : trip.state ? (
              <Card.Text>State: {trip.state}</Card.Text>
            ) : null}
            <img
              src={trip.flag}
              alt={trip.country + "'s Flag"}
              style={{ maxWidth: "70px" }}
              className="flag"
            ></img>
          </Card.Body>

          <Card.Footer>Date: {trip.date}</Card.Footer>
        </div>
      </Card>
    </>
  );
}

export default Trip;
