import { useState, useContext } from "react";
import LookoutLogo from '../images/LookoutLogo.png';
import { useNavigate } from "react-router-dom";
import EditProfileBackground from '../images/EditProfile.png';
import { UserContext } from "../App";

function EditProfileForm({ handleEditToggle }) {
  const [email, setEmail] = useState("");
  const [icon, setIcon] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [errors, setErrors] = useState("")

 
  const {setUser} = useContext(UserContext);
 
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${EditProfileBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '77vh', // Ensure the container takes up the entire viewport height
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
        r.json().then((user) => {
          // Use the setUser function to update user data
          setUser.setUser(user);
          navigate("/");
        });
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
      <form onSubmit={handleSubmit} className="form">
        <img className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>

        {Array.isArray(errors) &&
          errors.map((err) => (
            <p key={err} style={{ color: 'red' }}>
              {err}
            </p>
          ))}
        <div className="title">Edit Profile</div>

        <input
          type="text"
          id="firstName"
          autoComplete="off"
          className="input-container"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName"></label>
        <input
          type="text"
          id="lastName"
          className="input-container"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="icon"></label>
        <input
          type="text"
          id="icon"
          className="input-container"
          value={icon}
          placeholder="Profile Picture URL"
          onChange={(e) => setIcon(e.target.value)}
        />

        <label htmlFor="Email"></label>
        <input
          type="email"
          id="email"
          className="input-container"
          autoComplete="email"
          value={email}
          placeholder="username@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Email"></label>
        <input
          type="test"
          id="Blurb"
          className="input-container"
          autoComplete="no"
          value={blurb}
          placeholder="Add an about me!"
          onChange={(e) => setBlurb(e.target.value)}
        />

        <button type="submit" className="submit">Save</button>
        <button onClick={handleEditToggle} className="submit">Back</button>
      </form>
    </div>
  );
}

export default EditProfileForm;