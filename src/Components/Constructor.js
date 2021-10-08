import axios from 'axios'
import {useState, useEffect} from 'react'

const Driver = ({constructorId, name, url, nationality, img}) => {

    const [image, setImage] = useState("")

    useEffect(() => {
        if (image === "" && url !== ""){
            let constructorName = /[^/]*$/.exec(url)[0]
            //console.log(constructorName)

            axios.get('http://localhost:3001/WikiImage', {
                params: {
                    driver: constructorName
                }
            })
            .then(res => {   

                setImage(res.data.imgUrl)

            }).catch((e) => {
                console.log(e)
            })   
        }else{
            console.log("ELSE")
        } 
    }, [image, url])


    return (
        <div className="driver">
            <img src={image} alt='No' style={{ maxHeight: '400px', width: 'auto' }}/>
            
            <div>
                {name} - {nationality}
            </div>
            
            <div>
                <a href={url}>{url}</a>
            </div>

        </div>
    )
}

export default Driver;