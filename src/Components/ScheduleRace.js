import { Card, Row, Button, Accordion, Container } from "react-bootstrap";
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
            <Row>Round {Race.round}</Row>

            <Row>
              {formattedDate + " at "}
              {Race.time}
            </Row>
          </Container>
        </Card.Body>

        {/* Circuit Information accordian*/}
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
        </Accordion>
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
