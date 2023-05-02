import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Kemal chat</span>
      <div className={classes.user}>
        <img src="" alt="" />
        <span>Kemal</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
