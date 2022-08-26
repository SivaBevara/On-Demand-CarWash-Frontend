





    import React, { useState } from 'react';
import axios from 'axios';
import {Container,Button} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import './services.css'
import Navbar from '../Navbar';
import { toast } from 'react-toastify';





var mobileTest="false";
    var emailTest="false";
function User() {
    
    const paperStyle={ padding: '20px 25px', width:'100',backgroundColor:"grey", borderRadius:25,opacity:"0.8"}
    const [user, setUser] = useState({
        // id: "",
        name:"",
        username: "",
        password: "",
        contactno:"",
        email: ""

    })
    
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (event) => {
       event.persist();
        setUser(user => ({ ...user, [event.target.name]: event.target.value }));
    }

    const emp = () => {
        let errors = {};
        errors['emailErr'] = ""
        setFormErrors(errors);
    }

    const navigate = useNavigate();
    const handleOnChange = (email) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
        if (re.test(email.target.value)) {
            emp();
            emailTest="true"
            handleChange(email);
            
        }
        else {
            handleChange(email);
            if (email.target.value === "") { emp(); }
            else {
                let errors = {};
                errors['emailErr'] = "email  is not correct"
                setFormErrors(errors);
            }
        }
    }
    const emp1 = () => {
        let errors = {};
        errors['contactnoErr'] = ""
        setFormErrors(errors);
    }
    const handleOnMobile = (mobile) => {
        const re1 = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        const re=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
        console.log(mobile.target.value);
        if (re.test(mobile.target.value)) {
            console.log("Success")
            emp1();
            mobileTest="true";
            handleChange(mobile);
        }
        else {
            handleChange(mobile);
            if (mobile.target.value === "") { emp1(); }
            else {
                let errors = {};
                errors['contactnoErr'] = "Enter 10 digit mobile number"
                setFormErrors(errors);
            }
        }
    }

    const handleSubmit = () => {
        //validate form
        let errors = {};
        // if(!user.id){
        //   errors['userIdErr'] = " ID is required";

        // }

        if (!user.name) {
            errors['userNameErr'] = " Name is required";
        }
        if (!user.email) {
            errors['emailErr'] = "email  is required"
        }
        if (!user.contactno) {
            errors['contactno Err'] = "contactno is required"
        }
        console.log(emailTest);
        console.log(mobileTest);
        if(emailTest==="false")
        {
            errors['emailErr'] = "please enter correct Email ID"
        }
        if(mobileTest==='false')
        {
            errors['mobileErr'] = "please enter correct mobile"
        }
        
        
        if (!user.username) {
            errors['usernameErr'] = "username is required"
        }
        if (!user.password) {
            errors['passwordErr'] = "password is required"
        }
       


        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const palyload = {
                // id: user.id,
                
                name: user.name,
                username: user.username,
                password: user.password,
                contactno: user.contactno,
                email: user.email,
               
                
                

            }
            axios.post("http://localhost:9093/user/adduser", palyload)
    

            .then(function (response) {
                if (response && response.data) {
                //   if (response.data === 200 ) {
                    // alert("Welcome " + loginForm.username);
                    toast.success('Welcome ' + user.name ,
                                    {
                                      position: "top-center",
                                      autoClose: 3000
                                    });
                    
                    navigate("/Login");
                //   } 
                //   else {
                //     alert("wrong credentials.");
                //   }
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
      }

    const myStyle={
        backgroundImage:
        "url('https://free4kwallpapers.com/uploads/originals/2016/01/03/iguacu-falls-nexus-6p-wallpaper.jpg')",
        height:'800px',
       backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
     
        <div style={myStyle}>
           <Navbar  />
        <div style={{
            position: 'absolute', left: '20%', top: '75%',
            transform: 'translate(-50%, -50%)'
        }}>

          <Container style={paperStyle}> 
        <div  className='  profileimage'>
        {/* <center> <img src={profileImg} alt="Profile" width="50" height="50" ></img> </center> <p></p> */}
        <center><h1 style={{fontSize:"20px",color:"blue"}}><b>User Registration</b></h1></center><p></p>
        {/* <div >
                <label>ID :</label>
                <input type="number" name="id" value={user.id} onChange={handleChange} placeholder="ID"  className="form-control"/>
                {
                    formErrors.userIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.userIdErr}</div>
                }
            </div> */}
        <div>
                <label> Name :</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder=" Name"  className="form-control"/>
                {
                    formErrors.userNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.userNameErr}</div>
                }
            </div>
             <div>
             <label>Enter Username :</label>
                <input type="text" name="username"  value={user.username} onChange={handleChange} placeholder="Username"   className="form-control" />
                {
                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                }
            </div>
            

            <div>
                <label>Password :</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"  className="form-control"/>
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
            </div>
            <div>
                <label>Mobile :</label>
                <input type="number" name="contactno" onChange={handleOnMobile} placeholder="Mobile Number"  className="form-control" />
                {
                    formErrors.mobileErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.mobileErr}</div>
                }
            </div>
            
            <div>
                <label>Email :</label>
                <input type="text" name="email" onChange={handleOnChange} placeholder="Email ID"  className="form-control"/>
                {
                    formErrors.emailErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailErr}</div>
                }
            </div>
           
           
           
           
            

            <div>
                <p></p>
                {/* <button onClick={handleSubmit}>Submit</button> */}
                <Button variant="dark" onClick={handleSubmit}>SIGNUP    </Button>&nbsp;&nbsp;
                <Button variant="dark" onClick={() => { window.location.href = "/" }}> Cancel</Button>
            </div>
        </div>
        </Container>
    </div>
    </div>
    )
}
export default User;