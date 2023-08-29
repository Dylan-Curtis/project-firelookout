import React from 'react'
import {Link} from 'react-router-dom'
import HeadImage from '../images/HeadImage.png'
import LookoutLogo from '../images/LookoutLogo.png'
function Header({ setErrors, setUser, user}) {
    


    return (
        <div>        
        <nav>
            <h1 id="links">             
             
                <h1 className = "nav">
                <img  className="lookoutImage" alt="lookoutLogo" src={LookoutLogo}></img>
                <h1 className="LookoutTrails"><strong>Lookout Trails</strong></h1>
                <Link to="/" className="HikeATrail"> <strong>Hike a Trail</strong></Link>
                <Link to="/create-trail" className="CreateATrail"> <strong> Create a Trail</strong></Link>
               
                {/* <Link to="user"> User </Link>
                {/* <Link to="myTrails">My Trails</Link>                 */}
                {/* <Link to="signup" >Sign Up </Link> */}
            
               
                {/* <Link to="signout">Sign Out</Link>                    */}
                {/* <Link to="trails">Trails</Link> */}
                { user ?  <Link to="/user" className="userInfoHeader">Hello, {user.name}</Link>: <div><Link to="login" ><button className = "logInButton">Login</button></Link> <Link to="signup"><button className = "signupButton">Sign Up</button></Link> </div>}
                </h1>
            </h1>
        </nav>
        <img className="headImage"src={HeadImage} alt="lookoutimg"></img>
        </div>
      )
    
    
    }
    
    export default Header