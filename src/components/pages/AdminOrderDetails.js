import React, { useEffect, useState ,deleteRow } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNab';
import { Row } from 'react-bootstrap';
import { CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebar} from 'cdbreact'; 
import {NavLink} from 'react-router-dom'; 
import {} from 'react-router-dom';



const AdminOrderDetails = () => {

    const [washers, setWashers] = useState([]) 
    let navigate = useNavigate()   
    useEffect(() => {
        fetch("http://localhost:9092/order/allorders").then(result => {
            // fetch("http://localhost:8087/order/allorders").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                })
        })
    }, [])


   
    

    
    return (
        
        <div className='row' style={{background:"rgba(15,83,191,0.3)"}}>
            <AdminNavbar />




            <div className='col-md-3'>
      <div className='h '  style={{ height:'100%', overflow:'scroll initial'}}>
          <CDBSidebar textColer="#fff" backgroundColor="rgb(37, 90, 122)">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              Green Wash Car Wash
              </CDBSidebarHeader>
              <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
                      <NavLink exact to="/profile" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              User Profiles
                          </CDBSidebarMenuItem>
                      </NavLink>
                      
                       
                       <CDBSidebarMenuItem icon="columns">
                          <Link to="/WasherProfile">Washer Profiles</Link>
                              {/* Washer Profiles */}
                          </CDBSidebarMenuItem>
                      {/* </NavLink> */}
                      {/* <NavLink exact to="/orderdetails" activeClassName="activeClicked"> */}
                          <CDBSidebarMenuItem icon="columns">
                          <Link to="/orderdetails">Orders</Link>
                              {/* Orders */}
                          </CDBSidebarMenuItem>
                      {/* </NavLink> */}
                      {/* <NavLink exact to="/addpacks" activeClassName="activeClicked"> */}
                           <CDBSidebarMenuItem icon="columns">
                           <Link to="/addpacks">Add Washpacks</Link>
                              {/* Add Washpacks */}
                          </CDBSidebarMenuItem>
                      {/* </NavLink> */}
                  </CDBSidebarMenu>
              </CDBSidebarContent>
             
          </CDBSidebar>
      </div>

      </div>
      <div className='col-md-9'>
            {/* <Row xs={1} md={4} className="g-4">  */}
            <div>
                <h1 className="bookdetails">Order Details</h1>
            </div>
           
                 
                  <Row xs={1} md={3} className="g-4 "style={{marginTop:"50px"}}> 
            {washers.map((emp) => (
                <div className="container">
                <div className="row ">
                  <div className="card" style={{width:"250px",marginBottom:"40px",padding:"0px"}}>
                  <div className="card-header text-centre"  style={{color:"brown",backgroundColor:"skyblue",marginleft:"50px"}}>
                 
                  <label><b> ORDER ID : {emp.orderId}</b></label>

                </div>
                
                    <div className='card-body'style={{background:"white"}}>
                        {/* <p >ORDER ID : {emp.orderId}</p> */}
                        <p >UserName : {emp.username}</p>
                        <p >Car Name : {emp.carName}</p>
                        <p >VehicleType: {emp.vehicleType}</p>
                        <p >Appointment Date : {emp.date}</p>
                        <p >Wash Pack Id: {emp.washpackId}</p>
                        <p >Contact.No : {emp.contactno}</p>
                        <p >Address: {emp.address}</p>
                        <td><Link to ={`/orders/${emp.username}`}className="btn btn-outline-info">VIEW</Link></td>

                       
                    </div>
                   
                    
                </div>
                
                </div>
                
                </div>
                
            ))
            }
            </Row>
            </div>
            
            
        </div>
    )
}

export default AdminOrderDetails