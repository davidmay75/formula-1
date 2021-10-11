import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const useSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [queryType, setQueryType] = useState("driverStandings");

  const [year, setYear] = useState("2021");
  //const [round, setRound] = useState(0);
  const [groupByTeam, setGroupByTeam] = useState(true);

  const options = [
    {
      label: "Driver Standings",
      value: "driverStandings",
    },
    {
      label: "Circuits",
      value: "circuits",
    },
    {
      label: "Race Schedule",
      value: "schedule",//this is a blank query type for api - just need year
    },
  ];

  function search() {

    switch (queryType) {
      case "driverStandings":
        getDriverStandings();
        break;
      case "circuits":
        getCircuits();
        break;
      case "schedule":
        getSchedule();
        break;
      default:
        console.log("QueryType not valid ", { queryType });
    }
  }

  function generateUrl() {
    //http://ergast.com/api/f1/' year / round / queryType.json
    //schedules has no queryType
  }

  function getSchedule() {
    //params - year
    axios
      .get("https://ergast.com/api/f1/" + year + ".json")
      .then((res) => {
        const response = JSON.parse(res.request.response);
        const data = response.MRData;

        console.log("Data", data.RaceTable.Races);

        if (data.hasOwnProperty("RaceTable")) {
          setSearchResults(data.RaceTable.Races);
        } else {
          console.log("No RaceTable...");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getCircuits() {
    //params - year
    axios
      .get("https://ergast.com/api/f1/" + year + "/circuits.json")
      .then((res) => {
        const response = JSON.parse(res.request.response);
        const data = response.MRData;

        console.log("Data", data.CircuitTable.Circuits);

        if (data.hasOwnProperty("CircuitTable")) {
          setSearchResults(data.CircuitTable.Circuits);
        } else {
          console.log("No CircuitTable...");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getDriverStandings() {
    if (groupByTeam) {
      //do what we currently have
    } else {
      //only show drivers
    }
    //params - year
    //standings after certain race - http://ergast.com/api/f1/' + year + /round "/driverStandings.json
    axios
      .get("https://ergast.com/api/f1/" + year + "/driverStandings.json")
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

          // set results to the array of objects created for constructor and drivers
          setSearchResults(Object.values(constructors));

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
          setSearchResults(returnArray);
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
          setSearchResults(data.ConstructorTable.Constructors);
          console.log(data.ConstructorTable.Constructors);
        } else {
          console.log("NO ConstructorTable");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return {
    searchResults,
    queryType,

    render: (
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
                  <Form.Control
                    as="select"
                    onChange={(e) => setQueryType(e.target.value)
                    }
                  >
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
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

                {/* <Form.Group className="mb-3" controlId="formRound">
                  <Form.Label>Round</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={round}
                    min="0"
                    max="22"
                    step="1"
                    value={round}
                    onChange={(e) => setRound(e.target.value)}
                  />
                </Form.Group> */}
              </Form>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <Button onClick={search}>SEARCH</Button>
        </div>
      </Container>
    ),
  };
};

export default useSearch;
