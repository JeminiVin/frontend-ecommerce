import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/orders/user-orders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(response.data.orders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-purple-400 to-blue-500 shadow-2xl rounded-xl border border-gray-300 animate-fade-in">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-extrabold text-black drop-shadow-lg">
          🛒 User Dashboard - Order History
        </h2>
    
        
      </div>

      {/* Table Section */}
      {loading ? (
        <p className="text-center text-white text-lg animate-pulse">
          Loading orders...
        </p>
      ) : (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-xl bg-white animate-slide-in">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-500 text-black text-lg">
                <th className="p-4 border border-black-300">Order ID</th>
                <th className="p-4 border border-black-300">Items</th>
                <th className="p-4 border border-black-300">Total Price</th>
                <th className="p-4 border border-black-300">Status</th>
                <th className="p-4 border border-black-300">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className={`transition duration-300 ease-in-out ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
                  } hover:bg-yellow-100 hover:scale-[1.02] hover:shadow-lg`}
                >
                  <td className="p-4 text-blue-800 font-semibold border border-gray-300">
                    {order._id}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {order.items.map((item) => (
                      <p key={item.product._id} className="text-gray-700">
                        {item.product.name}{" "}
                        <span className="text-sm text-gray-500">
                          (x{item.quantity})
                        </span>
                      </p>
                    ))}
                  </td>
                  <td className="p-4 font-bold text-green-600 border border-gray-300">
                    ₹{order.totalAmount}
                  </td>
                  <td
                    className={`p-4 font-semibold border border-gray-300 ${
                      order.status === "Delivered"
                        ? "text-green-500"
                        : order.status === "Shipped"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="p-4 text-gray-600 border border-gray-300">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button type="button" class="btn btn-danger mx-5 my-5" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
