import React from "react";
import classes from "./Search.module.css";
const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.searchForm}>
        <input type="text" placeholder="Find a user" />
      </div>
      <div className={classes.userChat}>
        <img src="https://howtodrawforkids.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/13-how-to-draw-a-Person.jpg.webp" />
        <div className={classes.userChatInfo}>
          <span>Legi</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
