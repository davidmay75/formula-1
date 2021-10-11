import DriverResults from "./DriverResults";

//Constructor with drivers listed under
const ConstructorDrivers = ({
  constructorId,
  constructorName,
  constructorUrl,
  constructorNationality,
  img,
  drivers,
}) => {

  return (
    <div className="container">
      <div className="constructorName">        
        <a href={constructorUrl}>{constructorName} - {constructorNationality}</a>      
      </div>

      <div className="drivers">
        {drivers.map((driver) => (
          <DriverResults
            driverId={driver.driverId}
            code={driver.code}
            url={driver.url}
            givenName={driver.givenName}
            familyName={driver.familyName}
            dateOfBirth={driver.dateOfBirth}
            nationality={driver.nationality}
            constructor={driver.constructor}
            wins={driver.wins > 0 ? driver.wins : 0}
            position={driver.position > 0 ? driver.position : 0}
            points={driver.points > 0 ? driver.points : 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ConstructorDrivers;
