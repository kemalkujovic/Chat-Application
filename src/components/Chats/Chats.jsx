import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contex/AuthContext";
import classes from "./Chats.module.css";
import { db } from "../../firebase";
import { ChatContext } from "../../contex/ChatContext";
import { SidebarContext } from "../../contex/SidebarContext";
import defaultLogo from "../../img/default.png";
import { CreateChatContext } from "../../contex/CreateChatContext";
const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const { toggleChat } = useContext(CreateChatContext);
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

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const funckijad = () => {
    toggleSidebar();
  };
  const handleClick = (u) => {
    handleSelect(u);
    funckijad();
    toggleChat();
  };
  return (
    <div className={classes.chats}>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className={classes.userChat}
            key={chat[0]}
            onClick={() => {
              handleClick(chat[1].userInfo);
            }}
          >
            {chat[1]?.userInfo?.photoURL && (
              <img
                src={chat[1]?.userInfo?.photoURL}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultLogo;
                }}
                alt="DefaultLogo"
              />
            )}
            <div className={classes.userChatInfo}>
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
