import React from "react";
import classes from "./Chats.module.css";
const Chats = () => {
  return (
    <div className={classes.chats}>
      <div className={classes.userChat}>
        <img src="https://howtodrawforkids.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/13-how-to-draw-a-Person.jpg.webp" />
        <div className={classes.userChatInfo}>
          <span>Legi</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
