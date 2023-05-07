import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import classes from "./Settings.module.css";
const Settings = () => {
  const handleIcon = () => {};

  return (
    <div className={classes.styleIconWrapper}>
      <SettingsIcon onClick={handleIcon} />
    </div>
  );
};

export default Settings;
