import classes from "./SignUp.module.css"
import { useRef } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

export function SignUp(){

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
      });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),});
    
    const onSubmitHandler = (data) => {
            console.log({ data });
            reset();
        };
    

    
    
    return (
        <>
            <form className={classes.signUpForm} onSubmit={handleSubmit(onSubmitHandler)}>
                <div className={classes.signUpContainer}>
                    <p className={classes.signUpText}>Login</p>
                    <input className={classes.signUpInput} {...register("email")} placeholder="email" type="email" required />
                    <p className={classes.signUpText}>Password</p>
                    <input className={classes.signUpInput}  {...register("password")}
                        placeholder="password"
                        type="password"
                        required
                        />
                    <p>{errors.password?.message}</p>
                    <p className={classes.signUpText}>Confirm password</p>
                    <input className={classes.signUpInput}  {...register("password")}
                        placeholder="confirm password"
                        type="password"
                        required
                        />
                    <p>{errors.password?.message}</p>
                    <p>First name</p>
                    <input placeholder="Name" />
                    <p>Second name</p>
                    <input placeholder="Surname" type="Surname"/>
                    <p>Date of birth</p>
                    <input type="Date" />
                    {/* <Button onclick={hello}>Hueta</Button> */}
                    <button placeholder="dd.mm.yyyy" type="submit">Register</button>
                    <Link to="/logIn">Already signed up? Sign In</Link>
                </div>
            </form>
        </>
    )
}