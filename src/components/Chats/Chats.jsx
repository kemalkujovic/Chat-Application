import React, { useContext, useEffect, useState } from "react";
import classes from "./Chats.module.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../contex/AuthContext";
const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats));
  return (
    <div className={classes.chats}>
      {Object.entries(chats)?.map((chat) => {
        <div className={classes.userChat} key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} />
          <div className={classes.userChatInfo}>
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Chats;
