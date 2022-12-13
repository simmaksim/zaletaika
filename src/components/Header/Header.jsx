import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.head}>
      <Link to="/">Main page</Link>
      <Link to="/exercises">Exercises</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/doctor">Doctor</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/logIn">Login</Link>
    </header>
  );
}
