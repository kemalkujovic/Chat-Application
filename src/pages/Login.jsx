import React from "react";
import classes from "./Register.module.css";
import Add from "../img/addAvatar.jpg";
const Login = () => {
  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <span className={classes.logo}>Kemal Chat</span>
        <span className={classes.title}>Login</span>
        <form>
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
