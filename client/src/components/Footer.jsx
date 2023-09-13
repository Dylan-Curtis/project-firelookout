import React from 'react'
import {Link} from 'react-router-dom'
import FootImage from '../images/FootImage.png'

function Footer({user} ) {   


    return (
        <footer id="links">  
        <h1 className= "foot">
        <img  className="lookoutImageFooter" alt="lookoutLogo" src={FootImage}></img>
        <div className="footer-links">
            <div className="LookoutTrails-footer"><strong>Lookout Trails</strong></div>            
              <Link to="/"> <strong>Hike a Trail</strong></Link>
              <Link to="/create-trail"> <strong> Create a Trail</strong></Link>  
              { user ?  <Link to="/user">Profile</Link>: <div><Link to="login" >Login</Link></div>}
          </div>
          </h1>
        </footer>
      ) 
    }
    
    export default Footer 