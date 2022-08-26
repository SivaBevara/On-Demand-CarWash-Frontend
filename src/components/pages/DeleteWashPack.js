// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router';
// import { useNavigate } from 'react-router-dom';
// // import { baseUrl } from '../util/AppConstants';
// function DeletePack() {
    
//     const [pack, setPack] = useState(null)
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const fetchPackById = () => {
//         axios.get("http://localhost:8087/admin/viewPack/"+id).then(resp => setPack(resp.data))
//     }
//     useEffect(fetchPackById);
//     const deleteWashPack = () => {
//         axios.delete("http://localhost:9091/admin/washpack/deletepack/" + id).then(resp => {
//             // fetch('http://localhost:9091/admin/washpack/deletepack/' + id, {
//             //                 mode: 'no-cors',
                            
//             //                 method: "Delete",
//             //                 headers: {
//             //                      "Content-Type": "application/json"
//             //                 },
//             //                 body: JSON.stringify()
//             //      })



           


//             alert(resp.data);
           
//         })
      




//     }
//     return (
//         <div>
//             <h2>WashPack Details</h2>
//             {
//                 pack !== null &&
//                 <div >
                    
//                     <p> ID : {pack.id}</p>
//                     <p> PACKNAME : {pack.packname}</p>
//                     <p> DESCRIPTION : {pack.description}</p>
//                     <p> COST : {pack.cost}</p>
                   





//                 </div>
//             }
//             <div><button onClick={deleteWashPack}>Delete</button></div>
//         </div>
//     )
// }
// export default DeletePack;






import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';


function DeleteWashPack() {
    const[product, setProduct] = useState(null)
    const { id } = useParams();
    const fetchProductById = () => {
        axios.get("http://localhost:8087/admin/viewPack/"+ id).then(resp => setProduct(resp.data))
        
    }
    useEffect(fetchProductById, []);
    const deleteProduct  = () => {
        axios.delete("http://localhost:8087/admin/deletepack/" + id).then(resp => alert(resp.data));
        
        // alert("Pack Deleted Successfully")
    }
    // const config = {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     }
    //   };
  return (
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
                    <button className=" btn btn-outline-danger "style={{marginLeft:"15px",marginBottom:"10px",borderRadius:"25px"}} onClick={deleteProduct}>Delete Pack</button>             
                </div>
            }<br/>
        
           
       
        </Col>
        {/* <Col >
            <div className='deletepage' ></div>
        </Col> */}
        </Row>
        </Container>
  )
}

export default DeleteWashPack