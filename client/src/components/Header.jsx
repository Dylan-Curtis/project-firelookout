import React from 'react'
import {Link} from 'react-router-dom'
function Header({ setErrors, setUser, user}) {
    const logout = e=>{
        fetch('/logout', {
        method: 'DELETE'
    })
    .then(r => {
        if(r.status === 204){
            setUser(null)}
    //         else{
    //  const error = r.json()
    //  console.log(error.error)
    //     setErrors(error.error)
    //         }
        })
    }

const deleteUser  = e=>{
    fetch(`/users/${user.id}`, {
    method: 'DELETE'
})
.then(r => {
    if(r.status === 204){
        setUser(null)} 
    })}
    return (
        <nav>
            <span id="links">  
           { user ? `Hello ${user.name}`: <Link to="login">Login</Link>}   
           { user ? <button onClick={deleteUser}>DeleteUser</button>:""  }     
                <h1 className = "nav">
                <Link to="/">Trails</Link>
                <Link to="user"> User </Link>
                <Link to="myTrails">My Trails</Link>                
                <Link to="signup">Sign Up</Link>
            
                <button type="submit" onClick={logout}>Signout</button>
                {/* <Link to="signout">Sign Out</Link>                    */}
                {/* <Link to="trails">Trails</Link> */}
                </h1>
            </span>
        </nav>
      )
    
    
    }
    
    export default Header