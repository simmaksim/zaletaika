import classes from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth";
import { Context } from "../../App";
import { useContext } from "react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export function LoginPage() {
  const navigate = useNavigate();
  const [doctor, isDoctor] = useContext(Context);
  // isDoctor(true);
  // console.log(doctor);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    const user = await authApi.signIn(data);
    if (user.role === 'DOCTOR') {
      isDoctor(true);
    } else {
      isDoctor(false);
    }
    console.log(doctor);
    //return user;

    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.stringify(user.role));
    // if (JSON.stringify(user.role) === "DOCTOR") isDoctor(true);
    // else isDoctor(false);
    navigate("/");
  };

  return (
    <form
      className={classes.loginForm}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={classes.loginContainer}>
        <h2 className={classes.loginText}>Login</h2>
        <input
          className={classes.loginInput}
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        {errors.email && <p>{errors.email.message}</p>}
        <h2 className={classes.loginText}>Password</h2>
        <input
          className={classes.loginInput}
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button onClick={handleSubmit(onSubmitHandler)}>Sign in</button>
        <Link to="/registration">SignUp</Link>
        <Link to="/mailconfirmation">Forgot password?</Link>
      </div>
    </form>
  );
}
