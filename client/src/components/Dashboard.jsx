import React, { useEffect, useState } from 'react';
import TrailCard from './TrailCard';
import SignUpForm from './SignUpForm';
import HeadImage from '../images/HeadImage.png'

function Dashboard({ user, setUser, setErrors, setTrails, errors, trails }) {

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('authorized_user');
      if (response.ok) {
        const user = await response.json();
        setUser(user);
        console.log(user)
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
  console.log(user)


    
    if (!user) return <span className="comboForm">  <SignUpForm setUser={setUser} errors = {errors} setErrors={setErrors} user={user} /> 
    </span>    
    
  
      

    const trailCards = trails && trails.map(trail => <TrailCard key={trail.id} trail={trail} reviews={trail.reviews} setLike/>)
  
    return (

        <>     
        <img className="headImage"src={HeadImage} alt="lookoutimg"></img>    
         <div className="trailList">
          {trailCards}          
        </div> 
        </>
        )
      }
      
      export default Dashboard