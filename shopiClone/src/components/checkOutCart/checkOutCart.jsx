
import React,{useEffect,useState,useContext}  from "react";

import "../checkOutCart/checkOutCart.css"

import { CartContext } from "../../context/cartcontext";


const CheckOutCart =()=>{
    const {cart ,AddToCart ,setCart, UpdateQuantity , RemoveFromCart, finalcart , finalSetCart} = useContext(CartContext);

   
    const totalPrice = cart.reduce((acc,item)=>acc + item.price,0) || 0;

   


    const handleFinalCheckOut =(e)=>{
        e.prevenDefault()
        finalSetCart([...cart])
        setCart([])
        
    }

    
    
    return(
        <div  className="checkOutSub-Cont">
            <div className="check-out-cont">
                <h1>My Orders</h1>
                {cart && 
                cart.map((item)=>(
                    <div className="order-card">
                        <h1>{item.title}</h1>
                        
                        <div className="buttons">
                            <button>+</button>
                            <h1>{item.quantity}</h1>
                            <button>-</button>
                            <button>Remove</button>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="check-out-total-price">
                <hr />
                <h3>Total</h3>
                <h1>${totalPrice}</h1>
                <button onClick={(e)=>handleFinalCheckOut(e)}>Checkout</button>
            </div>
        </div>
        
    )
}

export default CheckOutCart;