import { useState } from "react";
import LookoutLogo from '../images/LookoutLogo.png'
import SignInBackground from '../images/SignInBackground.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function SignUpForm({ setUser, setErrors, errors }) {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${SignInBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the container takes up the entire viewport height
    display: 'flex',
    alignItems: 'center', // Vertically center the form
    justifyContent: 'center', // Horizontally center the form
    padding: '20px', // Add some padding around the form
  };

  function handleSubmit(e) {
    e.preventDefault();
    
    // Basic validation checks
    if (!name || !password || !email) {
      setErrors(["Please fill in all fields"]);
      return;
    }

    const userData = {
      name,
      password,
      email
    };

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((r) => {
      if (r.status === 201) {
        r.json().then(userOBJ => {
          setUser(userOBJ);
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors([err.errors]));

        setTimeout(() => {
          setErrors([]);
        }, 5000);
      }
    });
  }

  return (
    <div className="container" style={backgroundStyle}>     
    <form onSubmit={handleSubmit} className="form">
      <img className="lookoutImageForm" alt="lookoutLogo" src={LookoutLogo} />
      {Array.isArray(errors) && errors.map((err) => (
        <p key={err} style={{ color: "red" }}>
          {err}
        </p>
      ))}
      <div className="title">Sign Up To Plan Your Next Hike!</div>
      <label htmlFor="name"></label>
      <input
        placeholder="User Name"
        className="input-container"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password"></label>
      <input
        placeholder="Password"
        className="input-container"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="email"></label>
      <input
        placeholder="Email Address"
        className="input-container"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="submit">Submit</button>
      <div className="subtitle">Have An Account Already? <Link to="/login"> Log In!</Link></div>
    </form>
    </div>
  );
}

export default SignUpForm;