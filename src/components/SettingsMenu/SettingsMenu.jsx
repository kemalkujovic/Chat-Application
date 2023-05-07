import React, { useContext } from "react";
import classes from "./SettingsMenu.module.css";
import { AuthContext } from "../../contex/AuthContext";
import EditIcon from "@mui/icons-material/Edit";
const SettingsMenu = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={classes.settingsContainer}>
      <div className={classes.settingsWrapper}>
        <div className={classes.infoSettings}>
          <p>Name:</p>
          <p>{currentUser.displayName}</p>
        </div>
        <EditIcon />
      </div>
      <div className={classes.settingsWrapper}>
        <div className={classes.infoSettings}>
          <p>Email:</p>
          <p>{currentUser.email}</p>
        </div>
        <EditIcon />
      </div>
    </div>
  );
};

export default SettingsMenu;
