import { Card, Container, Row, Col } from "react-bootstrap";

const Circuit = ({ Circuit, asCard }) => {
  if (asCard) {
    return (
      <div className="circuit">
        <Card bg="dark">
          <Card.Header as="h4">
            <a href={Circuit.url}>{Circuit.circuitName}</a>
          </Card.Header>
          <Card.Body>
            <Container className="circuit">
              <Row>
                <Col>City: {Circuit.Location.locality}</Col>
              </Row>

              <Row>
                {" "}
                <Col> Country: {Circuit.Location.country} </Col>
              </Row>
              <Row>
                <a
                  href={
                    "http://maps.google.com/maps?t=k&z=20&q=" +
                    Circuit.Location.lat +
                    "," +
                    Circuit.Location.long
                  }
                  className="underline"
                  // href={"https://www.google.com/maps/@"+ Circuit.Location.lat +", " + Circuit.Location.long + ",9z"} the zoom is too far in??
                >
                  {Circuit.Location.lat}, {Circuit.Location.long}
                </a>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <Container className="circuit">
        <Row>
          <Col>
            <h5>
              <a href={Circuit.url}>{Circuit.circuitName}</a>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>City: {Circuit.Location.locality}</Col>
        </Row>

        <Row>
          {" "}
          <Col> Country: {Circuit.Location.country} </Col>
        </Row>
        <Row>
          <a
            href={
              "http://maps.google.com/maps?t=k&z=20&q=" +
              Circuit.Location.lat +
              "," +
              Circuit.Location.long
            }
            className="underline"
            // href={"https://www.google.com/maps/@"+ Circuit.Location.lat +", " + Circuit.Location.long + ",9z"} the zoom is too far in??
          >
            {Circuit.Location.lat}, {Circuit.Location.long}
          </a>
        </Row>
      </Container>
    );
  }
};

export default Circuit;
