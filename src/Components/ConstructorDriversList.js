import ConstructorDrivers from './ConstructorDrivers'


const ConstructorDriversList = ({constructorDrivers}) => {

    if (Object.keys(constructorDrivers).length > 0){
        return (
            <div className="container results-list">
    
                <div className="row">
                    {constructorDrivers.map(constructor => (
                        <ConstructorDrivers
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

export default ConstructorDriversList;