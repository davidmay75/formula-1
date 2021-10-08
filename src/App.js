import "./App.scss";
import Search from "./Components/Search";
import { Button, Row, Col } from "react-bootstrap";

import { Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="primary" className="fluid" >
        <Container>
          <Row>
            <Col>🏎️</Col>
            <Col xs={8}><strong>F1 Information Sation </strong></Col>
            <Col>🏎️</Col>
          </Row>


        </Container>
      </Navbar> */}

      <div className="container">
          <Row className="top-title">
            <Col className="car-emoji">🏎️🏎️</Col>
            <Col xs={8}>
              <strong>F1 Information Sation </strong>
            </Col>
            <Col className="car-emoji">🏎️🏎️</Col>
          </Row>

        <div className="row mt-3">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
