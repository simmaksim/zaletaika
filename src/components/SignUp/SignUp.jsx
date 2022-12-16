import classes from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { authApi } from "../../api/auth";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmationPassword: yup
    .string()
    .min(8)
    .max(32)
    .oneOf([yup.ref("password")], "Password do not match"),
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required(),
  lastName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required(),
  username: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required(),
  birthDate: yup.string().required(),
});

const schemaPragnancy = yup.object().shape({
  dateOfPregnancy: yup.string().required(),
});

export function SignUp() {
  const [doctor, isDoctor] = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(doctor ? schema : schema.concat(schemaPragnancy)),
  });

  //const [doctor, isDoctor] = useState(false);

  const onSubmitHandler = async ({ role, ...rest }) => {
    const user = await authApi.signUp({
      ...rest,
      role: role ? "DOCTOR" : "PATIENT",
    });
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  useEffect(() => {
    doctor && unregister("dateOfPregnancy");
  }, [doctor]);

  //let context = useContext(Context);

  console.log(errors);
  return (
    <div className={classes.cont}>
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
            {...register("confirmationPassword")}
            placeholder="confirm password"
            type="password"
            required
          />
          {errors.cpassword && <p>{errors.cpassword.message}</p>}
          <p>Username</p>
          <input placeholder="Name" {...register("username")} />
          {errors.firstName && <p>{errors.username.message}</p>}
          <p>First name</p>
          <input placeholder="Name" {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
          <p>Second name</p>
          <input placeholder="Surname" {...register("lastName")} />
          {errors.secondName && <p>{errors.secondName.message}</p>}
          <p>Date of birth</p>
          <input type="Date" {...register("birthDate")} />
          <button placeholder="dd.mm.yyyy" type="submit">
            Register
          </button>
          {/* <button placeholder="dd.mm.yyyy" type="submit">
          Register as a doctor
        </button> */}
          <div>
            <input
              type="checkbox"
              id="doc"
              onClick={() => isDoctor(!doctor)}
              {...register("role")}
            />
            <label htmlFor="doc"> I am doctor</label>
          </div>
          {doctor ? (
            <select {...register("occupation")}>
              <option value="Ginekolog">Гинеколог</option>
              <option value="Akusher">Акушер</option>
              <option value="Feldsher">Фельдшер</option>
            </select>
          ) : (
            <div>
              <p>Enter date of pregnancy</p>
              <input type="Date" {...register("dateOfPregnancy")} />
            </div>
          )}

          <Link to="/logIn">Already signed up? Sign In</Link>
        </div>
      </form>
    </div>
  );
}
