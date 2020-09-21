import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Login from "./Components/Login/Login";
import "firebase/auth";
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";
import CoxsBazarBook from "./Components/CoxsBazarBook/CoxsBazarBook";
import CoxsBazarHotel from "./Components/CoxsBazar/CoxsBazarHotel";
import SundorBanBook from "./Components/SundorBanBook/SundorBanBook";
import SreemangalBook from "./Components/SreeMangal/SreemangalBook";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <Route path="/coxsbazarBook">
            <CoxsBazarBook></CoxsBazarBook>
          </Route>
          <PrivateRoute path="/coxsBazarHotel">
            <CoxsBazarHotel></CoxsBazarHotel>
          </PrivateRoute>
          <Route path="/sundarbanBook">
            <SundorBanBook></SundorBanBook>
          </Route>
          <Route path="/sreemangolBook">
            <SreemangalBook></SreemangalBook>
          </Route>
          <Route path="/">
            <News></News>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
