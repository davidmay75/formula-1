import { Card, Row, Button, Accordion, Container, Col } from "react-bootstrap";
import axios from "axios";

import Circuit from "./Circuit";
import RaceResultsList from "./RaceResultsList";
import { useState } from "react";

const ScheduleRace = ({ Race }) => {
  const [raceResults, setRaceResults] = useState([]);

  let formattedDate = new Date(Race.date);
  formattedDate = formattedDate.toLocaleDateString();

  function getRaceResults() {
    //params - year
    axios
      .get(
        "https://ergast.com/api/f1/" +
          Race.season +
          "/" +
          Race.round +
          "/results.json"
      )
      .then((res) => {
        const response = JSON.parse(res.request.response);
        const data = response.MRData;

        if (data.hasOwnProperty("RaceTable")) {
          setRaceResults(data.RaceTable.Races[0].Results);
        } else {
          console.log("No RaceTable...");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Container className="scheduleRace">
      <Card bg="primary">
        <Card.Header as="h4">
          <a href={Race.url}>{Race.raceName}</a>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                {" "}
                <strong>
                  {" "}
                  <a href={Race.Circuit.url}>{Race.Circuit.circuitName}</a>
                </strong>
              </Col>{" "}
            </Row>

            <Row>
              <Col>
                {Race.Circuit.Location.locality},{" "}
                {Race.Circuit.Location.country}
              </Col>{" "}
            </Row>


            <Row>
              <a
                href={
                  "http://maps.google.com/maps?t=k&z=20&q=" +
                  Race.Circuit.Location.lat +
                  "," +
                  Race.Circuit.Location.long
                }
                className="underline"
                // href={"https://www.google.com/maps/@"+ Circuit.Location.lat +", " + Circuit.Location.long + ",9z"} the zoom is too far in??
              >
                {Race.Circuit.Location.lat}, {Race.Circuit.Location.long}
              </a>
            </Row>
            <Row>
              <Col>
                {formattedDate + " at "}
                {Race.time}
              </Col>
            </Row>

            
           

            <Row>
              <Col> Round {Race.round} </Col>{" "}
            </Row>
          </Container>
        </Card.Body>

        {/* Circuit Information accordian
        <Accordion>
          <Card bg="dark">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="secondary" eventKey="0">
                Circuit Information
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Circuit Circuit={Race.Circuit} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>*/}
        {/* Race Results accordian*/}
        <Accordion>
          <Card bg="dark">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="secondary"
                eventKey="1"
                onClick={getRaceResults}
              >
                Race Results
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <RaceResultsList searchResults={raceResults}></RaceResultsList>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>
    </Container>
  );
};

export default ScheduleRace;
