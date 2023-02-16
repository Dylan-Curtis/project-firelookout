import { Routes, Route} from 'react-router-dom'
// import { Switch } from "react-router"


import Header from './components/Header'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
 
  return (
    <div>
      <Header />
      <main>
        {/* <Switch> */}
          <Routes>
            <Route index element={<Dashboard /> } />         
         </Routes>
        {/* </Switch> */}
      </main>
      <footer>
      
      </footer>
    </div>
  )
}

export default App;

