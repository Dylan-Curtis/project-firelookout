import React, {useState, useEffect} from 'react'
import TrailCard from './TrailCard'
import LoginForm from './LoginForm'
function Dashboard() {

    const [trails, setTrails] = useState([])
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState([]);
  
    useEffect(() => {
      const fetchTrails = async () => {
        const response = await fetch('trails')
        const trails = await response.json() 
      setTrails(trails)
      
    }
    fetchTrails()
      .catch(console.error)    
  }, [])     
  
    if (!user) return <LoginForm onLogin={setUser} errors = {errors} setErrors={setErrors} user={user} setUser = {setUser}/>;

    let trailCards = trails.map(trail => <TrailCard key={trail.id} trail={trail} />)
  
    return (
        <>
         <div className="trailList">
          {trailCards}
        </div>
            {/* <LoginForm onLogin={handleLogIn}  /> */}
        </>
        )
      }
      
      export default Dashboard