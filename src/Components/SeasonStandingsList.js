import SeasonStandings from './SeasonStandings'

const SeasonStandingsList = ({searchResults}) => {

    if (Object.keys(searchResults).length > 0 && searchResults[0].hasOwnProperty('constructorId')){
        return (
            <div className="container results-list">               
    
                <div className="row">
                 {searchResults.map(constructor => (
                        <SeasonStandings
                            constructorId={constructor.constructorId}
                            constructorUrl={constructor.url}
                            constructorName={constructor.name}
                            constructorNationality={constructor.nationality}   
                            drivers={constructor.Drivers}
                            key={constructor.constructorId}
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