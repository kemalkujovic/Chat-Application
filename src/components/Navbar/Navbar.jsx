import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../contex/AuthContext";
import defaultLogo from "../../img/default.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Settings from "../Settings/Settings";

const Navbar = () => {
  const styleIcon = {
    cursor: "pointer",
  };

  let dName;
  const { currentUser } = useContext(AuthContext);
  const name = currentUser.displayName;

  if (name) {
    dName = name.charAt().toUpperCase() + name.slice(1);
  } else {
    dName = name;
  }

  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Kemal Chat</span>
      <div className={classes.user}>
        <div className={classes.navbarDisplayName}>
          <img
            src={currentUser.photoURL}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultLogo;
            }}
            alt="DefaultLogo"
          />
          <span>{dName}</span>
        </div>
        <Settings />
        <LogoutIcon style={styleIcon} onClick={() => signOut(auth)}>
          Logout
        </LogoutIcon>
      </div>
    </div>
  );
};

export default Navbar;
