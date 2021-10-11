import SeasonStandingsList from "./SeasonStandingsList";
import CircuitsList from "./CircuitsList";

import { Container } from "react-bootstrap";

//this is where I should order driverStandings by constructor?

//I need to take queryType and have an object that correlates it to the list coompnent i need?

const Results = ({ searchResults, queryType }) => {
  //results - onject containing results to pass to the list component
  //resultsType - which compnent to render
  let Component = "";

  switch (queryType) {
    case "driverStandings":
      Component = SeasonStandingsList;
      break;
    case "circuits":
      Component = CircuitsList;
      break;
    default:
        Component = SeasonStandingsList;
  }

  if (Object.keys(searchResults).length > 0) {
    return (
      <Container className="results">
        <div>
          <Component searchResults={searchResults} />
        </div>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default Results;
