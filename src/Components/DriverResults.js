import { Card } from "react-bootstrap";

const DriverResults = ({
  driverId,
  code,
  url,
  givenName,
  familyName,
  dateOfBirth,
  nationality,
  img,
  points,
  position,
  wins,
}) => {
  return (
    <div className="driver">
      <Card bg="primary">
        <Card.Header as="h4" style={{ width: "14rem" }}>
          <a href={url}>
            {givenName} {familyName}
          </a>
        </Card.Header>
        <Card.Body>
            <div className="container">
              <div className="row">points: {points}</div>
              <div className="row">position: {position}</div>
              <div className="row">wins: {wins}</div>
            </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DriverResults;
