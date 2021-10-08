import Driver from './Driver'
import Constructor from './Constructor'
//import ConstructorDrivers from './ConstructorDrivers'


//this is where I should order driverStandings by constructor?

const Results = ({driverResults, constructorResults}) => {
    //console.log(driverResults)
    return (
        <div className="results">

        <div>
        </div>
    

            {/* <ul>
                {driverResults.map(driver => (
                    <li key={driver.driverId}>
                        <Driver 
                            driverId={driver.driverId}
                            code={driver.code}
                            url={driver.url}
                            givenName={driver.givenName}
                            familyName={driver.familyName}
                            dateOfBirth={driver.dateOfBirth}
                            nationality={driver.nationality}       
                            constructor={driver.constructor}                 
                        />
                        <br />
                    </li>
                ))}
            </ul> */}

            <ul>
                {constructorResults.map(constructor => (
                    <li key={constructor.constructorId}>
                        <Constructor
                            constructorId={constructor.driverId}
                            url={constructor.url}
                            name={constructor.name}
                            nationality={constructor.nationality}                        
                        />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Results;