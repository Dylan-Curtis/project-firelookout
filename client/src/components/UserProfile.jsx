import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserStatPage({ user }) {
  return (
    <div className="user-container">      
        <div className="user-title">
          <h3 className="title">
            {user.name}{" "}
            <button className="smallButton">Edit Account</button>
          </h3>
          <p id="user-profile">{user.blurb}</p>
          <p>Edit your profile to add an about me section</p>
        </div>      
      <span className=""></span>
    </div>
  );
}

export default UserStatPage;