import React, { useState, useContext } from "react";
import LookoutLogo from "../images/LookoutLogo.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

import Bear from "../images/ProfilePictures/Bear.png";
import Deer from "../images/ProfilePictures/Deer.png";
import Hawk from "../images/ProfilePictures/Hawk.png";
import Goat from "../images/ProfilePictures/Goat.png";
import Marmot from "../images/ProfilePictures/Marmot.png";
import LookoutMountain from "../images/ProfilePictures/LookoutMountain.png";

function EditProfileForm({ handleEditToggle }) {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [errors, setErrors] = useState("");
  const [profile_icon, setProfileIcon] = useState(""); 

  const profileIcons = [Deer, Bear, Hawk, Goat, LookoutMountain, Marmot];

 

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, blurb, profile_icon }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
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

  const deleteUser  = (e)=>{
    e.preventDefault()
    fetch(`/users/${user.id}`, {
    method: 'DELETE'
})
.then(r => {
    if(r.status === 204){
        setUser(null)
        navigate("/");} 
    })}

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <img className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>

        {Array.isArray(errors) &&
          errors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))}
        <div className="title">Edit Profile</div>
        <button onClick={deleteUser} className="smallButton">
                Delete User
              </button>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          className="input-container"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
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

        <label htmlFor="Blurb"></label>
        <input
          type="text"
          id="Blurb"
          className="input-container"
          autoComplete="no"
          value={blurb}
          placeholder="Add an about me!"
          onChange={(e) => setBlurb(e.target.value)}
        />

        <div className="profile-icons">
          <p>Select a profile icon:</p>
          {profileIcons.map((icon, index) => (
              <img
              key={index}
              src={icon}
              alt={`Profile Icon ${index}`}
              className={`profile-pic-header ${profile_icon === index ? "selected" : ""}`}
              onClick={() => setProfileIcon(index)}
            />
          ))}
        </div>

        <div className="button-container">
          <button type="submit" className="submit">
            Save
          </button>
          <button onClick={handleEditToggle} className="submit">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;