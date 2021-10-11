import { Card} from "react-bootstrap";

const Circuit = ({ circuitId, circuitName, url, Location }) => {
  return (
    <div className="driver">
      <Card bg="primary">
        <Card.Header as="h4" style={{ width: "14rem" }}>
          <a href={url}>{circuitName}</a>
        </Card.Header>
        <Card.Body>
            <div className="container">
              <div className="row">City: {Location.locality}</div>
              <div className="row">Country: {Location.country}</div>
              <div className="row">
                Location: {Location.lat} {Location.long}
              </div>
            </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Circuit;
