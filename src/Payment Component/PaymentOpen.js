import React, { Component } from "react";
import PaymentService from "./PaymentService";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from "react-bootstrap";
    toast.configure()

    /**To Show Add Toastify Text */
    
    const notify = () => {
        
      toast.success('Payment Done Successfully!!',
        {
          position: "top-center",
          autoClose: 3000
        });
        
        

    }


export default class PaymentOpen extends Component {
  state = {
    amount: "",
  };

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let orderDetail = { amount: this.state.amount };

    PaymentService.createOrder(orderDetail).then((res) => {
      console.log("PAYMENT ORDER RESPONSE", res);
      var options = {
        key: "rzp_test_0WdhmJkGlTdoLb", 
        amount: res.data.amount,
        currency: "INR",
        name: "Green Wash Car Wash",
       
        order_id: res.data.id,
        handler: function (response) {
          console.log(response);
          alert("Payment Successfull !!!");
         
          notify();
          window.location.href = "/Userhome";
        }
        ,
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "Green Wash Car Wash",
        },
        theme: {
          color: "#26a69a",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    });
  };

  render() {
    return (
      <div>

        <Row>
        <h2 style={{textAlign:"center"}}>Payment</h2>
        <Col>
        <form
          style={{
            backgroundColor: "#488AC7",
            width: "250px",
            height: "340px",
            marginLeft: "150px",
            marginTop: "15px",
          }}
        >
          <br />
          <br />
         
          <div className="form-outline mb-4 ">
            <label className="form-label">
              <b> Amount</b>
            </label>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              placeholder="In Rupees"
              name="amount"
              value={this.state.amount}
              onChange={this.onHandleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-success btn-block mb-4"
            onClick={this.onSubmit}
          >
            Procced To Pay
          </button>
        </form>
        </Col>
        <Col  >

          <img className="img-back" src={"https://i.pinimg.com/originals/f8/c4/22/f8c422a0a0e6793b3f9113d419c5143a.gif"} alt="image" />

        </Col>
        </Row>
      </div>
    );
  }
}
