import React from "react";
import classes from "./Chat.module.css";
import Cam from "../../img/cam.jpg";
import Add from "../../img/add.jpg";
import More from "../../img/more.jpg";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
const Chat = () => {
  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>Kemal</span>
        <div className={classes.chatIcons}>
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
