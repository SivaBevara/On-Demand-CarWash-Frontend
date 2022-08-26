import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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


  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-dark">

        <Link to={"/"} className="navbar-brand">
                  Green Wash Car Wash
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/Services"} className='nav-link'>
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/About"} className='nav-link'>
              About Us
            </Link>
          </li>
        </div>

        <div className="ms-auto pe-md-5 navbar-nav">
        
          <li className='nav-item'>
            {/* <Link to='/dropdown' className='nav-link'> */}
            <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Login
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Login">User Login</Dropdown.Item>
        <Dropdown.Item href="/washerlog">Washer Login</Dropdown.Item>
        <Dropdown.Item href="/adminlog">Admin Login</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            
          </li>
         
         
        </div>



      </nav>
    </>
  );
}
export default Navbar;
