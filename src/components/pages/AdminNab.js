import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
 //import './Navbar.css';


function AdminNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  
 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
 

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  // const myUser = JSON.parse(localStorage.getItem("myUser"));
  //   console.log(myUser)
  //   const logoutButton = () => {
  //     if (myUser != null) {
  //         localStorage.removeItem("myUser");
  //         localStorage.clear();
  //         alert("You have successfully logged out.")
  //         navigate("/");
  //     }
  // }


  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-dark">

        <Link to={"/"} className="navbar-brand">
          GreenWash Car Wash
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/admin_home"} className="nav-link">
              Home
            </Link>
          </li>

         
          <li className="nav-item">
            <Link to={"/About"} className='nav-link'>
              About Us
            </Link>
          </li>

          


          <li className="nav-item">
            <Link to={"/addwasher"} className='nav-link'>
             Add Washer
            </Link>
          </li> 

          
        </div>

        <div className="ms-auto pe-md-5 navbar-nav">
        
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              
               Logout
            </Link>
          </li>
          {/* <li class="nav-item" >

        <button className="buttonlearn" onClick={logoutButton}>

                 

                  LOGOUT

                </button>

          </li> */}
          {/* <button onClick={logoutButton}>logout</button> */}
         
        </div>



      </nav>
    </>
  );
}
export default AdminNavbar;
