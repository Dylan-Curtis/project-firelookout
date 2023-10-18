import {Link} from 'react-router-dom'
import {useState} from 'react'
import LookoutLogo from '../images/LookoutLogo.png'
import { useNavigate } from "react-router-dom";
import SignInBackground from '../images/SignInBackground.png'
function LoginForm({ onLogin, setErrors, errors }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const backgroundStyle = {
      backgroundImage: `url(${SignInBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '67vh',
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px', 
    };

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
              navigate("/");   
            } else {
              r.json().then((err) => setErrors([err.error]));             
            }

            setTimeout(() => {
              setErrors([]);
            }, 5000);
          });
        }
        return (
          <div className="container" style={backgroundStyle}>
        
            <form onSubmit={handleSubmit} class= "form">
            <img  className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo}></img>

               {Array.isArray(errors) &&
            errors.map((err) => (
              <p key={err} style={{ color: 'red' }}>
                {err}
              </p>
            ))}
              <div class="title">Welcome Back!</div>
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
             
                <button type="submit" class="submit">LOG IN</button>
                <div class="subtitle">Don't Have an Account?<Link to="/signup"> Sign Up!</Link></div>
              
                <div className="TOSNotice">
                  By continuing to use Lookout Trails, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy.</strong>  
                </div>
            </form>
            </div>
          );
        }
        
        export default LoginForm;
        