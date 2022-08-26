import React from "react";
import Navbar from "./components/Navbar";
import "./Style.css";

import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./components/pages/SignUp";

// import Userlog from './components/pages/Userlog';
import Login from "./components/pages/Login";
import Booking from "./components/pages/Booking";
import Washer from "./components/pages/washer";
import WasherLog from "./components/pages/Washerlog";
import Admin from "./components/pages/Admin";
import Addpacks from "./components/pages/addpacks";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Payment from "./components/pages/payment";
import Profile from "./components/pages/Profile";
import Footer from "./components/pages/Footer";
import AdminLog from "./components/pages/AdminLog";
import AdminHome from "./components/pages/AdminPage";
import AdminNavbar from "./components/pages/AdminNab";
import WasherHome from "./components/pages/WasherHome";
import WasherNavbar from "./components/pages/WasherNav";
import UserHome from "./components/pages/UserHome";
import UserNavbar from "./components/pages/UserNavbar";
import WasherProfile from "./components/pages/WasherProfile";

import PaymentOpen from "./Payment Component/PaymentOpen";
import FetchAllPacks from "./components/pages/FetchAllPacks";
import UpdatePack from "./components/pages/UpdatePack";
import DeletePack from "./components/pages/DeletePack";

import DeleteOrder from "./components/pages/DeleteOrder";
import DeleteWasher from "./components/pages/DeleteWasher";
import BasicExample from "./components/pages/BasicExample";
import AdminOrderDetails from "./components/pages/AdminOrderDetails";
import AddPayment from "./components/pages/AddPayment";
import UserPack from "./components/pages/UserPack";
import AdminPack from "./components/pages/AdminPack";
import AddPacksss from "./components/AddPacksss";
import DeleteWashPack from "./components/pages/DeleteWashPack";
import AddWasher from "./components/pages/AddWasher";
import HeroSection from "./components/HeroSection";
import ViewOrderDetails from "./components/pages/ViewOrderDetails";






   

function App() {

  return (
    <>
    
   
      <Router>
        <Routes>
        {/* <Route path='/Delete/:id' element={<DeleteWashPack/>}/> */}
        {/* <Route path="/a" element={<DeleteProduct />} /> */}
        <Route path='/Orders/:username' element={<ViewOrderDetails/>}/>
          <Route path="/" element={<HeroSection />} />
       
          <Route path="/services" element={<Services />} />
          <Route path="/pay" element={<Payment />} />
         
          <Route path="/Payment" element={<PaymentOpen />} />
          {/* 
           -> User Controls Only
          */}
          <Route path="/Userhome" element={<UserHome />} />
          <Route path="/Usernav" element={<UserNavbar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/addpacks" element={<Addpacks />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/allpacks" element={<UserPack />} />
          {/* 
          * Washer Controls Only
          
          */}
          <Route path="/WasherProfile" element={<WasherProfile />} />
          <Route path="/washerhome" element={<WasherHome />} />
          <Route path="/washer" element={<Washer />} />
          <Route path="/washerlog" element={<WasherLog />} />
          <Route path="/washerNav" element={<WasherNavbar />} />
          <Route path="/FetchAllPacks" element={<FetchAllPacks/>} />
          {/* <Route path="/packs" element={<Pack/>} /> */}


          {/* 
            For Admin Control only
          */}


          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlog" element={<AdminLog />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route path="/admin_nav" element={<AdminNavbar />} />
          <Route path='/Details/edit/:id' element={<UpdatePack/>}/>
          <Route path='/Delete/:id' element={<DeletePack/>}/>
          <Route path='/Orders/:id' element={<DeleteOrder/>}/>
          <Route path='/Washer/:id' element={<DeleteWasher />}/>
          <Route path="/orderdetails" element={<AdminOrderDetails />} />
          <Route path="/packs" element={<AdminPack />}/>
          <Route path="/addwasher" element={<AddWasher />}/>

        </Routes>
      </Router>
      <Router></Router>
    </>
  );
}

export default App;
