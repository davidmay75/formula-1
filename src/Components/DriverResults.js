import axios from "axios";
import { useState, useEffect } from "react";
//import "./CSS/driver.css";
import { Card, Button } from "react-bootstrap";

const DriverResults = ({
  driverId,
  code,
  url,
  givenName,
  familyName,
  dateOfBirth,
  nationality,
  img,
  points,
  position,
  wins,
}) => {
  return (
    <div className="driver">
      <Card bg="primary">
        <Card.Header as="h4" style={{ width: "14rem" }}>
          <a href={url}>
            {givenName} {familyName}
          </a>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <div className="container">
              <div className="row">points: {points}</div>
              <div className="row">position: {position}</div>
              <div className="row">wins: {wins}</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DriverResults;
