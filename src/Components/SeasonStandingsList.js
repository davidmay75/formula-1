import SeasonStandings from './SeasonStandings'

const SeasonStandingsList = ({constructorDrivers, year}) => {

    if (Object.keys(constructorDrivers).length > 0){
        return (
            <div className="container results-list">
                <h2>
                    {year !=="" ? year : "t"}
                </h2>
    
                <div className="row">
                 {constructorDrivers.map(constructor => (
                        <SeasonStandings
                            constructorId={constructor.constructorId}
                            constructorUrl={constructor.url}
                            constructorName={constructor.name}
                            constructorNationality={constructor.nationality}   
                            drivers={constructor.Drivers}
                        /> 
                    ))}        
                              
                    
                </div>
            </div>
        )
    }else{
        return (
            <div></div>
        )
    }    
}

export default SeasonStandingsList;