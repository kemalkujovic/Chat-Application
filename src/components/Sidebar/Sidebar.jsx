import React from "react";
import classes from "./Sidebar.module.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
