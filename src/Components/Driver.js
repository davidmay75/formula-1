import {useState, useEffect} from 'react'


const Driver = ({driverId, code, url, givenName, familyName, dateOfBirth, nationality, img, constructor}) => {

    const [image, setImage] = useState("")

    useEffect(() => {
        // if (image === "" && url !== ""){
        //     let driverName = /[^/]*$/.exec(url)[0]
        //     console.log(driverName)

        //     axios.get('http://localhost:3001/WikiImage', {
        //         params: {
        //             driver: driverName
        //         }
        //     })
        //     .then(res => {   

        //         setImage(res.data.imgUrl)

        //     }).catch((e) => {
        //         console.log(e)
        //     })   
        // }else{
        //     console.log("ELSE")
        // } 
    }, [image, url])


    return (
        <div className="driver">
            <img src={image} alt={image} style={{ maxHeight: '400px', width: 'auto' }}/>
            
            <div>
                {givenName} {familyName}
            </div>
            <div>
            {dateOfBirth}
            </div>
            <div>
                <a href={url}>Biography</a>
            </div>
            <div>
                {constructor}
            </div>

        </div>
    )
}

export default Driver;