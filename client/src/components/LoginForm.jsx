import { useState } from 'react'
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
            <form onSubmit={handleSubmit}>
             
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            
             
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                      
             
                {errors.map((err) => (
                    <p key={err} style={{ color: "red" }}>
                    {err}
                    </p>
                ))}
                <button type="submit">Submit</button>
            </form>
          );
        }
        
        export default LoginForm;
        