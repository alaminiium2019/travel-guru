import React, { useContext, useState } from "react";
import "./Login.css";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import icon from "../../Images/Icon/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { FormGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [newUser, setNewUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleGoogleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = { name: displayName, email, isSignIn: true };
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //HandleBlur
  const handleBlur = (e) => {
    //console.log(e.target.value,e.target.name);
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(isFieldValid);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...loggedInUser };
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo);
    }
  };
  //Handle submit
  const handleSubmit = (e) => {
    if (newUser && loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          loggedInUser.email,
          loggedInUser.password
        )
        .then((res) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserName(loggedInUser.name);
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }

    //New user password
    if (!newUser && loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          console.log("sign in user info", res.loggedInUser);
        })
        .catch(function (error) {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }

    e.preventDefault();
  };
  //currentuser
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container style={{ margin: "auto", width: "400px" }}>
      <div className="loginApp">
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {newUser && (
              <input
                type="text"
                name="username"
                onBlur={handleBlur}
                placeholder="Your Name"
              ></input>
            )}
            <FormGroup>
              <input
                type="text"
                name="email"
                onBlur={handleBlur}
                placeholder="Email"
              ></input>
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                name="password"
                onBlur={handleBlur}
                placeholder="Password"
              ></input>
            </FormGroup>
            <FormGroup>

                <input
                  type="submit"
                  value={newUser ? "Sign up" : "Sign In"}
                ></input>
            </FormGroup>

            {/* <!--Don't touch--> */}
            <p>
              Don't have an account? <Link to="/signup">Create an account</Link>
            </p>

            <br></br>

            <button className="googleIn" onClick={handleGoogleSignIn}>
              <img className="googleSign" src={icon} alt=""></img>continue with
              Google
            </button>
          </form>
          <input
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
          ></input>
          <label for="newUser">New User Sign Up</label>
          <p>{loggedInUser.error}</p>
          {loggedInUser.success && (
            <p>User{newUser ? "Created" : "loggedIn"} successfully</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Login;
