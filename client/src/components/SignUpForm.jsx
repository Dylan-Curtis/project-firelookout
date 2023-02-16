import { useState } from "react";

function SignUpForm({ onLogin }) {
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();        
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            password,
            password_confirmation: passwordConfirmation,
            email: email,            
          }),
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />          
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
             <input
              type="test"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="current-password"
            />
         
            <label htmlFor="password">Password Confirmation</label>
            <input
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
            />
        </form>
            
            )
}

            export default SignUpForm