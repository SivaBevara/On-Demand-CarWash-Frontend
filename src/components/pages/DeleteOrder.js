import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import WasherNavbar from './WasherNav';
import './About.css';
import {  toast } from 'react-toastify';
// import { baseUrl } from '../util/AppConstants';
function DeleteOrder() {
    const [order, setOrder] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchOrderById = () => {
        axios.get("http://localhost:8087/order/viewOrder/"+id).then(resp => setOrder(resp.data))
    }
    useEffect(fetchOrderById);
    const deleteOrder = () => {
        axios.delete("http://localhost:9092/order/delete/" + id).then(resp => {
            // alert(resp.data);
            toast.success('Order Deleted '  ,
            {
              position: "top-center",
              autoClose: 500
            });
            navigate("/washerhome");
           
        })
      




    }
    return (
        <div className='a'>
            <WasherNavbar/>
           
            <h2 style={{marginLeft:"-30%"}}>Order Details</h2>
            {
                order !== null &&
                <div className="  container col-md-6">
                <div className="row ">
                  <div className="card" style={{width:"250px",marginBottom:"40px",borderRadius:"75px"}}>
                    <div className=" text-centre" style={{marginLeft:"10px",paddingBottom:"5px"}}>
                        
                    
                    <p style={{marginLeft:"0px",paddingBottom:"5px",fontWeight:"900",fontSize:"25px"}}> Order ID : {order.orderId}</p>
                    <p> CARNAME : {order.carName}</p>
                    <p> USERNAME : {order.username}</p>
                    <p> DATE : {order.date}</p>
                    <p> CONTACT : {order.contactno}</p>
                    <p> ADDRESS : {order.address}</p>
                    <p> WASHPACK_ID : {order.washpackId}</p>
                    <button className='btn btn-outline-danger' style={{marginLeft:"15px",marginBottom:"10px",borderRadius:"25px"}}  onClick={deleteOrder}>Delete</button>
                    <button className=" btn btn-outline-success "style={{marginLeft:"15px",marginBottom:"10px",borderRadius:"25px"}} onClick={() => { navigate('/washerhome') }}>Cancel</button>
                    </div>
                    </div>
                    </div>
  
                   





                </div>
                
            }
            <div className='col-md-6'>

            </div>
            
            </div>
        
    )
}
export default DeleteOrder;