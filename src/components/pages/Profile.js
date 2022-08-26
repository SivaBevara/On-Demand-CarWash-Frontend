




import React, { Component } from "react";
import { CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebar} from 'cdbreact'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, NavLink, Row, Table } from "react-bootstrap";
import Footer from "./Footer";
import {card} from "react-bootstrap"
import { CardBody, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import AdminNavbar from "./AdminNab";
import { Link } from "react-router-dom";


export default class Profile extends Component { 
  
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  
  componentDidMount() {
    fetch("http://localhost:8087/user/allusers")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  //End

  render()
   {
    const { DataisLoaded, items } = this.state;

    return (
      
      <>
      
     
      <AdminNavbar />
      <div className="row" style={{background:"rgba(71,115,181,0.7)"}} >
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

      
      <div className="col-md-9">
        <div className="text-left">
          <h3 style={{marginLeft:"370px"}}>
            User Profiles
          </h3>
 
        </div>

        <Row xs={1} md={3} className="g-4 "style={{marginTop:"50px"}}> 
        {items.map((item) => (
          <div className="container">
            <div className="row ">
              <div className="card" style={{width:"250px",marginBottom:"40px",background:"white"}}>
                <div className="card-header text-centre" style={{color:"brown",backgroundColor:"skyblue",marginleft:"50px"}}>
                  
                <label><b>{item.name}</b></label>
                

                </div>
                <div className="card-body"   >
                <label>Id: {item.id}</label><br/>
                <label>UserName: {item.username}</label><br/>
                <label>Contact: {item.contactno}</label><br/>
                <label>Email: {item.email}</label><br/>
                

                </div>

              </div>



            </div>

           
            
          </div>
          
          
        ))}
        
        
        </Row>
        </div>
        </div>
        <div>
          <Footer />
        </div>
        
      </>
    );
  

 }
}
