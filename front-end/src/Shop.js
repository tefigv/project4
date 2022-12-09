import tooth from './img/toothbits.png';
import mouth from './img/mouthwash.png';
import gel from './img/whitening-gel.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style-shop.css';

function Shop() {
  // setup state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");


  const fetchPro = async() => {
    try {      
      const response = await axios.get("/api/pro");
      setProducts(response.data.products);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  }
  
  const fetchCart = async() => {
    try {      
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  }
  
  const addCart = async(product) => {
    try {
      await axios.post("/api/cart/" + product.id +'/' +product.name +'/'+ product.price);
    } catch(error) {
      setError("error adding to cart" + error);
    }
  }
  console.log(products);
 

  // fetch products data
  useEffect(() => {
    fetchPro();
  },[]);
  
    const addToCart = async(product) => {
    await addCart(product);
    fetchCart();
  }  

  // render results
  return (
     <>
       <div className='One'>     
    <div className='banner'>
      <h1>All Products</h1>
      <h4>Build your own plastic-free routine</h4>
    </div>
  </div>     
  <div className='content'>
    <div className='product-list'>
      <div className='type'>
        <h1 className ='content-h1'>Oral Care</h1>
          <div className='line'></div>
      </div>
            <div className='products-wraper'>
            <div className='products'>
            <div className='product'>
              {error}
              <h1> Products </h1>
              { products.map (product => (
                <div key={product.id} className="product">
                  <div className="problem">
                   <div> <h3>{product.img}</h3></div>
                    <div className = 'name'><h3>{product.name}</h3></div>
                    <h3>${product.price}</h3>
                      <button onClick={e => addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              ))}     
            </div>
            </div>
        </div>
      </div>
                
    </div>
    
            
    </>    
  );
}

export default Shop;