import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.head}>
      
      <img
        src={
          "https://sun9-80.userapi.com/impg/pjDIcOC2bAihJ-i4GgEz9J9JGsRdvNnmlSs9FA/-7oij3nCgHs.jpg?size=1088x1090&quality=95&sign=318fa35d38249734d4fe38c6808f01b2&type=album"
        }
        alt="VLAD HUI"
        width="80"
        height="80"
      />
      <div>
      </div>
      <Link to="/" className={classes.linkHead}>Main page</Link>
      <Link to="/exercises">Exercises</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/doctor">Doctor</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/logIn">Login</Link>
    </header>
  );
}
