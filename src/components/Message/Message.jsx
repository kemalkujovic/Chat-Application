import React from "react";
import classes from "./Message.module.css";
const Message = () => {
  return (
    <div className={classes.message}>
      <div className={classes.messageInfo}>
        <img src="https://howtodrawforkids.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/13-how-to-draw-a-Person.jpg.webp" />
        <span>just now</span>
      </div>
      <div className={classes.messageContent}>
        <p>Hello</p>
        {/* <img
          src="https://howtodrawforkids.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/13-how-to-draw-a-Person.jpg.webp"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
