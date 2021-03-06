// import { Card, Container } from "react-bootstrap";

const Circuit = ({ raceResult }) => {

  return (
    <tr>
      <td> {raceResult.position} </td>
      <td> {raceResult.Driver.givenName} {raceResult.Driver.familyName} </td>
      <td> {raceResult.Constructor.name} </td>

      <td> {raceResult.hasOwnProperty("FastestLap")  ? raceResult.FastestLap.Time.time : "No data"} </td>

      <td> {raceResult.hasOwnProperty("Time")  ? raceResult.Time.time : "No data"} </td>
      <td> {raceResult.status} </td>

      <td> {raceResult.number} </td>

      {/* This returns 0 if started from pit lane */}
      <td> {raceResult.hasOwnProperty("grid") && raceResult.grid != 0  ? raceResult.grid  : "Pit"} </td>

    </tr>
  );
};

export default Circuit;
