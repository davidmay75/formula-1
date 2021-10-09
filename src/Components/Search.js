import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import ConstructorDriversList from "./ConstructorDriversList";
import SeasonStandingsList from "./SeasonStandingsList";
import { DropdownButton, Dropdown, Container, Form, Button } from "react-bootstrap";
import Form1 from "react-bootstrap/Form";

const Search = () => {
  //const [driverResults, setDriverResults] = useState([])
  const [constructorResults, setConstructorResults] = useState([]);
  const [constructorDriversResults, setConstructorDriversResults] = useState(
    []
  );
  const [year, setYear] = useState("2021");
  const [round, setRound] = useState(0);
  const [searchType, setSearchType] = "";

  // function getDriverByYear() {
  //     ///api/f1/2007/drivers.json driver format
  //     ///api/f1/2007.json RaceTable result
  //     axios.get('http://ergast.com/api/f1/' + year + "/drivers.json")
  //         .then(res => {

  //             const response = JSON.parse(res.request.response)
  //             const data = response.MRData

  //             if (data.hasOwnProperty('DriverTable')) {

  //                 setDriverResults(data.DriverTable.Drivers)

  //             }else{
  //                 console.log("NO DriverTable")
  //             }

  //         }).catch((e) => {
  //             console.log(e)
  //         })
  // }

  function getDriverStandings() {
    //params - year
    //standings after certain race - http://ergast.com/api/f1/' + year + /round "/driverStandings.json
    axios
      .get("http://ergast.com/api/f1/" + year + "/driverStandings.json/")
      .then((res) => {
        const response = JSON.parse(res.request.response);
        const data = response.MRData;

        if (data.hasOwnProperty("StandingsTable")) {
          let constructors = {};

          const standingsArray =
            data.StandingsTable.StandingsLists[0].DriverStandings;

          //for each standing - create Constructor object with array of drivers objects
          standingsArray.forEach((standing) => {
            const constructor = standing.Constructors[0];

            if (!constructors.hasOwnProperty(constructor.constructorId)) {
              //set key to constructorId
              let newKey = constructor.constructorId;
              //get driver object and add to array
              let driverArray = [];
              let driver = standing.Driver;
              //add driver standings to the driver object before pushing to array
              driver["position"] = standing.position;
              driver["points"] = standing.points;
              driver["wins"] = standing.wins;
              driverArray.push(standing.Driver);
              console.log("NEW DRIVER array");
              //add driver aray to constructor Object
              constructor["Drivers"] = driverArray;
              //add new Key Value to constructors object
              constructors[newKey] = constructor;
            } else {
              //If constructor found - add driver to its driverArray
              //add driver standings to the driver object before pushing to array
              let driver = standing.Driver;
              driver["position"] = standing.position;
              driver["points"] = standing.points;
              driver["wins"] = standing.wins;

              constructors[constructor.constructorId].Drivers.push(
                standing.Driver
              );
            }
          });

          let returnArray = Object.values(constructors);
          console.log("constructors object being set");
          console.log(returnArray);

          setConstructorDriversResults(returnArray);
        } else {
          console.log("No StandingsTable...");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getInfoByResults() {
    //params - year
    axios
      .get("http://ergast.com/api/f1/" + year + "/1/results.json")
      .then((res) => {
        const response = JSON.parse(res.request.response);
        const data = response.MRData;

        if (data.hasOwnProperty("RaceTable")) {
          const resultsArray = data.RaceTable.Races[0].Results;
          let constructors = {};

          resultsArray.forEach((result) => {
            const constructor = result.Constructor;

            if (!constructors.hasOwnProperty(constructor.constructorId)) {
              let newKey = constructor.constructorId;
              let driverArray = [];
              driverArray.push(result.Driver);
              constructor["Drivers"] = driverArray;
              constructors[newKey] = constructor;
            } else {
              constructors[constructor.constructorId].Drivers.push(
                result.Driver
              );
            }
          });

          let returnArray = Object.values(constructors);
          setConstructorDriversResults(returnArray);
        } else {
          console.log("No StandingsTable...");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getConstructorByYear() {
    axios
      .get("http://ergast.com/api/f1/" + year + "/constructors.json")
      .then((res) => {
        const response = JSON.parse(res.request.response);
        const data = response.MRData;

        if (data.hasOwnProperty("ConstructorTable")) {
          setConstructorResults(data.ConstructorTable.Constructors);
          console.log(data.ConstructorTable.Constructors);
        } else {
          console.log("NO ConstructorTable");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Container className="search text-light">
      <div className="row">
        <h1 className="text-primary">Search</h1>
      </div>

      <div className="row">
        <div className="col">
          <div className="row">
            <Form>
              <Form.Group>
                <Form.Label>Search Type</Form.Label>

                <Form.Control as="select">
                  <option value="constructorAndDrivers">
                    Driver Standings
                  </option>
                  <option value="circuits">Circuits - Coming soon</option>
                  <option value="raceResults">Race Results - Coming soon</option>
                  <option value="seasonResults">Season Results - Coming soon</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col searchParameters">
          <div className="row">
            <Form>
              <Form.Group className="mb-3" controlId="formYear">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={year}
                  min="1950"
                  max="2021"
                  step="1"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formYear">
                <Form.Label>Round</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={round}
                  min="0"
                  max="22"
                  step="1"
                  value={round}
                  onChange={(e) => setYear(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <Button onClick={getDriverStandings}>SEARCH</Button>
      </div>

      <div>
        <SeasonStandingsList constructorDrivers={constructorDriversResults} />
      </div>
    </Container>
  );
};

export default Search;
