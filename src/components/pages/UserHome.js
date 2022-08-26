import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../../App.css';
import CardItem from '../CardItem';
import Footer from '../Footer';
import Admin from './Admin';
import AdminNavbar from './AdminNab';
import UserNavbar from './UserNavbar';

// let navigate = useNavigate();


function UserHome() {
  return (
    <>
       <UserNavbar/>
       <div className='y'>
       



<div className="container" style={{paddingTop:"200px"}}>
                
                
                    <div className=''style={{color:"white"}}>
                      
                        <h1 style={{color:"white",fontSize:"80px",paddingLeft:"5px",marginTop:"0px",marginLeft:"-450px"}}>Book Your Car </h1>
                        <h1 style={{color:"white",fontSize:"80px",marginTop:"0px",marginLeft:"-400px"}}>Wash Services </h1>


                       
                        <button className="pack btn " onClick={() => { window.location.href = "/Booking" }} style={{background:"#ef530f"}} >OrderNow</button>
                       
                    </div>
                   
                    
               
                </div>
                






    </div>
       <Footer/>
    </>
  );
}

export default UserHome;
