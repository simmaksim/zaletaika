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
      <Link to="/" className={classes.linkHead}>Главная</Link>
      <Link to="/exercises">Упражнения</Link>
      <Link to="/calculator">Калькулятор</Link>
      <Link to="/doctor">Доктор</Link>
      <Link to="/menu">Меню</Link>
      <Link to="/logIn">Войти</Link>
    </header>
  );
}
