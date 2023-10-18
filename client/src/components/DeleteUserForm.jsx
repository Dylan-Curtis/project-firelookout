import React, { useContext } from "react";
import LookoutLogo from "../images/LookoutLogo.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function EditProfileForm({ setShowConfirmation }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const deleteUser = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "DELETE"
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
      <form className="form">
        <img className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>
        
        <div className="title">Are you sure?</div>
        
        <div className="button-container">
          <button onClick={deleteUser} className="smallButton">
            YES
          </button>
          <button onClick={() => setShowConfirmation(false)} className="smallButton">
            No
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;