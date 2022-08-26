








import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import AdminNavbar from './AdminNab';
import {  toast } from 'react-toastify';





function UpdatePack(){
    const[pack,setPack]=useState({
        id:"",
        packname: "",
        description: "",
        cost:"",
        
    });
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const {id} = useParams();

    const fetchpackById=()=>{
        axios.get("http://localhost:8087/admin/viewPack/"+id).then(resp=>setPack(resp.data))
    }
        useEffect(fetchpackById,[]);

        const handleChange=event=>{
            event.persist();
           
            
            setPack( pack =>({...pack,[event.target.name]:event.target.value}));
    
        }
    
    
        const handleSubmit=()=>{
            let errors = {};

            if (!pack.packname) {
                errors['packNameErr'] = "pack Name is Required";
            }
           
            if (!pack.description) {
                errors['packDescriptionErr'] = "Pack Description is Required";
            }
            if (!pack.cost) {
                errors['packCostErr'] = "Pack Cost is Required";
            }
            else if (pack.cost < 0) {
                errors['packCostErr'] = "Pack Cost is Required";
    
            }
            
            setFormErrors(errors);
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors)  {



            
            const payload={
                id:pack.id,
                packname:pack.packname,
                description:pack.description,
                cost:pack.cost
                
            }
          
            axios.put("http://localhost:9091/admin/washpack/update",payload)
            // .then(resp=>alert("Pack updated successfully"))
            toast.success('Wash Pack with ID '+ pack.id +  ' Updated Sucessfully...! '  ,
          {
            position: "top-center",
            autoClose: 1000
          });
            navigate("/admin_home")
            ;}
        }
       
            return(
                <div  className='row'>
                    <AdminNavbar />
                    <div className='col-md-6' style={{padding:"0px"}}>
                    

                 <div className="vamsi d-flex justify-content-center align-items-center pt-3 mt-0" style={{paddingBottom:"10px",background:"rgba(181,149,45,0.3)"}} >
            <div className="card " style={{background:"#001c8b",width:"500px"}}>
               
                <div className="card-header " style={{backgroundColor:"#d3d3d3"}}>
                   <h3> UPDATE WASHPACK</h3>
                </div>
                <div className="card-body" style={{background:"rgba(206,202,224,0.7"}}>
                <div className="container">

                    <div className="row">


                    <div className="col-12 " >
                    <label style={{float:"left",margin:"0px",color:"white"}}> ID:</label>
                    <input type="number" className="form-control"  name="id" value={pack.id}  style={{fontWeight:"700" }} disabled />
                </div>
                <div className="col-12 ">
                    <label style={{float:"left",margin:"0px",color:"white"}} >PackName:</label>
                    <input type="text" className="form-control"  name="packname" value={pack.packname} onChange={handleChange}  style={{fontWeight:"700" }} />
                    {
                formErrors.packNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.packNameErr}</div>
            }
                </div>
                <div className="col-12 ">
                    <label style={{float:"left",margin:"0px",color:"white"}}>Description:</label>
                    <input type="text" className="form-control"  name="description" value={pack.description} onChange={handleChange}  style={{fontWeight:"700" }}/>
                    {
                formErrors.packDescriptionErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.packDescriptionErr}</div>
            }
                </div>
                <div className="col-12 ">
                    <label style={{float:"left",margin:"0px",color:"white"}}>Cost:</label>
                    <input type="number" className="form-control"  name="cost" value={pack.cost} onChange={handleChange}  style={{fontWeight:"700" }}/>
                    {
                formErrors.packCostErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.packCostErr}</div>

            }
                </div>
                
                




        
                <div className="col-12 d-flex justify-content-around">
                    <button onClick={handleSubmit} className="btn btn-outline-success btn-lg " style={{borderRadius:"25px",color:"white"}} >Update</button>
                    <button className="btn btn-outline-danger btn-lg" style={{ fontSize: "15px",borderRadius:"25px",color:"white" }} onClick={() => { window.location.href = "/admin_home" }}>Cancel</button>
                </div>
                {/* <p>
                <Link to ="/movies">Click here to get Movie List</Link></p> */}
            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div>
            <div className=' p col-md-6'>
         
            

            </div>
           
            </div>
            )
        }
        





export default UpdatePack;
