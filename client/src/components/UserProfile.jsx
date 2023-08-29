import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


function UserStatPage({user, setBackground}) {
  
  const [stats, setStats] = useState({}); 
  setBackground("App-background2")  
  useEffect(() => {
    async function fetchStats() {
      const response = await fetch(`/scores`);
      const stats = await response.json();  
      console.log(stats)      
      setStats(stats);
    }
    if(Object.keys(stats).length === 0) {
      fetchStats()
    }
  }, [stats])

  return (
       
      <div className ="user-div">
        { user ? 
          <div>
            <h3 id="no-hover">{user.name}</h3>
            <Link to='/edit-user'><h3>Edit Account </h3></Link>
            <Link to='/reset-stats'><h3>Reset Stats</h3></Link>
          </div> 
          : ""
        }
        <span className ="stats-div"> 
          <div className ="stat-div">
           <div> {stats.win_percentage}</div>
            Win Percentage
          </div>
          <div className ="stat-div">
          <div>{stats.total_wins}</div>
            Total Wins
          </div>
        </span>
      </div>
   
  )
}

export default UserStatPage;