
import React,{useEffect,useState,useContext}  from "react";
import "../myorders/myorder.css";
import { CartContext } from "../../context/cartcontext";


const MyOrder =()=>{
    const { finalcart , finalSetCart} = useContext(CartContext);
    const HandleFinalOrder =(e)=>{
        e.preventDefault();
        finalSetCart([])
    }
    return(
        <div className="finalCart">
            <div className="finalCart-cont">
                <h2>My Orders</h2>
                {finalcart.length===0? 
                
                <div className="empty-cont">
                    <img src="https://cdn.pixabay.com/photo/2012/04/02/17/46/package-25067_1280.png" alt="" />
                    <h2>Nothing yet, add some produicts and check them out :)</h2>
                </div>:
                <div className="final-cont">
                    {finalcart && finalcart.map((item)=>(
                        <div className="finalcont-card">
                            <h1>{item.title}</h1>
                            <p>${item.price}</p>
                            <p>Quantity:{item.quantity}</p>
                        </div>
                    ))}
                </div>
                }

                <div className="order-button">
                    <button onClick={(e)=>HandleFinalOrder(e)}>Order</button>
                </div>
            </div>
            
        </div>
    )
}

export default MyOrder;