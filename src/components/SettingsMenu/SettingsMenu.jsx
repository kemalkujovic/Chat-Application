import React, { useContext } from "react";
import classes from "./SettingsMenu.module.css";
import { AuthContext } from "../../contex/AuthContext";
const SettingsMenu = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={classes.settingsContainer}>
      <div>
        <p>Name</p>
        <div>{currentUser.displayName}</div>
      </div>
      <div>
        <p>Email</p>
        <div>{currentUser.email}</div>
      </div>
    </div>
  );
};

export default SettingsMenu;
