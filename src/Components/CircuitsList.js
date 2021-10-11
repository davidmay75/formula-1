import Circuit from "./Circuit";
import { Container } from "react-bootstrap";

const CircuitsList = ({ searchResults }) => {
  if (Object.keys(searchResults).length > 0 && searchResults[0].hasOwnProperty('circuitId')) {
    return (
      <Container className="results-list">
        <div className="row">
            <div className="col">

            
          {searchResults.map((circuit) => (
            <Circuit
              circuitId={circuit.circuitId}
              circuitName={circuit.circuitName}
              url={circuit.url}
              Location={circuit.Location}
              key = {circuit.circuitId}
            />
          ))}
          </div>
        </div>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default CircuitsList;
