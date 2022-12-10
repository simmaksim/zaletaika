import classes from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    navigate();
    console.log({ data });
    reset();
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
