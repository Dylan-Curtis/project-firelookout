import React, { useState, useContext } from "react";
import LookoutLogo from "../images/LookoutLogo.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { DeleteUserForm } from "./DeleteUserForm"

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
  const [errors, setErrors] = useState([]);
  const [profile_icon, setProfileIcon] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);

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
   const deleteUser = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmDelete = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: 'DELETE'
    })
    .then((r) => {
      if (r.status === 204) {
        setUser(null);
        navigate("/");
      }
    })
    .catch((error) => {
      console.error("Error deleting profile:", error);
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <img className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>

        {errors.length > 0 && (
          errors.map((err, index) => (
            <p key={index} style={{ color: "red" }}>
              {err}
            </p>
          )))
        }
        <div className="title">Edit Profile</div>
        <button onClick={deleteUser} className="smallButton">
          DELETE USER
        </button>

        {showConfirmation ? (
          <div className="confirmation-dialog">
            <p>Are you sure you want to delete your profile?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={() => setShowConfirmation(false)}>No, go back</button>
          </div>
        ) : (
          <div>
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
            <textarea
              type="text"
              id="Blurb"
              className="input-container"
              autoComplete="no"
              value={blurb}
              placeholder="Add an about me!"
              onChange={(e) => setBlurb(e.target.value)}
            />

            <div className="profile-icons">
              <p className="review-form-label">Select a profile icon:</p>
              {profileIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`Profile Icon ${index}`}
                  className={`profile-pic-header ${profile_icon === (index + 1) ? "selected" : ""}`}
                  onClick={() => setProfileIcon(index + 1)}
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
          </div>
        )}

      </form>
    </div>
  );
}

export default EditProfileForm;