import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedBlurb, setEditedBlurb] = useState(user.blurb);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Perform save operation here with editedName and editedBlurb
    // For example, you can send a PUT request to update the user's profile on the server.
    // After successful update, you can set isEditing to false.
    // You should implement this part based on your backend and state management.

    setIsEditing(false); // For demonstration purposes, we're just toggling isEditing to false.
  };

  return (
    <div className="user-container">
      <div className="user-title">
        {isEditing ? (
          <>
            <h3 className="title">
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </h3>
            <div className="button-container">
              <EditProfileForm onSave={handleSave} onCancel={handleEditToggle} />
              <button onClick={handleEditToggle} className="smallButton">
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="button-container">
              <h3 className="title">{user.name}</h3>
              <button onClick={handleEditToggle} className="smallButton">
                Edit Account
              </button>
            </div>
            <p id="user-profile">{user.blurb}</p>
            {!isEditing && <p>Edit your profile to add an about me section</p>}
          </>
        )}
      </div>
      <span className=""></span>
    </div>
  );
}

export default UserProfile;