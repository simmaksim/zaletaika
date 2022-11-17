import classes from "./LoginPage.module.css"
import Button from "../UI/Button/Button"
import { useRef } from "react"

export function LoginPage(){
    const login = useRef()
    
    const hello = () => {
        console.log("HEUEUE")
        console.log(login.current.value)
        if(!login.current.value) {
            alert('pidor');
        }
    }

    return (
            <div className={classes.loginForm}>
                <div className={classes.loginContainer}>
                    <h2 className={classes.loginText}>Login</h2>
                    <input className={classes.loginInput} placeholder="Enter your login" ref={login} />
                    <h2 className={classes.loginText}>Password</h2>
                    <input className={classes.loginInput} placeholder="Enter your password"/>
                    <button onClick={hello}>hueta</button>
                </div>
            </div>
    )
}