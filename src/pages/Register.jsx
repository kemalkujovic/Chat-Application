import React, { useState } from "react";
import classes from "./Register.module.css";
import Add from "../img/addAvatar.jpg";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage, provider } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayName =
      e.target[0].value[0].toUpperCase() + e.target[0].value.slice(1);
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  const signWithGoogle = async () => {
    signInWithPopup(auth, provider).then(async (data) => {
      console.log(data.user.id);
      try {
        await updateProfile(data.user, {
          displayName: data.user.displayName,
          photoURL: data.user.photoURL,
        });
        await setDoc(doc(db, "users", data.user.uid), {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL,
        });

        const userChatsDocRef = doc(db, "userChats", data.user.uid);
        const userChatsDoc = await getDoc(userChatsDocRef);
        if (!userChatsDoc.exists()) {
          await setDoc(doc(db, "userChats", data.user.uid), {});
        }
        navigate("/");
      } catch (error) {
        console.log(error);
        setErr(true);
        setLoading(false);
      }
    });
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <span className={classes.logo}>Kemal Chat</span>
        <span className={classes.title}>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong!</span>}
        </form>
        <GoogleButton onClick={signWithGoogle}>
          Sign in with google
        </GoogleButton>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
