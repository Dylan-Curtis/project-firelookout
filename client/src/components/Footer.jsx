import React from 'react'
import {Link} from 'react-router-dom'

function Footer( ) {   


    return (
        <footer >  
        <h1 className= "foot">
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