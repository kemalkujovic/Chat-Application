import React, { useContext, useState } from "react";
import classes from "./Chat.module.css";
import Cam from "../../img/cam.jpg";
import Add from "../../img/add.jpg";
import More from "../../img/more.jpg";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import { ChatContext } from "../../contex/ChatContext";
import { SidebarContext } from "../../contex/SidebarContext";
import defaultLogo from "../../img/default.png";
const Chat = () => {
  const { data } = useContext(ChatContext);
  const { isSidebarVisible, toggleSidebar } = useContext(SidebarContext);

  return (
    <div className={isSidebarVisible ? classes.hideChat : classes.chat}>
      <div className={`${classes.chatInfo}`}>
        <div className={classes.wrapperChatLogo}>
          <img
            src={data.user.photoURL}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultLogo;
            }}
          />
          <span>{data.user?.displayName}</span>
        </div>
        <div className={classes.chatIcons}>
          <img src={Cam} alt="1" />
          <img src={Add} alt="1" />
          <img src={More} alt="1" onClick={toggleSidebar} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
