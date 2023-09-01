import React from 'react'
import {Link} from 'react-router-dom'
import FootImage from '../images/FootImage.png'

function Footer( ) {   


    return (
        <footer >  
        <h1 className= "foot">
        <img  className="lookoutImageFooter" alt="lookoutLogo" src={FootImage}></img>
        <div className="footer-links">
            <h1 className="LookoutTrails-footer"><strong>Lookout Trails</strong></h1>            
              <Link to="/" className="HikeATrail-footer"> <strong>Hike a Trail</strong></Link>
              <Link to="/create-trail" className="CreateATrail-footer"> <strong> Create a Trail</strong></Link>  
            </div>
            </h1>
        </footer>
      ) 
    }
    
    export default Footer 