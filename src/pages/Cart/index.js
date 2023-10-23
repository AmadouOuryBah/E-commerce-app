import React from "react";
import CartCss from "../Cart/index.module.css"
import {AiOutlineDelete} from "react-icons/ai"
import image from "../../assets/storeItemImage/hamburger-494706_640.jpg"

const Index = () => {

    return (
        <>
           <section className={CartCss.cart_container}>
                <hr/>
                <div className={CartCss.Cart_title}>
                    <h3>Cart</h3>
                    <p> <span>1</span>  item in your cart</p>
                </div>

                <div >
                    <p className={CartCss.Card_title}>Shop World</p>
                    <div className={CartCss.Cart_info}>
                        <div className={CartCss.card}>
                            <div className={CartCss.img_container}>
                                <img src={image} alt="product image"/>
                            </div>
                            <p>
                                Chic Home Sachi 3 Piece Quilt Set Floral Scroll Pattern Design Bedding - Pillow Shams Included, Queen, Purple Queen Purple
                                <span className={CartCss.price}>$66.50</span>
                            </p>
                        </div>

                        <div className="d-flex align-items-center">
                              
                            <span className={CartCss.sign}>-</span> 
                            <span className={CartCss.total_item}>1</span>
                            <span className={CartCss.sign}>+</span>
                            <span className={CartCss.delete_icon}><AiOutlineDelete /></span>
                                
                        </div>
                    </div>
                  

                </div>

                 <div className={CartCss.Order_Summary}>
                    <h5>Order Summary</h5>
                        <div className="d-flex justify-content-between">
                            <p>
                                Subtotal
                            </p>
                            <p className={CartCss.pricing}>
                                120$
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
                                120$
                            </p>
                        </div>
                        <button>Checkout</button>
                 </div>
           
           </section>
         
        </>
                  
    )
}

export default Index

