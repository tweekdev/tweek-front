import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && (
        <>
          <li>
            <NavLink to="/" exact>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/project/new">ADD PROJECT</NavLink>
          </li>
        </>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <form>
            <button onClick={auth.logout}>LOGOUT</button>
          </form>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
