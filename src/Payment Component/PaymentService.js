import axios from "axios";

const API_BASE_URL = "http://localhost:9004/razorPayment";

class PaymentService {

    createOrder(Data){
        return axios.post(API_BASE_URL +"/createorder", Data);
    }
}

export default new PaymentService()