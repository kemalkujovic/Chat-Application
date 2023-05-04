import React, { useContext } from "react";
import classes from "./Chat.module.css";
import Cam from "../../img/cam.jpg";
import Add from "../../img/add.jpg";
import More from "../../img/more.jpg";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import { ChatContext } from "../../contex/ChatContext";
import { SidebarContext } from "../../contex/SidebarContext";
const Chat = ({ showHandler }) => {
  const { data } = useContext(ChatContext);
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className={classes.chat}>
      <div
        className={`${toggleSidebar ? classes.chatInfo : classes.hideChatInfo}`}
      >
        <span>{data.user?.displayName}</span>
        <div className={classes.chatIcons}>
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" onClick={toggleSidebar} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
