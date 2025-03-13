import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if user is logged in


  // ✅ Fetch Cart Items to Update UI
  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(addToCart(res.data.items)); // Update Redux Store
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // ✅ Handle Add to Cart
  const handleAddToCart = async (product) => {
    if (!token) {
      toast.warning("Please log in to add items to your cart!", { position: "top-right" });
      navigate("/login");
      return;
    }

    try {
      // 🔥 Add to Cart in Backend
      await axios.post(
        `${API_BASE_URL}/api/cart/add`,
        { productId: product._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
       
      );
      navigate("/cart")
      // ✅ Fetch updated cart
      fetchCart();

      toast.success("Item successfully added to cart!");
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error("Error adding item to cart.");
    }
  };

  // ✅ Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (category) params.append("category", category);
        if (search) params.append("search", search);

        const res = await axios.get(`${API_BASE_URL}/api/products?${params.toString()}`);
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, category]);

  if (loading) return <p className="text-center mt-4">Loading products...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Listing</h2>

      {/* Search and Filter Controls */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-25 me-2"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       
      </div>

      {/* Product Grid */}
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price}</p>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleAddToCart(product)}
                  disabled={!token} // Disable if not logged in
                >
                  {token ? "Add to Cart" : "Log in to Shop"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
