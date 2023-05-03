import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../contex/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Kemal chat</span>
      <div className={classes.user}>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
