
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import './About.css';
import Navbar from "../Navbar";



const AdminLog = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPss] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

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
          .post("http://localhost:9091/admin/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                navigate("/admin_home");
              } else {
                alert("wrong credentials.");
              }
              localStorage.setItem("myUser", JSON.stringify(AdminLog));
            }
            // localStorage.setItem("myUser", JSON.stringify(AdminLog));
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
    <div  className="o row" >
      <Navbar  />
      <div className="col-md-6">
      <h1 className=" title1a"></h1>
      <div className="  loginForm ">
      <h3 className="text-center">ADMIN LOGIN</h3>
        <div className="name">
          <label>Name</label>
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
        <button
          className="Btn" onClick={handleClick} style ={{background: "-webkit-linear-gradient(right,#fc00ff,#00dbde,#00dbde)"}}> 
        Login
      </button>
      {/* <button onClickCapture={logout}>logout user</button> */}
        
      
      </div>
      </div>
      <div className="col-md-1 vertical">



</div>
<div className="col-md-5" style={{marginTop:"120px",color:"white"}}>

<h1>
 Green Wash Car Wash
</h1>
<br/><br/>
<p>
Green Wash Car Wash is a brand which is literally going to change the way people think about car cleaning. 
It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments
 including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners, steam cleaners and so on.</p>


</div>







    </div>
  );
};

export default AdminLog;