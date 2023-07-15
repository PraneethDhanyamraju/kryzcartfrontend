import React from "react";
import axios from "axios";
import {Container ,Card, Col, Button} from 'react-bootstrap';  

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadComponent } from 'react-lazy-load-image-component'; 
export default function MyCard(props)
{
  function handleClick(item)
  {
    const notify = () => toast("Item Successfully Added to Cart!");
    item.price=parseInt(item.price-(item.discount/100)*item.price)
 
  axios.get(`${process.env.REACT_APP_BASE_URL}/cart`).then((response)=>{
  const index=response.data.findIndex((cartItem)=>cartItem.id===item.id)
  if(index==-1)
  {
    item["quantity"]=1
    
    axios.post(`${process.env.REACT_APP_BASE_URL}/cart`,{data:item})
    notify()
  }
  else
  {
  
  
    axios.get(`${process.env.REACT_APP_BASE_URL}/cart/increment/${item.id}`)
    notify()
  }
})
  }
  
 
    return<>
    
    <div class="items-list">               
    <div className='items-container'>
    {props?.item?.map((item)=>(
 <LazyLoadComponent delayTime={500} placeholder={<Card style={{width:"325px",height:"500px",marginRight:"20px"}}/>}>
    <div className="mycard" >
      <Card style={{ width: '325px',height:'500px'}}>
       <Card.Img variant="top" style={{width:"auto",height:"300px"}} src={item.image} onClick={
        ()=>{
          window.location.href=`/products/${item.id}`
        }
      } />
      <Card.Body>
        <Card.Title>{item.category.toUpperCase()}</Card.Title>
        <Card.Text>
          BRAND-{item.brand}
        </Card.Text>
        <i style={{"textDecorationLine":"line-through"}}>&#8377;{item.price}</i>
        <Card.Title>&#8377;{parseInt(item.price-(item.discount/100)*item.price)}<br/></Card.Title>
        <Button variant="secondary left" onClick={()=>{
          handleClick(item)
        }}>ADD TO CART</Button>&nbsp;&nbsp;
      </Card.Body>
    </Card>

    </div>
    </LazyLoadComponent>
   ))}
   </div>
   </div>
   <ToastContainer/>
 
    </>;

}