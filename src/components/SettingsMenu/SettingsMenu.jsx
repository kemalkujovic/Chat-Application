import { updateEmail, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import React, { useContext, useRef, useState } from "react";
import classes from "./SettingsMenu.module.css";
import { AuthContext } from "../../contex/AuthContext";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CloseIcon from "@mui/icons-material/Close";
import { SettingsContext } from "../../contex/SettingsContext";

const SettingsMenu = () => {
  const { currentUser } = useContext(AuthContext);
  const { setName } = useContext(SettingsContext);

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const inputRef = useRef(null);
  const emailRef = useRef(null);

  const editIconStyle = {
    cursor: "pointer",
  };
  const editNameHandler = () => {
    setEditName(!editName);
  };
  const editEmailHandler = () => {
    setEditEmail(!editEmail);
  };

  const updateName = () => {
    const displayName = inputRef.current.value;
    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .then(() => {
        setName(displayName);
        setEditName(!editName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateEmail = () => {
    const email = emailRef.current.value;
    updateEmail(auth.currentUser, email)
      .then(() => {
        setEditEmail(!editEmail);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.settingsContainer}>
      <div className={classes.settingsWrapper}>
        <div className={classes.infoSettings}>
          <p>Name:</p>
          {!editName && <p>{currentUser.displayName}</p>}
          {editName && (
            <input type="text" placeholder="New Name" ref={inputRef} />
          )}
        </div>
        {!editName && (
          <EditIcon style={editIconStyle} onClick={editNameHandler} />
        )}
        {editName && (
          <div>
            <SaveAsIcon style={editIconStyle} onClick={updateName} />
            <CloseIcon onClick={editNameHandler} />
          </div>
        )}
      </div>
      <div className={classes.settingsWrapper}>
        <div className={classes.infoSettings}>
          <p>Email:</p>
          {!editEmail && <p>{currentUser.email}</p>}
          {editEmail && (
            <input type="text" placeholder="New E-mail" ref={emailRef} />
          )}
        </div>
        {!editEmail && (
          <EditIcon style={editIconStyle} onClick={editEmailHandler} />
        )}
        {editEmail && (
          <div>
            <SaveAsIcon style={editIconStyle} onClick={handleUpdateEmail} />
            <CloseIcon onClick={editEmailHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsMenu;
