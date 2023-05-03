import React, { useContext, useState } from "react";
import classes from "./Input.module.css";
import Img from "../../img/img.jpg";
import Attach from "../../img/attach.jpg";
import { AuthContext } from "../../contex/AuthContext";
import { ChatContext } from "../../contex/ChatContext";
const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = () => {
    if (img) {
    } else {
    }
  };
  return (
    <div className={classes.input}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className={classes.send}>
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" onChange={(e) => setImg(e.traget.file[0])} />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
