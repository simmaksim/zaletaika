import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.head}>
      <img
        src={
          "https://st2.depositphotos.com/2498595/6811/v/450/depositphotos_68114243-stock-illustration-joystick-icon.jpg"
        }
        alt="VLAD HUI"
        width="80"
        height="80"
      />
      <div></div>
      <Link to="/" className={classes.linkHead}>
        Главная
      </Link>
      <Link to="/exercises">Упражнения</Link>
      <Link to="/calculator">Калькулятор</Link>
      <Link to="/doctor">Тренер</Link>
      <Link to="/menu">Меню</Link>
      <Link to="/logIn">Войти</Link>
    </header>
  );
}
