import React, { useEffect, useState ,deleteRow } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import {  toast } from 'react-toastify';


const Washer = () => {

    const [washers, setWashers] = useState([]) 
    let navigate = useNavigate()   
    useEffect(() => {
        fetch("http://localhost:8087/washer/allorders").then(result => {
            // fetch("http://localhost:8087/order/allorders").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                })
        })
    }, [])
    const handleClick = event => {
        event.currentTarget.disabled = true;
        console.log('button clicked');
        //   alert("Order Confirmed!!!");
          toast.success('Order Confirmed '  ,
          {
            position: "top-center",
            autoClose: 1000
          });
      };





    return (

        <div  style={{background:"rgba(15,83,191,0.3)"}}>
             
                       <div>
                <h1 >Order Details</h1>
            </div>


                  <Row xs={1} md={3} className="g-4 "style={{marginTop:"30px"}}> 
            {washers.map((emp) => (
                <div className="container">
                <div className="row ">
                  <div className="card" style={{width:"300px",marginBottom:"40px",marginLeft:"30px",padding:"0px"}}>
                  <div className="card-header text-centre" style={{color:"brown",backgroundColor:"skyblue",marginleft:"50px"}}>

                  <label ><b> ORDER ID : {emp.orderId}</b></label>

                </div>

                    <div className='card-body'style={{background:"rgba(71,115,181,0.7)"}}>
                        {/* <p >ORDER ID : {emp.orderId}</p> */}

                        <p className="wash">Name : {emp.username}</p>
                        <p className="wash">Car Name : {emp.carName}</p>
                        <p className="wash">VehicleType: {emp.vehicleType}</p>
                        <p className="wash">Appointment Date : {emp.date}</p>
                        <p className="wash">Wash Pack Id: {emp.washpackId}</p>
                        <p className="wash">Contact.No : {emp.contactno}</p>
                        <p className="wash">Address: {emp.address}</p>



                        <div>
                         <button className="btn btn-outline-success" style={{color:"white",borderRadius:"25px"}} onClick={handleClick}>Confirm Booking</button>&nbsp;&nbsp;
                       
                         <button className=" btn btn-outline-danger "style={{marginleft:"5px " ,borderRadius:"25px"}} onClick={() => { navigate(`/Orders/${emp.orderId}`) }}>Delete Order</button>
                         </div>


                    </div>
                   


                </div>
                </div>
                </div>


            ))
            }
            </Row>
        </div>
    )
}

export default Washer









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';



// const Washer = () => {

//     const [washers, setWashers] = useState([])
//     let navigate = useNavigate()
//     useEffect(() => {
//         fetch("http://localhost:8087/washer/allorders").then(result => {
//             // fetch("http://localhost:8087/order/allorders").then(result => {
//             result.json().then(
//                 resp => {
//                     setWashers(resp)
//                 })
//         })
//     }, [])






//     return (

//         <div >
//             <div>
//                 <h1 >Order Details</h1>
//             </div>



//             {washers.map((emp) => (
//                 <div className="container">

//                     <div className="card" style={{ width: "950px", marginBottom: "40px" }}>

//                      </div>

//                     <div className='card-body'>


//                         <p className="wash">Name : {emp.username}</p>
//                         <p className="wash">Car Name : {emp.carName}</p>
//                         <p className="wash">Car Model: {emp.carModel}</p>
//                         <p className="wash">Order Id : {emp.orderId}</p>
//                         <p className="wash">Appointment Date : {emp.date}</p>
//                         <p className="wash">Wash Pack Id: {emp.washpackId}</p>
//                         <p className="wash">Contact.No : {emp.contactno}</p>
//                         <p className="wash">Address: {emp.address}</p>
//                         {/* <button className="bookBtn2" >Confirm Booking</button>
//                         <button className="bookBtn1">Cancel Booking</button> */}
//                     </div>
//                     <button className=" btn btn-outline-danger " style={{ marginleft: "5px " }} onClick={() => { navigate(`/Orders/${emp.orderId}`) }}>Delete Order</button>


//                 </div>




//             ))
//             }

//         </div>
//     )
// }

// export default Washer