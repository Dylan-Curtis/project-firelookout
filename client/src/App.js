import { Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
// import { Switch } from "react-router"


// import Header from './components/Header'
import Dashboard from './components/Dashboard'
import './App.css';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

function App() {
  const [trails, setTrails] = useState(null)
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([]);
 
  return (
    <div>
     <Header user={user} setUser={setUser}/>
      <main>
        {/* <Switch> */}
          <Routes>
            <Route path="/" element={<Dashboard trails={trails} setTrails={setTrails} user={user} setUser={setUser} errors={errors} setErrors={setErrors}/> } />      
            <Route path="/signup" element= {<SignUpForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser}/>} />
            <Route path="/login" element= {<LoginForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser}/>} />            
            {/* <Route path= element={<LoginForm />}/>    */}
         </Routes>
        {/* </Switch> */}
      </main>  
    </div>
  )
}

export default App;

