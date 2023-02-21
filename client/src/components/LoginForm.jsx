import {Link} from 'react-router-dom'
import {useState} from 'react'
import LookoutLogo from '../images/LookoutLogo.png'
function LoginForm({ onLogin, setErrors, errors }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();       
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then((r) => {           
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.error));
            }
          });
        }
        return (
          <>
        
            <form onSubmit={handleSubmit} class= "form">
            <img  className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>
              <div class="title">Welcome Back!</div>
             
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  class="input-container"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                /> 
            
             
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  class="input-container"
                  autoComplete="current-password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                /> 
                      
             
                {errors && errors.map((err) => (
                    <p key={err} style={{ color: "red" }}>
                    {err}
                    </p>
                ))}
                <button type="submit" class="submit">Submit</button>
                <div class="subtitle">Don't Have an Account?<Link to="signup"> Sign Up!</Link></div>
            </form>
            </>
          );
        }
        
        export default LoginForm;
        