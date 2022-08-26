// import React, { useState } from 'react';
// import axios from 'axios';

// import {  toast } from 'react-toastify';
// import AdminNavbar from './AdminNab';


// const Addpacks = () => {

//   const [id, setId] = useState("")
//   const [packname, setName] = useState("")
//   const [cost, setCost] = useState("")
//   const [description, setDescription] = useState("")

//   const inputidHandler = (e) => {
//     setId(e.target.value)
//   }
//   const inputnameHandler = (e) => {
//     setName(e.target.value)
//   }
//   const inputcostdHandler = (e) => {
//     setCost(e.target.value)
//   }
//   const inputdescriptionHandler = (e) => {
//     setDescription(e.target.value)
//   }



//   const handleSubmit = (e) => {
//     toast.success('Submitted Successfully',{

//       position:'top-center'

//   });
//     const data = {
//       id:id,
//       packname: packname,
//       cost:cost,
//       description:description
//     }
//     axios.post('http://localhost:9091/admin/addwashpack', data)
//       .then(function (response) {
//         console.log(response)
//       })
//       .catch(function (error) {
//         console.log(error)
//       })

//     e.preventDefault()
//   }

//   return (
//     <>
//      <AdminNavbar />
//       <div className='in'>
//         <div className='container'>
//           <h2 className='title '> Add packs</h2>
//           <form className='form' onSubmit={handleSubmit}>
//             <div className='input'>
//               <label>ID:  </label>
//               <input type='text' value={id} onChange={inputidHandler} />
//             </div>
//             <div className='input'>
//               <label>PackName:  </label>
//               <input type='text' value={packname} onChange={inputnameHandler} />
//             </div>
//             <div classname='input'>
//               <label>Descripton: </label>
//               <input type='text' value={description} onChange={inputdescriptionHandler} />
//             </div>
//             <div className='input'>
//               <label>Cost:  </label>
//               <input type='text' value={cost} onChange={inputcostdHandler} />
//             </div>



//             <div >
//               <button className='submit'value="submit" >submit</button>
//             </div>


//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Addpacks;


import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import AdminNavbar from "./AdminNab";
import { CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebar} from 'cdbreact'; 
import {NavLink} from 'react-router-dom'; 
import {} from 'react-router-dom';

