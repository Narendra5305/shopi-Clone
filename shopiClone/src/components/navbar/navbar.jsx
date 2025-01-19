import React,{useState,useContext} from "react";

import "../navbar/navbar.css"

import { useNavigate } from "react-router";
import { NavLink } from 'react-router-dom';
import { CartContext } from "../../context/cartcontext";
import CheckOutCart from "../checkOutCart/checkOutCart";




let NavBar = () =>{
    const {cart ,AddToCart} = useContext(CartContext);

    const [isOpen , setIsOpen] = useState(false) ;

    const [isCheckOutOpen , setIsCheckOutOpen] = useState(false) ;

    const navigate = useNavigate();
    

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
   


    const handleCheckOutCart =()=>{
        setIsCheckOutOpen(!isCheckOutOpen)
    }

   
 
    return(
        <nav className="navbar">
            <div className="navlist-1" >
                <ul className="nav-menu-1"  style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                    <li onClick={()=> navigate('/')} style={{cursor:'pointer'}}>Shopi</li>
                    <li onClick={()=> navigate('/')} style={{cursor:'pointer'}}>All</li>
                    <li onClick={()=> navigate('/clothes')} style={{cursor:'pointer'}}>Clothes</li>
                    <li onClick={()=> navigate('/electronics')} style={{cursor:'pointer'}}>Electronics</li>
                    <li onClick={()=> navigate('/furnitures')} style={{cursor:'pointer'}}>Furnitures</li>
                    <li onClick={()=> navigate('/toys')} style={{cursor:'pointer'}}>Toys</li>
                </ul>
            </div>


            <div className={`navlist-2 ${isOpen? "open":""}`} >
                <ul className="nav-menu-2"   style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                    <li  >userintheapp@test.com</li>
                    <li onClick={()=> navigate('/myOrder')} style={{cursor:'pointer'}}>My Orders</li>
                    <li onClick={()=> navigate('/myAccount')} style={{cursor:'pointer'}}>My Account</li>
                    <li onClick={ handleCheckOutCart} style={{cursor:'pointer'}}> <img src="https://www.svgrepo.com/show/533043/cart-shopping.svg" alt="cart logo" className="cart-logo" /> <span>{cart.length}</span>  </li>
                </ul>
            </div>

            <div className="hamburger">
                <ul   style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                    <li onClick={toggleMenu}><img src="https://www.svgrepo.com/show/535711/user.svg" alt="hamburgerlogo" /></li>
                </ul>
            </div>
            

            {isCheckOutOpen && <div   className="checkOutCont">
                <CheckOutCart/>
            </div>}
        </nav>
    )

}


export default NavBar ;