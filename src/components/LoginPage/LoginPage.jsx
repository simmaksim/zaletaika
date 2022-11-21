import classes from "./LoginPage.module.css"
// import Button from "../UI/Button/Button"
import { useRef } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

export function LoginPage(){
   
    
    
    

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
            <form className={classes.loginForm} onSubmit={handleSubmit(onSubmitHandler)}>
                <div className={classes.loginContainer}>
                    <h2 className={classes.loginText}>Login</h2>
                    <input className={classes.loginInput} {...register("email")} placeholder="email" type="email" required />
                    <h2 className={classes.loginText}>Password</h2>
                    <input className={classes.loginInput}  {...register("password")}
                        placeholder="password"
                        type="password"
                        required
                        />
                    <p>{errors.password?.message}</p>
                    
                    {/* <Button onclick={hello}>Hueta</Button> */}
                    <button type="submit">Sign in</button>
                    <Link to="/registration">SignUp</Link>
                    <a href="">Forgot password?</a>
                </div>
            </form>
        </>
    )
}