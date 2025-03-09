import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Product from "./pages/Products";
import WelcomePage from "./pages/WelcomePage"
import Cart from "./pages/Cart";
import AboutEshop from "./components/AboutEshop"
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <div>
     <ToastContainer/> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutEshop/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shop' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
      </div>
  );
}

export default App;
