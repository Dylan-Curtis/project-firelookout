import { useState } from "react"
import LookoutLogo from '../images/LookoutLogo.png'
import CreateATrailBackground from '../images/CreateATrailBackground.png'

function AddTrailForm({ onAddTrail }) {
    const [trailData, setTrailData] = useState({
        name: "",
        elevation_gain: "",
        length: "",
        body: "",
        location: "",            
        image: "",
        // map:""
    })

    const backgroundStyle = {
      backgroundImage: `url(${CreateATrailBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '77vh', // Ensure the container takes up the entire viewport height
      display: 'flex',
      alignItems: 'center', // Vertically center the form
      justifyContent: 'center', // Horizontally center the form
      padding: '20px', // Add some padding around the form
    };

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
      <div className="container" style={backgroundStyle}>
        <form onSubmit={handleSubmit}className="formContainer" class= "form">
           <img  className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>
            <h1 class="title">Create A Trail</h1>
            
            <input type="text"
                   name="name"                    
                   placeholder="Trail Name"                     
                   class="input-container"
                   onChange={handleChange}               
                />
                 <input type="text"
                   name="elevation_gain"                    
                   placeholder="Elevation Gain in feet"                   
                   class="input-container"
                   onChange={handleChange}                     
                />
                 <input type="text"
                   name="length"   
                   class="input-container"                 
                   placeholder="Enter length in miles"                  
                   onChange={handleChange}                       
                />
                 <input type="text"
                   name="location"   
                   class="input-container"                 
                   placeholder="Location"                   
                   onChange={handleChange}                      
                />
                   <input type="text"
                   name="image"     
                   class="input-container"               
                   placeholder="image URL"                   
                   onChange={handleChange}                      
                />
                     <input type="text"
                   name="body"       
                   class="input-container"             
                   placeholder="Write a small discription"                   
                   onChange={handleChange}                      
                />
                <button class="submit"> Save New Trail</button>
                
        </form>
       </div>
    )
}

export default AddTrailForm