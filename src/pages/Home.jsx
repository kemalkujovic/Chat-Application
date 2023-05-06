import React, { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";
import classes from "./Home.module.css";
import DefaultChat from "../components/Chat/DefaultChat";
import { CreateChatContext } from "../contex/CreateChatContext";

const Home = () => {
  const { isChatVisible } = useContext(CreateChatContext);

  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <Sidebar />
        {!isChatVisible ? <DefaultChat /> : <Chat />}
      </div>
    </div>
  );
};

export default Home;
