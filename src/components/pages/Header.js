// import React, { useState } from "react";

import { CDBSidebar } from "cdbreact";
import React, { useState } from 'react' 
import { CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact'; 
import {NavLink, Link} from 'react-router-dom'; 
import {} from 'react-router-dom';




const Sidebar=()=>{
  return (
    <div>
      <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
          <CDBSidebar textColer="#fff" backgroundColor="rgb(37, 90, 122)">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                  <Link to="/dashboard">Dashboard</Link>
              </CDBSidebarHeader>
              <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
                      <NavLink exact to="/profile" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              User Profiles
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/WasherProfile" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              Washer Profiles
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/dashboard" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              Transfer
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/dashboard" activeClassName="activeClicked">
                           <CDBSidebarMenuItem icon="columns">
                              Transfer
                          </CDBSidebarMenuItem>
                      </NavLink>
                  </CDBSidebarMenu>
              </CDBSidebarContent>
              <CDBSidebarFooter style={{textAlign:'center'}}>
                  <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                      sidebar footer
                  </div>
              </CDBSidebarFooter>
          </CDBSidebar>
      </div>
      </div>
  )
}

export default Sidebar;



