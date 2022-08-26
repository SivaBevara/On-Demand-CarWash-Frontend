import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Admin from './Admin';
import AdminNavbar from './AdminNab';
import Header from './Header';

import { SidebarData } from './SidebarData';

//import sidebar from './sidebar';


function AdminHome() {
  return (
    <>
     <AdminNavbar />

     <Admin/>
   
    
      
       
      
       <Footer/>
    </>
  );
}

export default AdminHome;
