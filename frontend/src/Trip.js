import React from "react";
import Card from "react-bootstrap/Card";

function Trip({ country, flag, dateTravelled }) {
  return (
    <>
      <Card
        style={{
          margin: "15px 15px 15px 15px",
        }}
      >
        <Card.Header>{country}</Card.Header>
        <Card.Body style={{ justifyContent: "center", alignItems: "center" }}>
          <Card.Title>City, {country}</Card.Title>
          <Card.Text>{dateTravelled}</Card.Text>
          <img
            src={flag}
            alt={country + "'s Flag"}
            style={{ maxWidth: "70px" }}
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

        <Card.Footer></Card.Footer>
      </Card>
    </>
  );
}

export default Trip;
