import React, { useState, useEffect } from 'react';
import './services.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import WasherNav from './WasherNav';



const AdminPack = () => {

  // start 
  const [washers, setWashers] = useState([])



  useEffect(() => {
    fetch("http://localhost:8087/admin/washpack").then(result => {
      result.json().then(
        resp => {
          setWashers(resp)
          console.log(resp)
        })
    })
  }, [])



  let navigate = useNavigate();


  return (
    <>
    <WasherNav/>
    <div className='body'>
    
      {/* <div className='title'> */}
        
        <div>
          <h3 className='sub '>Get Your  Car Wash Today.....!</h3>
          </div>
         <div style={{backgroundColor:"pink"}}>
          {washers.map((emp, ind) => (<div >
           
            <div class='flip-card '>
              <div className='flip-card-inner'>
                <div class='flip-card-front'>
                  <h3>{emp.id}</h3>
                  <h2> {emp.packname}</h2>
                  <h1 className='mo'>Rs.{emp.cost}</h1>
                </div>
                <div class='flip-card-back'>
                  <h3>{emp.description}</h3>
                 
                  </div>
                  
              </div>
            </div>
          </div>))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* </div> */}


    </>

  );
}
export default AdminPack