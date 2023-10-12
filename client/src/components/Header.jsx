import React from 'react'
import {Link} from 'react-router-dom'
import ProfileIcon from "./ProfileHeaderIcon"
import LookoutLogo from '../images/LookoutLogo.png'

function Header({ user }) {  
    console.log(user)
    return (
        <div className='header-container'>        
        <nav>
            <h1 id="links"> 
                <h1 className = "nav">
                <img  className="lookoutImage" alt="lookoutLogo" src={LookoutLogo}></img>
                <div className="LookoutTrails"><strong>Lookout Trails</strong></div>
                <Link to="/" className="HikeATrail"> <strong>Hike a Trail</strong></Link>
                <Link to="/create-trail" className="CreateATrail"> <strong> Create a Trail</strong></Link>         
              
                { user ?  <Link to="/user" className="userInfoHeader" ><span className="userInfoName"> Hello, {user.name}<ProfileIcon  iconIndex={user.profile_icon}/></span> </Link>: <div className= "login-div"><Link to="login" ><button className = "logInButton">Login</button></Link> <Link to="signup"><button className = "signupButton">Sign Up</button></Link> </div>}
                </h1>
            </h1>
        </nav>        
        </div>
      )
    
    
    }
    
    export default Header