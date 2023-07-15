import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Route,Routes} from "react-router-dom";
import CardComponent from "./CardComponent"
import Home from "./Home";
import Details from "./Details";
import Filter from "./Filter";
import DataCard from "./DataCard";
import Cart from "./Cart";


export default function NavigationBar()
{
    return(
  <>

      <Navbar bg="" variant=""
      sticky="top" expand="lg" collapseOnSelect>
      <Navbar.Brand href="/">
        KRYZCART <i class="fa fa-shopping-cart cart" ></i>
      </Navbar.Brand>
      <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav  className='m-auto'>

        <Nav.Link href="/products">PRODUCTS</Nav.Link>
                          
        <Nav.Link href="/shirts">SHIRTS</Nav.Link>
        
        <Nav.Link href="/jeans">JEANS</Nav.Link>
                  
        <Nav.Link href="/jackets">JACKETS</Nav.Link>
                  
      
        <Nav.Link href="/phones">MOBILES</Nav.Link>
        
        <Nav.Link href="/headphone">HEADPHONES</Nav.Link>
                  
        <Nav.Link href="/shoes">SHOES</Nav.Link>
                  

       
       
        <Nav.Link href="/cart"><i class="fa fa-shopping-cart cart">MY CART</i></Nav.Link>
       
        <Nav.Link href="#blog">HELLO RAM KUMAR</Nav.Link>
       </Nav>
      </Navbar.Collapse>

    </Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shoes" element={<CardComponent/>}/>
      <Route path="/headphone" element={<CardComponent/>}/>
      <Route path="/phones" element={<CardComponent/>}/>
      <Route path="/jackets" element={<CardComponent/>}/>
      <Route path="/jeans" element={<CardComponent/>}/>   
      <Route path="/shirts" element={<CardComponent/>}/>
      <Route path="/products/:id" element={<Details/>}/>
      <Route path="/:id" element={<Filter/>}/>
      <Route path="/products" element={<DataCard/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
</>        
 
    );
}