import React from "react";

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
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
