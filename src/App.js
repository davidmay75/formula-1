import "./App.scss";

import useSearch from "./Components/Search";
import Results from "./Components/Results";
import { Row,Container } from "react-bootstrap";

function App() {
  //I could probably save the results from driverStandings and if no other paramters except the queryType change
  //then set the driverStandings back to results if they change back the queryType
  const { render, searchResults, queryType } = useSearch();

  return (
    <Container className="App" style={{ height: "100%" }}>
      <h2 className="top-title" style={{ fontSize: "100%" }}>
        🏎️🏎️ Formula1-stats 🏎️🏎️
      </h2>

      {/* <Navbar bg="primary" className="fluid" >
        <Container>
          <Row>
            <Col>🏎️</Col>
            <Col xs={8}><strong>F1 Information Sation </strong></Col>
            <Col>🏎️</Col>
          </Row>
        </Container>
      </Navbar> */}

      <Container className="main">
        {/* <RaceResultsList searchResults={searchResults} /> */}

        <Row className="mt-3">
          {/* <Search /> */}
          {render}
        </Row>

        {searchResults.length !== 0 ? (
          <Row className="row mt-3">
            <Results searchResults={searchResults} queryType={queryType} />
          </Row>
        ) : (
          <Row style={{ height: "100vh" }}></Row>
        )}
      </Container>
    </Container>
  );
}

export default App;
