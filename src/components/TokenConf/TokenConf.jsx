import classes from "./TokenConf.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  token: yup.string().min(4).max(4).required(),
});

export function TokenConf() {
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
    navigate("/resetingpassword");
    reset();
  };
  return (
    <form
      className={classes.tokenForm}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className={classes.tokenContainer}>
        <h3>Enter 4-bit token send on email</h3>
        <input type="token" placeholder="Enter" {...register("token")}></input>
        {errors.token && <p>{errors.token.message}</p>}
        <button type="submit">Reset password</button>
      </div>
    </form>
  );
}
