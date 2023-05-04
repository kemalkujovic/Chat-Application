import React, { useContext } from "react";
import classes from "./Sidebar.module.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
import { SidebarContext } from "../../contex/SidebarContext";
const Sidebar = () => {
  const { isSidebarVisible } = useContext(SidebarContext);
  return (
    <div
      className={`${isSidebarVisible ? classes.hideSideBar : classes.sidebar}`}
    >
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
