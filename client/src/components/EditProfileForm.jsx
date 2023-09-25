import {Link} from 'react-router-dom'
import {useState} from 'react'
import LookoutLogo from '../images/LookoutLogo.png'
import { useNavigate } from "react-router-dom";
import EditProfileBackground from '../images/EditProfile.png'
function EditProfileForm({ onLogin, setErrors, errors }) {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [blurb, setBlurb] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const backgroundStyle = {
      backgroundImage: `url(${EditProfileBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the container takes up the entire viewport height
      display: 'flex',
      alignItems: 'center', // Vertically center the form
      justifyContent: 'center', // Horizontally center the form
      padding: '20px', // Add some padding around the form
    };

    function handleSubmit(e) {
        e.preventDefault();       
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, firstName, lastName, blurb }),
        }).then((r) => {           
            if (r.ok) {
              r.json().then((user) => onLogin(user));
              navigate("/");   
            } else {
              r.json().then((err) => setErrors([err.error]));             
            }

            setTimeout(() => {
              setErrors([]);
            }, 5000);
          });
        }
        return (
          <div className="container" style={backgroundStyle}>
        
            <form onSubmit={handleSubmit} class= "form">
            <img  className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>

               {Array.isArray(errors) &&
            errors.map((err) => (
              <p key={err} style={{ color: 'red' }}>
                {err}
              </p>
            ))}
              <div class="title">Edit Profile</div>
             
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="text"
                  id="firstName"
                  autoComplete="off"
                  class="input-container"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                /> 
            
             
                <label htmlFor="lastName"></label>
                <input
                  type="text"
                  id="lastName"
                  class="input-container"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />    
                
                <label htmlFor="Email"></label>
                <input
                  type="email"
                  id="email"
                  class="input-container"
                  autoComplete="email"
                  value={email}
                  placeholder="username@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />                    
              <label htmlFor="Email"></label>
                <input
                  type="test"
                  id="Blurb"
                  class="input-container"
                  autoComplete="no"
                  value={blurb}
                  placeholder="Add an about me!"
                  onChange={(e) => setBlurb(e.target.value)}
                />   
             
                <button type="submit" class="submit">Save</button>                
            </form>
            </div>
          );
        }
        export default EditProfileForm