// import React, { useState } from 'react' 
import { CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebar} from 'cdbreact'; 
import {NavLink} from 'react-router-dom'; 
import {} from 'react-router-dom';



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';


const Admin = () => {
    const [washers, setWashers] = useState([])

    let navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:8087/admin/washpack").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                    console.log(resp)
                })
        })
    }, [])

    




    return (
        
        
        <div className=' row'style={{  overflow:'hidden',background:"rgba(15,83,191,0.3)"}}>
           
            
           
      <div className='col-md-3'>
      <div className='h '  style={{ height:'100%', overflow:'scroll initial'}}>
          <CDBSidebar textColer="#fff" backgroundColor="rgb(37, 90, 122)">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" ></i>}>
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
                              
                          </CDBSidebarMenuItem>
                    
                          <CDBSidebarMenuItem icon="columns">
                          <Link to="/orderdetails">Orders</Link>
                             
                          </CDBSidebarMenuItem>
                      
                           <CDBSidebarMenuItem icon="columns">
                           <Link to="/addpacks">Add Washpacks</Link>
                             
                          </CDBSidebarMenuItem>
                     
                  </CDBSidebarMenu>
              </CDBSidebarContent>
             
          </CDBSidebar>
      </div>

      </div>
      <div className=' col-md-9'>
            <div>
                <h1 className="bookAppointTitle mb-5 "><strong>WashPack Details</strong></h1>
            </div>
            <Row xs={1} md={2} className="g-4 "> 

            {washers.map((emp) => (
                // <div className="bk2 ml-5" >
                <div className='row'>
                    <div className='  card col-md-2' style={{background:"rgba(71,115,181,0.7)",width:"350px",marginBottom:"40px",marginLeft:"40px",color:"white"}}>
                    
                        
                       
                        <h4>Id : {emp.id}</h4>
                        <p > Name : {emp.packname}</p>
                        <p >Description : {emp.description}</p>
                        <p>Cost: {emp.cost}</p>
                       
                        {/* <hr style={{ marginTop: "30px" }} /> */}
                    
                    <div>
                        
                        <button className=" btn btn-outline-warning " style={{marginLeft:"30px",marginRight:"15px",marginBottom:"10px",borderRadius:"25px"}} onClick={() => { navigate(`/Details/edit/${emp.id}`) }}>Update Pack</button>
                        

                        <button className=" btn btn-outline-danger "style={{marginLeft:"15px",marginBottom:"10px",borderRadius:"25px"}} onClick={() => { navigate(`/Delete/${emp.id}`) }}>Delete Pack</button>
                       
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

export default Admin