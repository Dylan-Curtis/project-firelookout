import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";

function UserCard({handleEditToggle}) {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="user-container">
          <span className="title-container">
            <h3 className="title">
              {user.name}
              <button onClick={handleEditToggle} className="smallButton">
                Edit Account
              </button>
            </h3>
          </span>
          {user.blurb ? (
            <p id="user-profile">{user.blurb}</p>
          ) : (
            <p>Edit your profile to add an about me section</p>
          )}
        </div>
      );
    }
    
    export default UserCard;