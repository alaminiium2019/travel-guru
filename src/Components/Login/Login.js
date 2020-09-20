import React, { useContext, useState } from "react";
import "./Login.css";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import icon from "../../Images/Icon/google.png";
import fbicon from "../../Images/Icon/fb.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { FormGroup } from "@material-ui/core";


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

  const handleFbSignIn = () => {
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbprovider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setNewUser(newUserInfo);
      });
  };

  return (
    <Container>
      <br></br>
      <div>
        <div
          style={{ margin: "auto", width: "500px", border: "1px solid black" }}
        >
          <form className="p-4" onSubmit={handleSubmit}>
            {newUser ? <h3>Create an account</h3> : <h3>Login</h3>}
            <br></br>
            {newUser && (
              <div>
                <FormGroup>
                  <TextField
                    type="text"
                    name="username"
                    onBlur={handleBlur}
                    placeholder="Your Name"
                  ></TextField>
                </FormGroup>
                <br></br>
                <FormGroup>
                  <TextField
                    type="text"
                    placeholder="your first name"
                  ></TextField>
                  <br></br>
                </FormGroup>
              </div>
            )}
            <FormGroup>
              <TextField
                type="text"
                name="email"
                onBlur={handleBlur}
                placeholder="username or email"
              ></TextField>
            </FormGroup>
            <br></br>
            <FormGroup>
              <TextField
                type="password"
                name="password"
                onBlur={handleBlur}
                placeholder="Password"
              ></TextField>
            </FormGroup>
            <FormGroup>
              {newUser && (
                <TextField
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  label="Confirm Password"
                ></TextField>
              )}
            </FormGroup>
            <br></br>
            <FormGroup>
              <TextField
                style={{ backgroundColor: "#ffbb00" }}
                type="submit"
                value={newUser ? "Create an account" : "Sign In"}
              ></TextField>
            </FormGroup>
            <div className="pt-2 text-center">
              {newUser ? (
                <p>
                  Already have an account?
                  <span onClick={() => setNewUser(!newUser)}> Login</span>
                </p>
              ) : (
                <p>
                  Don't have account?{" "}
                  <span onClick={() => setNewUser(!newUser)}>
                    Create an account
                  </span>
                </p>
              )}
            </div>
          </form>
          <p>{loggedInUser.error}</p>
          {loggedInUser.success && (
            <p>User{newUser ? "Created" : "loggedIn"} successfully</p>
          )}
        </div>
        <br></br>
        <div style={{ margin: "auto", width: "380px" }}>
          <h4>
            <span>or</span>
          </h4>

          <button className="ggIn p-1" onClick={handleFbSignIn}>
            <img className="ggSign" src={fbicon} alt="" />
            continue with Facebook
          </button>
          <button className="fbIn mt-3 p-1" onClick={handleGoogleSignIn}>
            <img className="fbSign" src={icon} alt="" />
            continue with Google
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Login;
