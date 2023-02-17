import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav>
            <span id="links">
                <h1 className = "nav">
                <Link to="/">Trails</Link>
                <Link to="user"> User </Link>
                <Link to="myTrails">My Trails</Link>
                <Link to="login">Login</Link>
                <Link to="signup">Sign Up</Link>
                <button type="submit">Signout</button>
                {/* <Link to="signout">Sign Out</Link>                    */}
                {/* <Link to="trails">Trails</Link> */}
                </h1>
            </span>
        </nav>
      )
    
    
    }
    
    export default Header