function Addpacks() {
    const navigate = useNavigate();
    const [pack, setPack] = useState({

        id: "",

        packname: "",
        description: "",
        cost: "",

    })
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (event) => {
        event.persist();
        setPack(pack => ({ ...pack, [event.target.name]: event.target.value }));

    }


    const handleSubmit = () => {
       

        let errors = {};

        if (!pack.id) {
            errors['packIdErr'] = "pack id is Required";
        }
        if (!pack.packname) {
            errors['packNameErr'] = "PackName is Required";
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
        if (noErrors) {
            const payload = {

                id: pack.id,
                packname: pack.packname,
                description: pack.description,
                cost: pack.cost,


            }

            axios.post("http://localhost:8087/admin/addwashpack", payload)
                // .then(resp => alert("WashPack saved"));
                // alert("Washpack added sucessfully");
                toast.success('Wash Pack with ID '+ pack.id +  ' added Sucessfully...! '  ,
                {
                  position: "top-center",
                  autoClose: 2000
                });
                navigate("/admin_home")

        }

    }


    return (
        <div className='p row'>

<AdminNavbar />
<div className='col-md-3'>
      <div className='h '  style={{ height:'100%', overflow:'scroll initial'}}>
          <CDBSidebar textColer="#fff" backgroundColor="rgb(37, 90, 122)">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
             <div > Green Wash Car Wash</div>
              </CDBSidebarHeader>
              <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
                      <NavLink exact to="/profile" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              User Profiles
                          </CDBSidebarMenuItem>
                      </NavLink>
                     
                       <CDBSidebarMenuItem icon="columns">
                          <Link to="/WasherProfile">Washer Profiles</Link>
                             
                          </CDBSidebarMenuItem>
                     
                          <CDBSidebarMenuItem icon="columns">
                          <Link to="/orderdetails">Orders</Link>
                             
                          </CDBSidebarMenuItem>
                     
                           <CDBSidebarMenuItem icon="columns">
                           <Link to="/addpacks">Add Washpacks</Link>
                              
                          </CDBSidebarMenuItem>
                      
                  </CDBSidebarMenu>
              </CDBSidebarContent>
              
          </CDBSidebar>
      </div>

      </div>
     



                      <div className=" col-md-9">

    
            <div className='container-fluid  ' style={{ padding: "0px" }}>
                <div className="siva  justify-content-center align-items-center pt-3 mt-0 "style={{width:"130%"}}   >

                    <div className="card  " style={{ background: "rgba(0,0,0,0.5)", boxShadow: "0 5px 15px rgba(0,0,0,0.5)", marginRight: "900px" ,width:"400px"}} >
                       
                        <div className="card-header " style={{ backgroundColor: "rgba(209,209,209,0.5)", boxShadow: "0 5px 15px rgba(0,0,0,0.5)" }}>
                            <h3><strong>ADD WASHPACK</strong></h3>
                        </div>
                        <div className="card-body">
                            <div className="container">

                                <div className="row">



                                    <div   >
                                        <label style={{ float: "left", margin: "0px", color: "white" }}>WaskPack Id:</label>
                                        <input type="number" className="form-control" id="id" name="id" value={pack.id} onChange={handleChange} style={{ fontWeight: "700" }} />
                                        {
                                            formErrors.packIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.packIdErr}</div>
                                        }
                                    </div>
                                    <div >
                                        <label style={{ float: "left", margin: "0px", color: "white" }}>PackName:</label>
                                        <input type="text" className="form-control" name="packname" value={pack.packname} onChange={handleChange} style={{ fontWeight: "700" }} />
                                        {
                                            formErrors.packNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.packNameErr}</div>
                                        }
                                    </div>
                                    <div >
                                        <label style={{ float: "left", margin: "0px", color: "white" }}>Description:</label>
                                        <textarea type="text" className="form-control" name="description" value={pack.description} onChange={handleChange} style={{ fontWeight: "700" }}></textarea>
                                        {
                                            formErrors.packDescriptionErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.packDescriptionErr}</div>
                                        }
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label style={{ float: "left", margin: "0px", color: "white" }} >Cost:</label>
                                       
                                        <input type="number" className="form-control" name="cost" value={pack.cost} onChange={handleChange} style={{ fontWeight: "700" }} />

                                        {
                                            formErrors.packCostErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.packCostErr}</div>
                                        }
                                    </div>



                                    <div className="col-12 d-flex justify-content-around">
                                        <button onClick={handleSubmit} className="btn btn-success mr-2" style={{ fontSize: "15px",borderRadius:"25px" }}>Submit</button>
                                        <button className="btn btn-danger" style={{ fontSize: "15px",borderRadius:"25px" }} onClick={() => { window.location.href = "/admin_home" }}>Cancel</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                {/* <div className="col-md-3">

</div> */}
            </div>
            
    







    )
}
export default Addpacks;









// import React, { useState } from 'react';
// import axios from 'axios';

// import {  toast } from 'react-toastify';


// const Addpacks = () => {

//   const [id, setId] = useState("")
//   const [packname, setName] = useState("")
//   const [cost, setCost] = useState("")
//   const [description, setDescription] = useState("")
 
//   const inputidHandler = (e) => {
//     setId(e.target.value)
//   }
//   const inputnameHandler = (e) => {
//     setName(e.target.value)
//   }
//   const inputcostdHandler = (e) => {
//     setCost(e.target.value)
//   }
//   const inputdescriptionHandler = (e) => {
//     setDescription(e.target.value)
//   }
  
 

//   const handleSubmit = (e) => {
//     toast.success('Submitted Successfully',{

//       position:'top-center'

//   });
//     const data = {
//       id:id,
//       packname: packname,
//       cost:cost,
//       description:description
//     }
//     axios.post('http://localhost:9091/admin/addwashpack', data)
//       .then(function (response) {
//         console.log(response)
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
      
//     e.preventDefault()
//   }

//   return (
//     <>
//       <div className='in'>
//         <div className='container'>
//           <h2 className='title'> Add packs</h2>
//           <form className='form' onSubmit={handleSubmit}>
//             <div className='input'>
//               <label>id:  </label>
//               <input type='text' value={id} onChange={inputidHandler} />
//             </div>
//             <div className='input'>
//               <label>packname:  </label>
//               <input type='text' value={packname} onChange={inputnameHandler} />
//             </div>
//             <div className='input'>
//               <label>cost:  </label>
//               <input type='text' value={cost} onChange={inputcostdHandler} />
//             </div>
//             <div classname='input'>
//               <label>Descripton: </label>
//               <input type='text' value={description} onChange={inputdescriptionHandler} />
//             </div>
            

//             <div >
//               <button className='submit'value="submit" >submit</button>
//             </div>
            
           
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Addpacks