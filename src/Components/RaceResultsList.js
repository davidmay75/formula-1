import { Table } from "react-bootstrap";
import RaceResultRow from "./RaceResultRow";

const RaceResultsList = ({ searchResults }) => {
  if (
    searchResults.length !== 0 &&
    searchResults[0].hasOwnProperty("position")
  ) {
    return (
      
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver</th>
              <th>Constructor</th>
              <th>Fastest Lap</th>
              <th>Finishing Time</th>
              <th>Status</th>
              <th>#</th>
              <th>Starting Position</th>
            </tr>
          </thead>

          <tbody>        
              {searchResults.map((raceResult) => (
                <RaceResultRow raceResult={raceResult} />
              ))}
          </tbody>

        </Table>
      
    );
  } else {
    return <div>Searching...</div>;
  }
};

export default RaceResultsList;
