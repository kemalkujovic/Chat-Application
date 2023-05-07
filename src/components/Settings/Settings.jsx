import React, { useContext } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import classes from "./Settings.module.css";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import { SettingsContext } from "../../contex/SettingsContext";
const Settings = () => {
  const { toggleSettings } = useContext(SettingsContext);
  return (
    <div className={classes.styleIconWrapper}>
      <SettingsIcon onClick={toggleSettings} />
    </div>
  );
};

export default Settings;
