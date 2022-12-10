import classes from "./ResetingPassword.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export function ResetingPassword() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    password: yup.string().min(8).max(32).required(),
    cpassword: yup
      .string()
      .min(8)
      .max(32)
      .oneOf([yup.ref("password")], "Password do not match"),
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
    navigate("/logIn");
    console.log({ data });
    alert("Password changed successfully");
    reset();
  };

  console.log(errors);

  return (
    <form
      className={classes.resetForm}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={classes.resetContainer}>
        <p className={classes.resetText}>New password</p>
        <input
          className={classes.resetInput}
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        <p>{errors.password?.message}</p>
        <p className={classes.signUpText}>Confirm password</p>
        <input
          className={classes.signUpInput}
          {...register("cpassword")}
          placeholder="confirm password"
          type="password"
          required
        />

        {errors.cpassword && <p>{errors.cpassword.message}</p>}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
