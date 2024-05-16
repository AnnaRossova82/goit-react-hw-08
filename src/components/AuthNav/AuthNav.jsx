import { NavLink } from 'react-router-dom';
import css from "./AuthNav.module.css";

const AuthNav = () => (
  <nav>
    <NavLink className={css.link} to="/register">Register</NavLink>
    <NavLink className={css.link} to="/login">Login</NavLink>
  </nav>
);

export default AuthNav;