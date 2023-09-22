import { Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
import Dashboard from './components/Dashboard'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import TrailReviewForm from './components/TrailReviewForm';
import CreateTrail from './components/CreateTrail';
import UserProfile from './components/UserProfile';
import TrailPage from './components/TrailPage';
import { createContext } from 'react';

export const UserContext = createContext ()
export const LikeContext = createContext ()

function App() {
  const [trails, setTrails] = useState(null)
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([]);
    const [liked, setLiked] = useState(false);
  return (
    <UserContext.Provider value={user} >
    <div>
     <Header user={user} setUser={setUser} setErrors={setErrors} errors={errors}/>
      <main>
      <LikeContext.Provider  value={{ liked, setLiked }}>   
          <Routes>                
            <Route path="/" element={<Dashboard trails={trails} setTrails={setTrails} user={user} setUser={setUser} errors={errors} setErrors={setErrors} liked={liked} setLiked={setLiked}/> } />      
            <Route path="/signup" element= {<SignUpForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser}/>} />
            <Route path="/login" element= {<LoginForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser}/>} /> 
            <Route path="/trail-review" element= {<TrailReviewForm  errors = {errors} setErrors={setErrors} user={user} />} /> 
            <Route path="/create-trail" element= {<CreateTrail  errors = {errors} setErrors={setErrors} user={user} />} /> 
            <Route path="/user" element= {<UserProfile  errors = {errors} setErrors={setErrors} user={user} />} /> 
            <Route path={`/trail/:trailId`} element={<TrailPage errors={errors} setErrors={setErrors} user={user} liked={liked} setLiked={setLiked} />} />
         </Routes>         
         </LikeContext.Provider>
      </main>  
      <Footer/>     
    </div>
    </UserContext.Provider>
  )
}

export default App;

