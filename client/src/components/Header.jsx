import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav>
            <span>
                <h1>
                <Link to="trails">Trails</Link>
                <Link to="user"> User </Link>
                <Link to="myTrails">My Trails</Link>
                <Link to="login">Login</Link>
                <Link to="signup">Sign Up</Link>                
                {/* <Link to="trails">Trails</Link> */}
                </h1>
            </span>
        </nav>
      )
    
    
    }
    
    export default Header