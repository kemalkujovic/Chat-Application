import React, { useContext } from "react";
import classes from "./Message.module.css";
import { AuthContext } from "../../contex/AuthContext";
import { ChatContext } from "../../contex/ChatContext";
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className={`${classes.message} ${classes.owner}`}>
      {/* <div className={classes.messageInfo}>
        <img src={} />
        <span>just now</span>
      </div>
      <div className={classes.messageContent}>
        <p>Hello</p>
        <img
          src={}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Message;
