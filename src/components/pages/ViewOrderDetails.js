import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function ViewOrderDetails(){
    const [order, setOrder] = useState(null);
    const{username} = useParams();
    
    const fetchOrderByUserName=()=>{
        axios.get("http://localhost:9092/order/viewOrderByUsername/"+ username).then(resp => setOrder(resp.data))
      
        // console.log(resp)
    }
    useEffect(fetchOrderByUserName,[]);



    
   

    return(
        <div>
       

             <h2>Order By UserName</h2>
                {
                    order !== null &&
                    <div>
                        
                       <p>OrderId: {order.orderId} </p>
                         <p>CarName: {order.carName} </p> 
                        <p>VehicleType: {order.vehicleType}</p>
                        <p>UserName: {order.username}</p>
                        <p>Date: {order.date}</p>
                        <p>MobileNumber: {order.contactno}</p>
                        <p>Address: {order.address}</p>
                        <p>WashpackId: {order.washpackId}</p>
                       
                         </div>
                        }
        </div>
    )
}
export default ViewOrderDetails;