import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
//import Signup from "./SignUp";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { Col, Row } from "react-bootstrap";
import {  toast } from 'react-toastify';



const WasherLogin = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPss] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);
  

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr(false);
  };
  const handlePass = (e) => {
    setPss(e.target.value);
    setpassErr(false);
  };
  const handleClick = () => {
    if (name && pass) {
      const data = {
        name: name,
        password: pass,
      };
      
       {
        axios
          .post("http://localhost:9094/washer/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                // alert("Welcome " + loginForm.username);
                toast.success('Welcome ' + name,
                                {
                                  position: "top-center",
                                  autoClose: 3000
                                });
                
                navigate("/washerhome");
              } else {
                alert("wrong credentials.");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    } else if (name) {
      setpassErr(true);
      setNameErr(false);
    } else if (pass) {
      setNameErr(true);
      setpassErr(false);
    } else {
      setpassErr(true);
      setNameErr(true);
    }
  };

  return (
    
    <div className="o row">
      <Navbar  />
      <div className="col-md-6">
     
      <h1 className="title1a"></h1>
      <div className="loginForm">
     <h3 className="text-center"> WASHER LOGIN</h3>
    
        <div className="name">
          <label>Username</label>
          <input
            type="text"
            placeholder="  Enter Username"
            value={name}
            onChange={handleName}
          />
          <br></br>
          {nameErr && <span>Enter valid name</span>}
          <br />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={handlePass}
          />
          <br></br>
          {passErr && <span>Enter valid password</span>}
        </div>
        <br />
       

        <button className="Btn" onClick={handleClick} style ={{background: "-webkit-linear-gradient(right,#00dbde,#00dbde,#fc00ff)"}}>
          Login
        </button>
       
         
       
      </div>
      </div>
      <div  className="col-md-6" >
      <img className="img-back" src={"https://cdn.dribbble.com/users/996618/screenshots/6940411/carwash-2.gif"} alt="image" />

      </div>
     
    </div>
  );
};

export default WasherLogin;