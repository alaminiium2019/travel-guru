import React, { useContext} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../Images/Logo.png";
import Container from '@material-ui/core/Container';
import { UserContext } from "../../App";


const Header = () => {

  const [loggedInUser, setLoggedInUser]= useContext(UserContext);

  return (
    // <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
  
    <Container>
    <div className="header">    
        <img src={Logo} alt="" />
        <input className="searchBox" type="search" placeholder="Search your Destination"></input>
        <Link to="/news">News</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>       
        {loggedInUser.name}
          {
            loggedInUser.name?<button onClick={() =>setLoggedInUser({})}>Sign out</button>:
            <button><Link to="/login">Login</Link></button>
          }        
      </div>
    </Container>



  );
};

export default Header;
