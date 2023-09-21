import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


function UserStatPage({user}) {
 
  return (       
      <div className ="user-div">
        { user ? 
          <div>
            <h3 >{user.name}</h3><Link to='/edit-user'><h3>Edit Account </h3></Link>
            <h3 id="user-profile">{user.blurb}<h3>{user.blurb}</h3>Edit your profile to add an about me section</h3>
          </div> 
          : "" }
        <span className ="">            
        </span>
      </div>
   
  )
}

export default UserStatPage;