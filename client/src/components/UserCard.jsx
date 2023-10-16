import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import ProfileUserIcon from "./ProfileUserIcon"

function UserCard({handleEditToggle}) {
    const { user, setUser } = useContext(UserContext);

    
    return (
        <div className="user-container">
          <ProfileUserIcon iconIndex={user.profile_icon}/>
          <span className="title-container">
            <h3 className="title">
              {user.name}
              <button onClick={handleEditToggle} className="smallButton">
                EDIT ACCOUNT
              </button>
              {user.created_at}
            </h3>
            <div className="user-member-since"> Member Since {user.member_since }</div>
          {user.blurb ? (
            <div className="user-blurb">{user.blurb}</div>
          ) : (
            <div className="user-blurb">Edit your profile to add an about me section</div>
          )}
          </span>
        </div>
      );
    }
    
    export default UserCard;