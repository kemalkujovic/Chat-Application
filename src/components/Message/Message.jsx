import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Message.module.css";
import { AuthContext } from "../../contex/AuthContext";
import { ChatContext } from "../../contex/ChatContext";
import defaultLogo from "../../img/default.png";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [imageSrc, setImageSrc] = useState(
    message.senderId === currentUser.uid
      ? currentUser.photoURL
      : data.user.photoURL
  );

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  function handleImageError() {
    setImageSrc(defaultLogo);
  }
  return (
    <div
      ref={ref}
      className={`${classes.message} ${
        message.senderId === currentUser.uid && classes.owner
      } `}
    >
      <div className={classes.messageInfo}>
        <img src={imageSrc} onError={handleImageError} />
        <span>just now</span>
      </div>
      <div className={classes.messageContent}>
        {message.text && <p>{message.text}</p>}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
