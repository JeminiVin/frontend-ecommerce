import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import API_BASE_URL from "../config";

const OrderConfirmation = () => {
  const [order, setOrder] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderId = location.state?.orderId; // Passed from checkout page
  
  useEffect(() => {
    if (!orderId) {
      navigate("/shop"); // Redirect if no order ID
      return;
    }
    
    const fetchOrderDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/orders/${orderId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrder(res.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrderDetails();
  }, [orderId, navigate]);

  if (!order) return <p className="text-center mt-4">Loading order details...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-success text-center">🎉 Order Placed Successfully! 🎉</h2>
      <p className="text-center">Order ID: <strong>{order._id}</strong></p>
      
      <h4>Order Summary:</h4>
      <ul className="list-group">
        {order.items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <span>{item.product.name} (x{item.quantity})</span>
            <span>₹{item.product.price * item.quantity}</span>
          </li>
        ))}
      </ul>

      <h4 className="mt-3">Total: ₹{order.totalAmount}</h4>
      <p><strong>Address:</strong> {order.address}</p>
      <p><strong>Payment Method:</strong> {order.paymentMethod}</p>

      <button className="btn btn-primary w-100 mt-3" onClick={() => navigate("/shop")}>
        Continue Shopping 🛒
      </button>
      <button className="btn btn-primary w-100 mt-3" onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>
      <h2>Check confirmation email</h2>
    </div>
  );
};

export default OrderConfirmation;
