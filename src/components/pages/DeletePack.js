






import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function DeletePack() {
    const navigate = useNavigate();
    const[product, setProduct] = useState(null)
    const { id } = useParams();
    const fetchProductById = () => {
        axios.get("http://localhost:8087/admin/viewPack/"+ id).then(resp => setProduct(resp.data))
        
    }
    useEffect(fetchProductById, []);
    const deleteProduct  = () => {
       
        axios.delete("http://localhost:8087/admin/deletepack"+ id).then(resp => alert(resp.data));
        
        // alert("Pack Deleted Successfully")
        toast.success('WashPack Deleted '  ,
        {
          position: "top-center",
          autoClose: 500
        });
        navigate("/admin_home")
    }
     
  return (
    <div className='shady'>
    <Container >
          
            <Row>
                
            <h2 ><b><i style={{ color:' blue'}}> DELETE WASHPACK</i></b></h2><hr></hr>
                <Col>
                <br></br> <br></br>
       
        
            {
                product !== null &&
                <div>
                    <p><b >  ID : <i style={{ color:' green'}}>{product.id}</i></b> </p>
                    <p><b > NAME:<i style={{ color:' green'}}> {product.packname}</i></b></p>
                    <p><b >DESCRIPTION:<i style={{ color:' green'}}>{product.description}</i></b></p>
                    <p><b >COST :<i style={{ color:' green'}}>{product.cost}</i></b></p>
                   
                    {/* <button className='delete' onClick={deleteProduct}><b> Delete</b></button>    */}
                    <button className=" btn btn-danger "style={{marginLeft:"15px",marginBottom:"10px",borderRadius:"25px"}} onClick={deleteProduct}>Delete Pack</button> 
                    <button className="btn btn-success " style={{ marginLeft:"15px",marginBottom:"10px",borderRadius:"15px"}} onClick={() => { window.location.href = "/admin_home" }}>Cancel</button>            
                </div>
            }<br/>
        
           
       
        </Col>
        {/* <Col >
            <div className='deletepage' ></div>
        </Col> */}
        </Row>
        </Container>
        </div>
  )
}

export default DeletePack