import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import './About.css';
import {  toast } from 'react-toastify';

import {Link} from "react-router-dom";
import AdminNavbar from "./AdminNab";

function WashersignUp() {
  const [washer, setWasher] = useState({
        id: "",
        location: "",
        name: "",
        password: ""
  });

  const navigate=useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    event.persist();
    setWasher((washer) => ({
      ...washer,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    let errors = {};

    if (!washer.id) {
      errors["idErr"] = "Enter  Id";
    }

    if (!washer.location) {
      errors["locationErr"] = "Enter location";
    }

    if (!washer.name) {
      errors["nameErr"] = "Enter Name";
    }
    if (!washer.password) {
        errors["passwordErr"] = "Enter password";
      }

    setFormErrors(errors);

    const noErrors = Object.keys(errors).length === 0;

    if (noErrors) {
      const payload = {
        id: washer.id,
        location: washer.location,
        name: washer.name,
        password: washer.password,
      }

      axios
        .post("http://localhost:9094/washer/addwasher", payload)

        // .then((resp) => alert("Washer is added with id: " + washer.id));
        // // console.log("DONE");
        // navigate(-1);
        .then(function (response) {
          if (response && response.data) {
            toast.success("Washer is added with id: " + washer.id  ,
            {
              position: "top-center",
              autoClose: 1000
            });
          }
  
          navigate(-1);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div className="b">
      <AdminNavbar />
      <div className='container-fluid  ' >
      {/* <div className="siva  justify-content-center align-items-center pt-3 mt-0 "style={{width:"130%"}}   > */}
    <div  className=" card"style={{ background: "rgba(0,0,0,0.5)", boxShadow: "0 5px 15px rgba(0,0,0,0.5)", marginRight: "900px" ,width:"400px"}}style={{width:"450px",marginLeft:"30px"}}>
      {/* <hr/> */}
      <div className="card-header " style={{ backgroundColor: "rgba(209,209,209,0.5)", boxShadow: "0 5px 15px rgba(0,0,0,0.5)" }}>
      <h2 style={{ color: "blue" }}>
        <b> Enter Washer  Details</b>
      </h2>
      </div>
      <div className="card-body" style={{ background: "rgba(0,0,0,0.3)"}} >
                            <div className="container" >

      <div>
        <label style={{ float: "left", margin: "0px"}}> Id :</label>

        <input type="number" className="form-control" id="id" name="id" value={washer.id} onChange={handleChange} style={{ fontWeight: "700" }}/>

        {formErrors.idErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.idErr}  </div>
        )}
      </div>

      <div>
        <label>Location :</label>

        <input type="text" name="location" value={washer.location} onChange={handleChange} />

        {formErrors.locationErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.locationErr}  </div>
        )}
      </div>

      <div>
        <label>Name :</label>

        <input type="text" name="name" value={washer.name} onChange={handleChange} />

        {formErrors.nameErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.nameErr}  </div>
        )}
      </div>

      <div>
        <label >Password :</label>

        <input type="text" name="password" value={washer.password} onChange={handleChange} />

        {formErrors.passwordErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.passwordErr}  </div>
        )}
      </div>

      <div></div>
      <button className="btn btn-success" style={{ color: "maroon" }} onClick={handleSubmit}>
          Save
        </button>
      </div>
      </div>
    </div>
    </div>
    </div>
    // </div>
  );
}
export default WashersignUp;