import axios from "axios";
import { useState, useEffect } from "react";
import DriverResults from "./DriverResults";

const ConstructorDrivers = ({
  constructorId,
  constructorName,
  constructorUrl,
  constructorNationality,
  img,
  drivers,
}) => {
  return (
    <div className="container standing">
      <div className="row constructor">
          <a href={constructorUrl}>
              <h2>
              {constructorName} - {constructorNationality}
              </h2>
          </a>
      </div>
      <div className="row">
        <div className="drivers">
          <div className="driver">
            {drivers.map((driver) => (
              <DriverResults
                driverId={driver.driverId}
                code={driver.code}
                url={driver.url}
                givenName={driver.givenName}
                familyName={driver.familyName}
                wins={driver.wins}
                position={driver.position}
                points={driver.points}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructorDrivers;
