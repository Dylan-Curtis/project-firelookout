import { useState } from "react";
import LookoutLogo from '../images/LookoutLogo.png';
import CreateATrailBackground from '../images/CreateATrailBackground.png';
import { useNavigate } from "react-router-dom";

function AddTrailForm() {
  const navigate = useNavigate();
  const [trailData, setTrailData] = useState({
    name: "",
    elevation_gain: "",
    length: "",
    body: "",
    image: "",
    map: "",
  });

  const backgroundStyle = {
    backgroundImage: `url(${CreateATrailBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '77vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  function handleChange(e) {
    setTrailData({
      ...trailData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/trails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trailData),
    })
      .then((response) => {
        if (response.status === 201) {
          // Reset form fields to clear input values
          setTrailData({
            name: "",
            elevation_gain: "",
            length: "",
            body: "",
            image: "",
            map: "",
          });

          // Navigate to the desired route
          navigate("/");
        } else {
          // Handle errors, e.g., display an error message
          console.error("Failed to create a new trail.");
        }
      });
  }
   
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
                 {/* <input type="text"
                   name="location"   
                   class="input-container"                 
                   placeholder="Location"                   
                   onChange={handleChange}                      
                /> */}
                   
                   <input type="text"
                   name="image"     
                   class="input-container"               
                   placeholder="image URL"                   
                   onChange={handleChange}                      
                />
                <input type="text"
                   name="map"     
                   class="input-container"               
                   placeholder="map URL"                   
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