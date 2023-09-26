import { useState, useContext } from "react";
import EditProfileForm from "./EditProfileForm";
import { UserContext } from "../App";

function UserProfile() {
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const user = useContext(UserContext);
  

  const handleEditToggle = () => {
    setShowEditProfileForm(!showEditProfileForm);
  };

  return (
    <div>
      {showEditProfileForm ? (
        <div>
          <EditProfileForm handleEditToggle={handleEditToggle} />
        </div>
      ) : (
        <div className="user-container">
          <div className="button-container">
            <h3 className="title">{user.user.name}</h3>
            <button onClick={handleEditToggle} className="smallButton">
              Edit Account
            </button>
          </div>
          <p id="user-profile">{user.user.blurb}</p>
          {!showEditProfileForm && (
            <p>Edit your profile to add an about me section</p>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;