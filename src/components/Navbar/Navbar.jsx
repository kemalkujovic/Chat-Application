import React, { useContext, useState } from "react";
import classes from "./Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../contex/AuthContext";
import defaultLogo from "../../img/default.png";
const Navbar = () => {
  let dName;
  const { currentUser } = useContext(AuthContext);
  const name = currentUser.displayName;
  const [imageSrc, setImageSrc] = useState(currentUser.photoURL);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  if (name) {
    console.log(name.charAt().toUpperCase() + name.slice(1));
    dName = name.charAt().toUpperCase() + name.slice(1);
  } else {
    dName = name;
  }
  function handleImageError() {
    setIsImageLoaded(false);
    setImageSrc(defaultLogo);
  }
  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Kemal Chat</span>
      <div className={classes.user}>
        {isImageLoaded ? (
          <img src={imageSrc} alt="photo" onError={handleImageError} />
        ) : (
          <img src={imageSrc} alt="photo" />
        )}
        <span>{dName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
