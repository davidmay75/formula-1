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
  //const [image, setImage] = useState("")

  // useEffect(() => {
  //     if (image === "" && url !== ""){
  //         let constructorName = /[^/]*$/.exec(url)[0]
  //         console.log(constructorName)

  //         axios.get('http://localhost:3001/WikiImage', {
  //             params: {
  //                 driver: constructorName
  //             }
  //         })
  //         .then(res => {

  //             setImage(res.data.imgUrl)

  //         }).catch((e) => {
  //             console.log(e)
  //         })
  //     }else{
  //         console.log("ELSE")
  //     }
  // }, [image, url])

  //SORTY DRIVERS WITHIN CONSTRUCTOR BY THEIR POINTS

  return (
    <div className="container">
      {/* <img src={image} alt='' style={{ maxHeight: '400px', width: 'auto' }}/> */}

      <div>
        {constructorName} - {constructorNationality}
      </div>

      <div>
        <a href={constructorUrl}>Team Wikipedia</a>
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
