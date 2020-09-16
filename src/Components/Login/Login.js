import React, { useContext, useState } from 'react';
import './Login.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import icon from '../../Images/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';

firebase.initializeApp(firebaseConfig);


const Login = () => {

    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    // const [user,setUser]=useState({
    //     isSignedIn:false,
    //     name:'',
    //     email:'',
    //     password:''
    // })
    
    // const handleSignOut = () =>{
    //     firebase.auth().signOut()
    //     .then(res => {
    //       const signedOut= {
    //         displayName:'',
    //         email:''
    //       }
    //       setLoggedInUser(signedOut);
    //     }).catch(error => console.log(error));
    //   }

 const handleGoogleSignIn = () =>{
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email} = res.user;
            const signedInUser = {name: displayName,email
            };
            setLoggedInUser(signedInUser);   
          }).catch(error => {            
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode,errorMessage);           
          });

}

    return (
        <Container style={{margin:'auto',width:'400px'}}>
        <div className="loginApp">
            <div>

            <form className="login-form">
                <h1>Login</h1>
                <FormGroup>
                    <TextField id="standard-basic" placeholder="username or email" required/>
                </FormGroup>
                <FormGroup>
                    <TextField id="standard-basic" placeholder="password" required/>
                </FormGroup>
                <br></br>
            <Button variant="contained" color="primary" className="btn btn-block">Login</Button>
           
            <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
            <hr></hr>
            <button className="googleIn" onClick={handleGoogleSignIn}><img className="googleSign" src={icon} alt=""></img>continue with Facebook</button>

            <button className="googleIn"><img className="googleSign" src={icon} alt=""></img>continue with Facebook</button>  
            </form>
            </div>
        </div>
        </Container>
    );
};

export default Login;