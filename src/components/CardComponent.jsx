import { useEffect, useState } from 'react';
import axios from "axios";
import Search from "./Search"
import MyCard from "./MyCard";



function CardComponent() {
  const [things,setThings]=useState([]);
  const [error,setError]=useState();
  const url=window.location.href.split('/');
console.log(url[3])
  useEffect(()=>{  axios.get(`${process.env.REACT_APP_BASE_URL}/products/${url[3]}`).then((res)=>
  {
    setThings(res.data)
    
  }).catch(err=>console.log(err))
  
},[])

  return (
    <>
  <br/>
  <Search/>
  <div class="items-list">
    <h1></h1>
    </div>
   
    <br/>    
    <div className='items-container'>
    <MyCard item={things}/> 
    </div>
  

  </>
  );
}

export default CardComponent;