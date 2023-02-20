import { useState } from "react"
import LookoutLogo from '../images/LookoutLogo.png'

function AddTrailForm({ onAddTrail }) {
    const [trailData, setTrailData] = useState({
        name: "",
        elevation_gain: "",
        length: "",
        body: "",
        location: "",            
        image: "",
        map:""
    })

    function handleChange(e) {
        setTrailData({
          ...trailData,
          [e.target.name]: e.target.value,
        });
      }

    function handleSubmit(e){
        e.preventDefault()

        

        fetch("/trails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(trailData),
          })
          .then((r) => {
           if (r.status === 201){
            r.json()
            .then(trailOBJ=> {
                onAddTrail(trailOBJ)              
            })
           }
        //    else {
        //     r.json()
        //     .then(messOBJ=>  setMessage(messOBJ.message))
        //    }
        //   })
          // .then(onAddPlayer);

          //   setPlayerData({
          //     firstName: "",
          //     lastName: "",
          //     playerNumber: "",
          //     professionalTeam: "",
          //     position: "",            
          //     imgURL: ""
          // })
        })}
    
   
    return(
        <form onSubmit={handleSubmit}className="formContainer" class= "form">
           <img  className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>
            <h1 class="title">Create A Trail</h1>
            
            <input type="text"
                   name="trailName"                    
                   placeholder="Trail Name"
                   className="input-text"    
                   class="input-container"
                   onChange={handleChange}               
                />
                 <input type="text"
                   name="Elevation Gain"                    
                   placeholder="Elevation Gain in feet"
                   className="input-text" 
                   class="input-container"
                   onChange={handleChange}                     
                />
                 <input type="text"
                   name="length"   
                   class="input-container"                 
                   placeholder="Enter length in miles"
                   className="input-text"
                   onChange={handleChange}                       
                />
                 <input type="text"
                   name="location"   
                   class="input-container"                 
                   placeholder="Enter the general reagion of the hike"
                   className="input-text"
                   onChange={handleChange}                      
                />
                   <input type="text"
                   name="image"     
                   class="input-container"               
                   placeholder="image URL"
                   className="input-text"
                   onChange={handleChange}                      
                />
                     <input type="text"
                   name="imap"       
                   class="input-container"             
                   placeholder="Enter the map's URL"
                   className="input-text"
                   onChange={handleChange}                      
                />
                <button class="submit"> Save New Trail</button>
        </form>
    )
}

export default AddTrailForm