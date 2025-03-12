import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux"; // Import useSelector to access cart
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API_BASE_URL from "../config"

const Checkout = () => {
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart); // Get cart items from Redux store

    const handleCheckout = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post(`${API_BASE_URL}/api/orders`, 
                { address, paymentMethod }, 
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success("order placed Successfully!")
            navigate("/order-confirmation", { state: { orderId: res.data.order._id } });
        } catch (error) {
            console.error("Error placing order", error);
        }
    };
    
    return (
        <div className="container mt-4">
            <h2 className="mb-3">Checkout</h2>

            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <select
                    className="form-select"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="COD">Cash on Delivery</option>
                    <option value="Online">Online Payment</option>
                </select>
            </div>

            <button className="btn btn-primary" onClick={handleCheckout}>
                Place Order
            </button>

            <ToastContainer />
        </div>
    );
};

export default Checkout;
