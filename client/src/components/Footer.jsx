import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FootImage from '../images/FootImage.png';
import { UserContext } from '../App';

function Footer() {
  const { user, setUser } = useContext(UserContext);

  const logout = (e) => {
    e.preventDefault();
    fetch('/logout', {
      method: 'DELETE',
    })
      .then((r) => {
        if (r.status === 204) {
          setUser(null);
        } else {
          // Handle errors if needed
          // const error = r.json();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <footer id="links">
      <h1 className="foot">
        <img className="lookoutImageFooter" alt="lookoutLogo" src={FootImage}></img>
        <div className="footer-content ">
          <div className="LookoutTrails-footer">
            <strong>LOOKOUT TRAILS</strong>
          </div>
          <Link className='footer-links' to="/">
            <strong >Hike a Trail</strong>
          </Link>
          <Link className='footer-links' to="/create-trail">
            <strong >Create a Trail</strong>
          </Link>
          {user ? (
            <>
              <Link className='footer-links' to="/user"><strong>View Profile</strong></Link>
              <Link className='footer-links' to="/signup" onClick={logout}>
                <strong>Logout</strong>
              </Link>
            </>
          ) : (
            <Link className='footer-links' to="/login"><strong>Login</strong></Link>
          )}
        </div>
      </h1>
    </footer>
  );
}

export default Footer;