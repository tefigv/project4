import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop.js";
import Sustainability from "./Sustainability";
import Cart from "./Cart.js";
import Nopage from "./Nopage.js";
import './App.css';
function App() {
return (
   <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />}  />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Nopage to="/" />}  />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  ) ;     
}

export default App;
