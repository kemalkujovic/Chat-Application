import React, { useContext, useState } from "react";
import classes from "./SettingsMenu.module.css";
import { AuthContext } from "../../contex/AuthContext";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CloseIcon from "@mui/icons-material/Close";

const SettingsMenu = () => {
  const { currentUser } = useContext(AuthContext);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const editIconStyle = {
    cursor: "pointer",
  };
  const editNameHandler = () => {
    setEditName(!editName);
  };
  const editEmailHandler = () => {
    setEditEmail(!editEmail);
  };

  return (
    <div className={classes.settingsContainer}>
      <div className={classes.settingsWrapper}>
        <div className={classes.infoSettings}>
          <p>Name:</p>
          {!editName && <p>{currentUser.displayName}</p>}
          {editName && <input type="text" placeholder="New Name" />}
        </div>
        {!editName && (
          <EditIcon style={editIconStyle} onClick={editNameHandler} />
        )}
        {editName && (
          <div>
            <SaveAsIcon style={editIconStyle} />
            <CloseIcon onClick={editNameHandler} />
          </div>
        )}
      </div>
      <div className={classes.settingsWrapper}>
        <div className={classes.infoSettings}>
          <p>Email:</p>
          {!editEmail && <p>{currentUser.email}</p>}
          {editEmail && <input type="text" placeholder="New E-mail" />}
        </div>
        {!editEmail && (
          <EditIcon style={editIconStyle} onClick={editEmailHandler} />
        )}
        {editEmail && (
          <div>
            <SaveAsIcon style={editIconStyle} />
            <CloseIcon onClick={editEmailHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsMenu;
