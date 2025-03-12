import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [backendCart, setBackendCart] = useState([]); // Sync with Backend Cart

  useEffect(() => {
    fetchCart();
  }, []);
  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to view your cart.");
      return;
    }
  
    try {
      const res = await axios.get(`${API_BASE_URL}/api/cart/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBackendCart(res.data.items || []); // 🔥 Always ensure an array!
    } catch (error) {
      toast.error("Failed to load cart items.");
      setBackendCart([]); // 🔥 Prevent undefined state!
    }
};


  // ✅ Add item to cart
  const handleAddToCart = async (productId, quantity) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please log in to add items to the cart.");
      return;
    }

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/cart/add`,
        { productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setBackendCart(res.data.cart.items);
      toast.success("Item added to cart!");
    } catch (error) {
      toast.error("Error adding item to cart.");
    }
  };

  // ✅ Update item quantity
  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return handleRemoveFromCart(productId);

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/cart/add`,
        { productId, quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setBackendCart(res.data.cart.items);
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    } catch (error) {
      toast.error("Error updating quantity.");
    }
  };

  // ✅ Remove item from cart
  const handleRemoveFromCart = async (productId) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`${API_BASE_URL}/api/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBackendCart(backendCart.filter((item) => item.product._id !== productId));
      dispatch(removeFromCart(productId));
      toast.info("Item removed from cart!");
    } catch (error) {
      toast.error("Error removing item.");
    }
  };

  const handleCheckout = () => {
    if (backendCart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  const totalPrice = backendCart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {backendCart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {backendCart.map((item) => (
              <li key={item.product._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <p className="mb-1">{item.product.name}</p>
                    <p className="mb-1">Price: ₹{item.product.price}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.product._id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4 className="text-end mt-3">Total Price: ₹{totalPrice}</h4>
          <button className="btn btn-success w-100 mt-3" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
