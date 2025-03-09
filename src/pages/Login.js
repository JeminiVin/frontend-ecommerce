import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {


    const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", user);
      localStorage.setItem("token", res.data.token);

      // Success Toast
      toast.success("Login successful!", { position: "top-right" });

      // Navigate after a short delay
      setTimeout(() => {
        navigate("/shop");
      }, 1500);
      
    } catch (error) {
      // Error Toast
      toast.error("Invalid credentials!", { position: "top-right" });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center text-primary mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup" className="text-decoration-none text-primary">Sign up</a>
        </p>
      </div>

      {/* Toast Container (for showing messages) */}
      <ToastContainer />
    </div>
  )
}

export default Login