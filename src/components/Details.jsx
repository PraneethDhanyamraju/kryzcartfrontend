import React, { useEffect,useState } from "react";
import { Button} from "react-bootstrap"; 
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
export default function Details()
{   
  const notify=()=>toast("Item Successfully Added to Cart!")
  const [data,setData]=useState([]);
  const [err,setError]=useState({});
  const url=window.location.href.split('/');
  
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/products/product/${url[4]}`).then((response)=>{
      setData(response.data)     
    }).catch((err)=>{
      setError(err)
    })
  },[])
  function handleClick(item)
  {
    item.price=parseInt(item.price-(item.discount/100)*item.price)
   
  axios.get(`${process.env.REACT_APP_BASE_URL}/cart`).then((response)=>{
  const index=response.data.findIndex((cartItem)=>cartItem.id===item.id)
  if(index==-1)
  {
    item["quantity"]=1
   
    axios.post(`${process.env.REACT_APP_BASE_URL}/cart`,{data:item}).then(()=>{
      notify()
      window.setTimeout(()=>{
        window.location.href="/cart"
      },6000)
    })
  }
  else
  {
    item["quantity"]=1
 
    axios.get(`${process.env.REACT_APP_BASE_URL}/cart/increment/${item.id}`).then(()=>{
      notify()
      window.setTimeout(()=>{
        window.location.href="/cart"
      },6000)
    })
 
  
  }
})
  }
return(
  <div className="details-container">
    
  <div className="catalog">
  
      <p className="brand">BRAND {data[0]?.brand}</p>
      <p className="title">{data[0]?.title}</p>
      <Carousel  width="500px" > 
            
     
         <div>
         <img src={data[0]?.image}  className="carousel-img" />
   
     </div>
        
      </Carousel ><br/>
      <div class="des"><i  style={{"textAlign":"center"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente debitis aliquam perspiciatis laborum. Officia deleniti repellat illum nisi dignissimos dolore recusandae nihil pariatur delectus numquam vitae, error voluptates natu Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora nostrum omnis quam temporibus, ipsum incidunt. Accusamus, laudantium numquam! Quae ab dicta quaerat atque dolorem aut corporis nesciunt, delectus tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat fugiat eligendi magni earum maxime excepturi repellendus. Doloremque, porro. Amet cumque ad est omnis eveniet quam minus, quaerat itaque distinctio.</i>
  </div>
   </div> 
   
      <div className="price">
      <i style={{"textDecorationLine":"line-through"}}>&#8377;{data[0]?.price}</i>
       <h1>&#8377;{data[0]?.price-(data[0]?.discount/100)*data[0]?.price}</h1>
       <i> Rated {data[0]?.rating} <span class="fa fa-star checked"></span> </i>
       <i className='fas fa-shipping-fast'></i>Express Shipping
       <i className='fas fa-money'></i>Cash On Delivery
       <i className='fas fa-check'></i>1 Year Waranty
        <br/><br/>
        <div>
   
        </div>
        <Button variant="secondary"  style={{"width":"120px",height:"80px","background":
        "#292b2c",color:"white",border:"none"}}  onClick={()=>{
          handleClick(data[0])
        
        }}>BUY NOW</Button><br/>
        <Button variant="secondary"  style={{"width":"120px",height:"80px","background":
        "#292b2c"}}  onClick={()=>{
          handleClick(data[0])
         
}}>ADD TO CART</Button>
    
     </div>

     <ToastContainer/>
   </div>


);
}