import React, { useContext, useEffect, useRef } from "react";
import classes from "./Message.module.css";
import { AuthContext } from "../../contex/AuthContext";
import { ChatContext } from "../../contex/ChatContext";
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${classes.message} ${
        message.senderId === currentUser.uid && classes.owner
      } `}
    >
      <div className={classes.messageInfo}>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        />
        <span>just now</span>
      </div>
      <div className={classes.messageContent}>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
