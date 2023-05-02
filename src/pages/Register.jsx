import React from "react";
import classes from "./Register.module.css";
import Add from "../img/addAvatar.jpg";
const Register = () => {
  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <span className={classes.logo}>Kemal Chat</span>
        <span className={classes.title}>Register</span>
        <form>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
