
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link
} from "react-router-dom";

import Shop from './Shop';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import Cart from "./Cart/Cart";


function App() {

  return (
  <Router>
  <nav>
<Link to="/" className="link">First page</Link>
<Link to="/about" className="link">About</Link>
<Link to="/shop" className="link">Shop</Link>
<Link to="/contact" className="link">Contact</Link>    
<Link to="/cart"><img className="cartIcon" src="https://skin-super-shop-lz.netlify.app/static/media/basket_96252.11addff2c8896b11c8752d24b775771f.svg" alt="carted" width="30px"/>
</Link>

  </nav>

  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/cart" element={<Cart/>}/>
  </Routes>
</Router>
)}


export default App;

