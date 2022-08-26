




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Signup from "./SignUp";
import Navbar from "../Navbar";
 import {  toast } from 'react-toastify';



function Login() {
  const [loginForm, setLoginForm] = useState({
      username: "",
      password: ""

      
  })
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleName = (event) => {
    event.persist();
      setLoginForm(loginForm => ({ ...loginForm, [event.target.name]: event.target.value }));
  }
  const handleClick = (event) => {
      //validation login form
      let errors = {};
      if (!loginForm.username) {
          errors["usernameErr"] = "Username is required"
      }
      if (!loginForm.password) {
          errors["passwordErr"] = "Password is required"
      }
      setFormErrors(errors);
      const noErrors = Object.keys(errors).length === 0;
      // if no errors call the login api
      if (noErrors) {
         
          let payload = {
              username: loginForm.username,
              password: loginForm.password
          }
   {
        axios
          .post("http://localhost:9093/user/login", payload)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                // alert("Welcome " + loginForm.username);
                toast.success('Welcome ' + loginForm.username,
                                {
                                  position: "top-center",
                                  autoClose: 1000
                                });
                
                navigate("/Userhome");
              } else {
                alert("wrong credentials.");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
        

      }
      event.preventDefault();
  }
    return (
    <div className="o row" >
      <Navbar />
      <div className="col-md-6">
      <h1 className="title1a" ></h1>
      <div className="loginForm ">
        <h3 className="text-center" style={{marginTop:"30px"}}>LOGIN</h3>
        <div className="name">

          
           <label >Username</label>
                    <input type="text" name="username" id="username" className="form-control" value={loginForm.username} onChange={handleName} />
                    {
                        formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                    }

          
         
        
         
          <label>Password</label>
                    <input type="password" name="password" id="password" className="form-control" value={loginForm.password} onChange={handleName} />
                    {
                        formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                    }
          <br></br>
         
        </div>
        <br />


        <div className="col-12 d-flex justify-content-around">
          <button onClick={handleClick} className="btn  mr-2" style={{ width:"100px",borderRadius:"25px", fontSize: "15px",color:"white",fontWeight:"700",background: "-webkit-linear-gradient(right,#00dbde,#00dbde,#fc00ff)" }}>SignIn</button>
          <button className="btn btn-danger" style={{ fontSize: "15px",width:"100px",color:"white",fontWeight:"700",borderRadius:"25px" }} onClick={() => { window.location.href = "/Signup" }}>SignUp</button>
        </div>
      </div>
      </div>
      <div className="col-md-1 vertical">



      </div>
    <div className="col-md-5" style={{marginTop:"120px",color:"white"}}>

<h1>
    Welcome To Green Wash Car Wash
</h1>
<br/><br/>
<p>

 
 Your car comes into contact with a lot of debris: dirt, bugs, bird droppings, salt and grime.
 If left untreated, these deposits could eventually eat away at the finish and paint, damaging the metal beneath.
  A run through the car wash will eliminate these deposits.</p>


    </div>


    </div>
  );
};

export default Login;
