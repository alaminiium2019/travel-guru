import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Login from "./Components/Login/Login";
import Book from "./Components/Book/Book";
import CoxsBazar from "./Components/TravelPlace/CoxBazar/CoxsBazar";
import * as firebase from "firebase/app";
import "firebase/auth";
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});

  const handleSignOut = () =>{
    firebase.auth().signOut()
    .then(res => {
      const signedOut= {
        displayName:'',
        email:''
      }
      setLoggedInUser(signedOut);
    }).catch(error => console.log(error));
  }


  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
      {/* <button onClick={handleSignOut}>Sign Out</button> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/book">
            <Book></Book>
          </Route>
          <PrivateRoute path="/coxsBazar">
            <CoxsBazar></CoxsBazar>  
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
