import React from "react";
import classes from "./Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Kemal chat</span>
      <div className={classes.user}>
        <img
          src="https://howtodrawforkids.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/13-how-to-draw-a-Person.jpg.webp"
          alt=""
        />
        <span>Kemal</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
