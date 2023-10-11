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
              {user.created_at}
            </h3>
          </span>
          {user.member_since}
          {user.blurb ? (
            <div className="user-blurb">{user.blurb}</div>
          ) : (
            <div className="user-blurb">Edit your profile to add an about me section</div>
          )}
        </div>
      );
    }
    
    export default UserCard;