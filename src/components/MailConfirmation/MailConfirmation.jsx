import classes from "./MailConfirmation.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export function MailConfirmation() {
  const navigate = useNavigate("/resetingpassword");

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(formState);
  const onSubmitHandler = (data) => {
    navigate("/tokenconfrimation");
    console.log({ data });
    reset();
  };
  return (
    <form className={classes.loginForm}>
      <div className={classes.loginContainer}>
        <h2 className={classes.loginText}>Enter email</h2>
        <input
          className={classes.loginInput}
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}
        <button onClick={handleSubmit(onSubmitHandler, console.log)}>
          Send code
        </button>
      </div>
    </form>
  );
}
