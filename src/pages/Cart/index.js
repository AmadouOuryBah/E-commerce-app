import React from "react";
import CartCss from "../Cart/index.module.css"
import {AiOutlineDelete} from "react-icons/ai"
import image from "../../assets/storeItemImage/hamburger-494706_640.jpg"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Index = () => {
    const {cartItems , addToCart,  removeFromCart, getCartTotalPrice} = useContext(CartContext)

    console.log(cartItems)

    return (
        <>
           <section className={CartCss.section_container}>
                <hr/>
                <div className={CartCss.Cart_title}>
                    <h3>Cart</h3>
                    <p> <span>{cartItems.length}</span>  item in your cart</p>
                </div>

                <div className={CartCss.section_items}>
                    <div className={CartCss.items_container}>
                            {cartItems.map( (item, index ) => ( 
                                
                                    <div  key={index} className={CartCss.Cart_info}>
                                        <div className={CartCss.card}>
                                            <div className={CartCss.img_container}>
                                                <img src={image} alt="product image"/>
                                            </div>
                                            <p>
                                            {item.description}
                                                <span className={CartCss.price}>${item.price * item.quantity}</span>
                                            </p>
                                        </div>
                
                                        <div className="d-flex align-items-center">
                                            
                                            <span onClick={() =>  removeFromCart(item)} className={CartCss.sign}>-</span> 
                                            <span className={CartCss.total_item}>{item.quantity}</span>
                                            <span  onClick={() => addToCart(item)} className={CartCss.sign}>+</span>
                                            <span className={CartCss.delete_icon}><AiOutlineDelete /></span>
                                                
                                        </div>
                                    </div>
                                ))

                             }

                    </div>
                   
                
                    <div className={CartCss.Order_Summary}>
                        <h5>Order Summary</h5>
                            <div className="d-flex justify-content-between">
                                <p>
                                    Subtotal
                                </p>
                                <p className={CartCss.pricing}>
                                    {getCartTotalPrice()}

                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>
                                    Shipping estimate
                                </p>
                                <p className={CartCss.pricing}>
                                    0$
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>
                                    total estimate
                                </p>
                                <p className={CartCss.pricing}>
                                    0$
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className={CartCss.order_total}>
                                    Order total
                                </p>
                                <p className={CartCss.pricing}>
                                    {getCartTotalPrice()}
                                </p>
                            </div>
                            <button>Checkout</button>
                    </div>
                        
                </div>
           </section>
         
        </>
                  
    )
}

export default Index

