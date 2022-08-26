import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Table } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNab";
import { CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebar } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { } from 'react-router-dom';

export default class WasherProfile extends Component {
  // Start
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://localhost:8087/washer/allwasher")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  //End

  render() {
    const { DataisLoaded, items } = this.state;

    return (
      <>
      <div className="row" style={{background:"rgba(15,83,191,0.3)"}}>
        <AdminNavbar />



        
          <div className='col-md-3'>
            <div className='h ' style={{ height: "465px", overflow: 'scroll initial' }}>
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


          <div className="text-centre" >
            <h3 style={{ marginLeft: "350px" }}>
              Washer Profiles
            </h3>


          </div>
          <Row xs={1} md={3} className="g-4 "style={{marginTop:"50px"}}> 
          {items.map((item) => (
            <div className="container">
              <div className="row ">
                <div className="card" style={{ width: "250px", marginBottom: "40px",padding:"0px" }}>
                  <div className="card-header text-centre" style={{color:"brown",backgroundColor:"skyblue",marginleft:"50px"}}>
                    <label><b>{item.id}</b></label>


                  </div>
                  <div className="card-body" style={{background:"rgba(71,115,181,0.7)"}} >
                    <label>Id: {item.id}</label><br />
                    <label>Name: {item.name}</label><br />
                    <label>Location: {item.location}</label><br />
                    <td><Link to={`/Washer/${item.id}`} className="btn btn-outline-danger" style={{borderRadius:"25px"}}>Delete Washer</Link></td>



                  </div>

                </div>



              </div>


            </div>
            






          ))}
          </Row>
          </div>


          <div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
