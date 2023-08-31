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

function App() {
  const [trails, setTrails] = useState(null)
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([]);
 
  return (
    <div>
     <Header user={user} setUser={setUser} setErrors={setErrors} errors={errors}/>
      <main>
        {/* <Switch> */}
          <Routes>
            <Route path="/" element={<Dashboard trails={trails} setTrails={setTrails} user={user} setUser={setUser} errors={errors} setErrors={setErrors}/> } />      
            <Route path="/signup" element= {<SignUpForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser}/>} />
            <Route path="/login" element= {<LoginForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser}/>} /> 
            <Route path="/trail-review" element= {<TrailReviewForm  errors = {errors} setErrors={setErrors} user={user} />} /> 
            <Route path="/create-trail" element= {<CreateTrail  errors = {errors} setErrors={setErrors} user={user} />} /> 
            <Route path="/user" element= {<UserProfile  errors = {errors} setErrors={setErrors} user={user} />} /> 

            {/* <Route path= element={<LoginForm />}/>    */}
         </Routes>
         
        {/* </Switch> */}
      </main>  
      <Footer/>
    </div>
  )
}

export default App;

