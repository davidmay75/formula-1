import ConstructorDrivers from './ConstructorDrivers'
import { Container } from "react-bootstrap";



const ConstructorDriversList = ({searchResults}) => {

    if (Object.keys(searchResults).length > 0 && searchResults[0].hasOwnProperty('constructorId')){
        return (
            <Container className="results-list">
    
                <div className="row">
                    {searchResults.map(constructor => (
                        <ConstructorDrivers
                            constructorId={constructor.constructorId}
                            constructorUrl={constructor.url}
                            constructorName={constructor.name}
                            constructorNationality={constructor.nationality}   
                            drivers={constructor.Drivers}
                        /> 
                    ))}
                    
                </div>

            </Container>
        )
    }else{
        return (
            <div></div>
        )
    }    
}

export default ConstructorDriversList;