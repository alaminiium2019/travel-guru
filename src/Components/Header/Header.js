import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../Images/Logo.png";
import Container from "@material-ui/core/Container";
import { UserContext } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOut = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        setLoggedInUser(signedOut);
      })
      .catch((error) => console.log(error));
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="header">
      <img src={Logo} alt="" />
      <input
        className="searchBox"
        type="search"
        placeholder="Search your Destination"
      ></input>
      <Link to="/news">News</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>

      {loggedInUser.name}
      {!loggedInUser.name ? (
        <button>
          <Link to="/login">Login</Link>
        </button>
      ) : (
        <button onClick={handleSignOut}>Sign out</button>
      )}
    </div>
  );
};

export default Header;
