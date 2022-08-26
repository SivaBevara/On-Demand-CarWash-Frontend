import React , { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
// import Navbar from "../util/navbar";
import { Navbar } from "react-bootstrap";
// import Navbar from './util/navbar';




function FetchAllPacks(){
    const [pack,setPack] = useState([]);
    const fetchAll=()=>{axios.get("http://localhost:8087/admin/washpack").then(res=>setPack(res.data))}
    useEffect(fetchAll,[]);
    
    


    return(

        <div>
 {/* <AdminNavbar /> */}

        
            <div className='vinay container-fluid' style={{color:"white",padding:"0"}} >
                
                
                <h3 style={{background:"rgba(0,0,0,0.5)",margin:"0px"}}><strong>LIST OF WASHPACKS</strong></h3>
                <table className="table table-bordered" style={{background:"rgba(0,0,0,0.5)",color:"white",width:"100%"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PACKNAME</th>
                            <th>DESCRIPTION</th>
                            <th>COST</th>
    
                           
                            <th>UPDATE</th>
                            {/* <th>DELETE</th> */}
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
                                    
                                   
                                    <td><Link to ={`/Details/edit/${m.id}`}className="btn btn-outline-primary">EDIT</Link></td>
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
export default FetchAllPacks;