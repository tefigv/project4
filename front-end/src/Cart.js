import tooth from './img/toothbits.png';
import mouth from './img/mouthwash.png';
import gel from './img/whitening-gel.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style-shop.css';

function Cart() {
  // setup state
  const [cart, setCart] = useState([]);
 
  const [error, setError] = useState("");
  
  const fetchCart = async() => {
    try {      
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  }
  
  const addItem = async(item) => {
    let quantity = item.quantity;
    quantity++
    try {
      await axios.put("/api/cart/" + item.id + "/" + quantity);
       fetchCart();
    } catch(error) {
      setError("error adding item" + error);
    }
  };
  
  const minusItem = async(item) => {
    let quantity = item.quantity;
    if(quantity < 2)
    {
     removeItem(item);
    }else{
        quantity --;  
     try{
          await axios.put("/api/cart/" + item.id + "/" + quantity);
           fetchCart(); 
        }catch(error){
           setError("error decreasing item" + error);
        }
    }
  };
  
  const removeItem = async(item) => {
    try {
      await axios.delete("/api/cart/" + item.id);
      fetchCart();
        } catch(error) {
      setError("error removing item" + error);
        }
    };
 

  // fetch products data
  useEffect(() => {
    fetchCart();
  },[]);
  
    const add = async(item) => {
    await addItem(item);
    fetchCart();
    }  
    
    const minus = async(item) => {
    await minusItem(item);
    fetchCart();
    }  
    
    const remove = async(item) => {
    await removeItem(item);
    fetchCart();
    }  

  // render results
  return (
     <>
     {error}
       <div className='One'>     
    <div className='banner'>
      <h1>My Crat</h1>
      <h4>Free shipping on orders over $32</h4>
    </div>
  </div>     
  <div className='content'>
    <div className='product-list'>
      <div className='type'>
      </div>
            <div className='products-wraper'>
            <div className='products'>
            <div className='product'>
              { cart.map (item => (
                <div>
                <p>{item.name}, {item.quantity}</p>
                <button onClick={e =>minus(item)}>-</button>
                <button onClick={e =>remove(item)}>Remove</button>
                <button onClick={e =>add(item)}>+</button>
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

export default Cart;