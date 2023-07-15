import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, Button} from 'react-bootstrap'; 
import { LazyLoadComponent,LazyLoadImage } from 'react-lazy-load-image-component'; 
import { useEffect,useState } from "react";


export default function DataCard()
{
  const notify = () => toast("Item Successfully Added to Cart!");
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/products`).then((response)=>{
      setData(response.data)
    }).catch(err=>console.log(err))
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
  

    return<>
    <br/>
    <br/>
    <div class="items-list">     
              
    <div className='items-container'>
    {data.map((item)=>(

    <div className="mycard" >
  <LazyLoadComponent delayTime={1000} placeholder={<Card style={{width:"325px",height:"500px"}}/>}>
   
      <Card style={{ width: '325px',height:'500px'}}>
       < Card.Img effect="blur" variant="top" style={{width:"auto",height:"300px"}} src={item.image} onClick={
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
    
    <ToastContainer />
    </LazyLoadComponent>
    </div>
   
   ))}
   </div>
        <i>&copy; Pexels <a href="https://www.pexels.com/">Images</a></i>
 </div>
 
    </>;
}