import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  let total=0;

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/cart`).then((response)=>{
      setCartItems(response.data)
    })
  })
  function handleClick(item)
  {
    if(item.quantity<=1)
    {
      axios.get(`${process.env.REACT_APP_BASE_URL}/cart/remove/${item.id}`).then(()=>{
       axios.get(`${process.env.REACT_APP_BASE_URL}/cart`).then((response)=>{
        setCartItems(response.data)
        toast("Item Removed From Cart...")
       })
      })
  
    }
    else{
    axios.get(`${process.env.REACT_APP_BASE_URL}/cart/decrement/${item.id}`).then(()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}/cart`).then((response)=>{
       setCartItems(response.data)
      })
    })
    }
  }
  function increment(item)
  {
     axios.get(`${process.env.REACT_APP_BASE_URL}/cart/increment/${item.id}`).then(()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}/cart`).then((response)=>{
       setCartItems(response.data)
      })
    })
   
  }
 total=cartItems.reduce((total,item)=>total+item.price,0)
 
  return (
    
    <div class="cart-container"> 
     <div class="shopping-cart">
      <h1 style={{"marginLeft":"100px"}}>CART</h1>
      <div class="cart-element">
        <h4 >PRODUCT</h4>
        <h4 style={{"marginLeft":"258px"}}>QUANTITY</h4>
        <h4>PRICE</h4>
      </div>
        {cartItems[1]?cartItems.slice(1).map((item)=>(
     
      <div class="cart-element" id={item.id}>
        <div class="cart-image">
      <img class="cart-img" src={item.image}/>
        </div>
        <div class="cart-parameters">
        <div class="cart-title">
         <h4>{item.brand}-{item.category.toUpperCase()}</h4>
        </div>
        <div class="cart-quantity">
        <Button variant="secondary" onClick={()=>{handleClick(item)}}>-</Button>
         <h4>{item.quantity}</h4> 
         <Button variant="secondary" onClick={()=>{increment(item)}}>+</Button>
        </div>
        <div class="cart-price">
    <h4>&#8377;{item.price}</h4>      
      </div>
      </div>
      </div>
   

              )):
        <h1>Sorry Please add items in the Cart the Cart is Empty</h1>}     
   </div>      
      <div class="cart-total">
      <i className='fas fa-shipping-fast'>Express Shipping</i>
       <i className='fas fa-money'>Cash On Delivery</i>
       <i className='fas fa-check'>1 Year Waranty</i>
       <i className='fas fa-undo'>Easy Returns</i>
              <Button  className="pay" variant="secondary" onClick={()=>{
                toast("Order Placed Successfully!")
                axios.get("${process.env.REACT_APP_BASE_URL}/removeall")
                window.setTimeout(()=>{
                  window.location.href="/"
                },6000)
    }}><h2>&#8377;{total}</h2></Button>
        <br/><br/>
        <div>
        </div>
        </div>
   <ToastContainer/>
   </div>
  );
};

export default Cart;
