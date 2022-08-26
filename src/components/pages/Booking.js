












import React, { useEffect, useState } from 'react';
import UserNavbar from "./UserNavbar";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';





function Booking() {

  let navigate = useNavigate()


  const [pack,setPack] = useState([]);
  const fetchAll=()=>{axios.get("http://localhost:8087/admin/washpack")
  .then(res=>setPack(res.data))}
  // .then((resp) => alert("Order is saved with id:" + resp.data.orderId));

  //     navigate("/Payment");
  useEffect(fetchAll,[]);








    const [order,setOrder] = useState({
      orderId: "",
    carName: "",
    carModel: "",
    username: "",
   
    date: "",
   
    contactno: "",
    address: "",
    washpackId: ""
    

          
    })
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (event) => {
      event.persist()
        setOrder(order => ({ ...order, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        let errors = {};
        
       
        
        
        if (!order.carName) {
            errors['carNameErr'] = "Enter Car Name";
        }
        if (!order.vehicleType) {
          errors['vehicleTypeErr'] = "Enter vehicleType";
      }
        
        if (!order.username) {
          errors['usernameErr'] = "Enter Name";
      }
        if (!order.date) {
            errors['dateErr'] = "Enter Booking Date";
        }
       
        
       
        if (!order.contactno) {
          errors['contactnoErr'] = "Enter Contact Number";
      }  
      else if  (order.contactno < 0){
        errors['contactnoErr'] = "Enter Contact Number";

      }
        if (!order.address) {
          errors['addressErr'] = "Enter Address";
      }
      if (!order.washpackId) {
        errors['washpackIdErr'] = "Enter WashPackId";
    }
        
    
                
    
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
        const payload = {
          orderId: order.orderId,
          carName: order.carName,
          vehicleType:order.vehicleType,
         
   
    username: order.username,
    date: order.date,
    contactno: order.contactno,
    
    address: order.address,
    washpackId: order.washpackId
   
            
           
        }

 axios
      .post("http://localhost:9092/order/addorder",payload)
     
      .then(function (response) {
        if (response && response.data) {
          toast.success('Order Placed Proceeding to payment '  ,
          {
            position: "top-center",
            autoClose: 1000
          });
        }

       navigate("/Payment");
      })
      .catch(function (error) {
        console.log(error);
      });
      


    }
}
        return (
          
            <div className='row' style={{backgroundColor:"#DBED95"}}>
              <UserNavbar />
              <div className='col-md-1'></div>
                
                
                <div className='col-md-5' style={{backgroundColor:"#C1D964"}}>
             
                <div className="text-center">
             <h1 className="formName" >Book Your Order</h1>
          </div>
                
                
                
        
                
                <div>
                    <label>Car Name :</label>
                    <input type="text" name="carName" value={order.carName} onChange={handleChange} />
                    {
                    formErrors.carNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.carNameErr}</div>
                }
                </div>




                {/* <div>
                    <label>Car Model :</label>
                    <input type="text" name="carModel" value={order.carModel} onChange={handleChange} />
                    {
                    formErrors.carModelErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.carModelErr}</div>
                }
                </div> */}

<div >
          <label
            for="vehicleType"
            onChange={handleChange}
            
          >
            vehicleType:
          </label>

          <select
            name="vehicleType"
            value={order.vehicleType}
            onChange={handleChange}
          >
            <option value="">select</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="MUV">MUV</option>
            <option value="Coupe">Coupe</option>
            <option value="Convertible">Convertible</option>
            <option value="Pickup Truck">Pickup Truck</option>
          </select>
          {formErrors.cardType && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.cardType}
            </div>
          )}
        </div>

        
        









          
        

                <div>
                    <label>Name :</label>
                    <input type="text" name="username" value={order.username} onChange={handleChange} />
                    {
                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                }
                </div>
                
               

                <div>
                    <label>Date :</label>
                    <input type="date" name="date" value={order.date} onChange={handleChange} />
                    {
                    formErrors.dateErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.dateErr}</div>
                }
                </div>
                <div>
                    <label>Contact Number :</label>
                    <input type="number" name="contactno" value={order.contactno} onChange={handleChange} />
                    {
                    formErrors.contactnoErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.contactnoErr}</div>
                }
                </div>




                

                <div>
                    <label>Address :</label>
                    <input type="text" name="address" value={order.address} onChange={handleChange} />
                    {
                    formErrors.addressErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.addressErr}</div>
                }
                </div>
               
               
                <div>
                    <label>Washpack Id :</label>
                    <input type="number" name="washpackId" value={order.washpackId} onChange={handleChange} />
                    {
                    formErrors.washpackIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.washpackIdErr}</div>
                }
                </div>


     


                
               

                
                <div>
                    {/* <button onClick={handleSubmit}>Save</button> */}
                    {/* <button onClick={handleSubmit} className="btn btn-success mr-2" style={{ fontSize: "15px",borderRadius:"25px" }}>Submit</button> */}
                    <div className="Submit">

              <button

                type="submit" className="btn btn-success" onClick={() => { handleSubmit();}}  >



           

                Submit

             </button>
             </div>
                </div>
                {/* <button onClick={handleSubmit}>Save</button> */}
                
                {/* </form> */}
            </div>





            <div className='vinay container-fluid col-md-6' style={{color:"white",padding:"0"}} >
                
                
                <h3 style={{background:"#A7B474",margin:"0px"}}><strong>LIST OF WASHPACKS</strong></h3>
                <table className="table table-bordered" style={{background:"#A7B474",color:"white",width:"100%"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PACKNAME</th>
                            <th>DESCRIPTION</th>
                            <th>COST</th>
    
                           
                            
                        </tr>
                    </thead>
                    <tbody>
    
                        {
                            pack.map((m, index) => (
                                <tr key={index}>
                                    <td> {m.id}</td>
                                    <td>  {m.packname}</td>
                                    <td>  {m.description}</td>
                                    <td>{m.cost}</td>
                                    
                                   
                                    {/* <td><Link to ={`/Details/edit/${m.id}`}className="btn btn-outline-primary">EDIT</Link></td> */}
                                    {/* <td><Link to ={`/Details/${m.id}`}className="btn btn-outline-info">DELETE</Link></td> */}
                                    
                                </tr>
                            )
                            )
    
                        }
    
                    </tbody>
                </table>
   
            </div>













            </div>
        )
    }

export default Booking;