import ScheduleRace from "./ScheduleRace";

import { Container } from "react-bootstrap";

const ScheduleList = ({ searchResults }) => {
  if (
    Object.keys(searchResults).length > 0 &&
    searchResults[0].hasOwnProperty("Circuit")
  ) {
    return (
      <Container className="results-list">
        <div className="row">
          {searchResults.map((race) => (
            <ScheduleRace Race={race} key={race.date} />
          ))}
        </div>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default ScheduleList;
