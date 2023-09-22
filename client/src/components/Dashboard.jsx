import React, { useEffect, useState } from 'react';
import TrailCard from './TrailCard';
import SignUpForm from './SignUpForm';
import ChangeName from './ChangeName';
import CreateTrail from './CreateTrail';
import HeadImage from '../images/HeadImage.png'

function Dashboard({ user, setUser, setErrors, setTrails, errors, trails }) {
  const [like, setLike] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('authorized_user');
      if (response.ok) {
        const user = await response.json();
        setUser(user);
      } else {
        const error = await response.json();
        setErrors(error);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [user, setErrors, setUser]);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const response = await fetch('trails');
        if (response.ok) {
          const trails = await response.json();
          setTrails(trails);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    if (user) {
      fetchTrails().catch(console.error);
    }
  }, [user, setTrails, setErrors]);  

  useEffect(() => {
   
  }, [trails]);

  
  const logout =( e)=>{
    e.preventDefault()
    fetch('/logout', {
    method: 'DELETE'
})
.then(r => {
    if(r.status === 204){
        setUser(null)}
        else{
 const error = r.json()
 
        }
    })
}
  
  function onAddTrail(newTrail) {
    setTrails(currentTrails =>[...currentTrails, newTrail]);
  } 
    
    if (!user) return <span className="comboForm">  <SignUpForm setUser={setUser} errors = {errors} setErrors={setErrors} user={user} /> 
    </span>    
    
    const deleteUser  = (e)=>{
      e.preventDefault()
      fetch(`/users/${user.id}`, {
      method: 'DELETE'
  })
  .then(r => {
      if(r.status === 204){
          setUser(null)} 
      })}

      

    const trailCards = trails && trails.map(trail => <TrailCard key={trail.id} trail={trail} reviews={trail.reviews} setLike/>)
  
    return (

        <>     
        <img className="headImage"src={HeadImage} alt="lookoutimg"></img>    
         <div className="trailList">
{/*          
         <ChangeName onLogin={setUser} errors ={errors} setErrors={setErrors} user={user}/> */}
          {trailCards}
          
        </div>
        
            
        {/* {user ?  <button type="submit" onClick={logout}>Signout</button> : null}
        { user ? <button onClick={deleteUser}>DeleteUser</button>:""  }    */}
             
        </>
        )
      }
      
      export default Dashboard