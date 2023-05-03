import React, { useContext, useState, useEffect } from "react";
import classes from "./Messages.module.css";
import Message from "../Message/Message";
import { ChatContext } from "../../contex/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className={classes.messages}>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
