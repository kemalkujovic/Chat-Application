import React from "react";
import classes from "./Input.module.css";
import Img from "../../img/img.jpg";
import Attach from "../../img/attach.jpg";
const Input = () => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="Type something..." />
      <div className={classes.send}>
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
