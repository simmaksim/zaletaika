import classes from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

export function SignUp() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    cpassword: yup
      .string()
      .min(8)
      .max(32)
      .oneOf([yup.ref("password")], "Password do not match"),
    firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required(),
    secondName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  console.log(errors);
  return (
    <form
      className={classes.signUpForm}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={classes.signUpContainer}>
        <p className={classes.signUpText}>Login</p>
        <input
          className={classes.signUpInput}
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        {errors.email && <p>{errors.email.message}</p>}
        <p className={classes.signUpText}>Password</p>
        <input
          className={classes.signUpInput}
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        {errors.password && <p>{errors.password.message}</p>}

        <p className={classes.signUpText}>Confirm password</p>
        <input
          className={classes.signUpInput}
          {...register("cpassword")}
          placeholder="confirm password"
          type="password"
          required
        />
        {errors.cpassword && <p>{errors.cpassword.message}</p>}
        <p>First name</p>
        <input placeholder="Name" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <p>Second name</p>
        <input placeholder="Surname" {...register("secondName")} />
        {errors.secondName && <p>{errors.secondName.message}</p>}
        <p>Date of birth</p>
        <input type="Date" />
        <button placeholder="dd.mm.yyyy" type="submit">
          Register
        </button>
        <Link to="/logIn">Already signed up? Sign In</Link>
      </div>
    </form>
  );
}
