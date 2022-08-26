import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../util/AppConstants';
function DeleteWasher() {
    
    const [washer, setWasher] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();
   
    const fetchWasherById = () => {
        axios.get("http://localhost:9094/washer/viewWasher/"+id).then(resp => setWasher(resp.data))
    }
    useEffect(fetchWasherById);
   
    const deleteWasher = () => {
//         fetch('http://localhost:9094/washer/account/delete' + id, {
//             // mode: 'no-cors',
//             method: "Delete",
//             headers: {
//                  "Content-Type": "application/json"
//             },
//             body: JSON.stringify()
//  })
  
axios.delete("http://localhost:8087/washer/account/delete/" + id).then(resp => 
             alert(resp.data));
             toast.success('Washer Deleted '  ,
             {
               position: "top-center",
               autoClose: 500
             });
             navigate("/WasherProfile")
         }
    return (
        <div className='c'>
            <h2 style={{marginLeft:"100px"}}>Washer Details</h2>
            {
                washer !== null &&
                <div className="container">
                <div className="row ">
                  <div className="card" style={{width:"250px",marginBottom:"40px"}}>
                    <div className="card-header text-centre">
                        
                   
                    
                    <p>  ID : {washer.id}</p>
                    <p> LOCATION : {washer.location}</p>
                    <p> NAME : {washer.name}</p>
                    <button className='btn btn-outline-danger' onClick={deleteWasher} style={{ marginLeft:"15px",marginBottom:"10px",borderRadius:"15px"}}>Delete</button>
                    <button className="btn btn-outline-success " style={{ marginLeft:"15px",marginBottom:"10px",borderRadius:"15px"}} onClick={() => { window.location.href = "/admin_home" }}>Cancel</button> 
                   
                    </div>
                    </div>
                   

  
                   





                </div>
                </div>
            }
           
        </div>
        
    )
}
export default DeleteWasher;