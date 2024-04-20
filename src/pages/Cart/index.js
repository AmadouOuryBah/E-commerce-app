import React, { useEffect, useState } from "react";
import CartCss from "../Cart/index.module.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import { APP_URL } from "../../utils/constants/applicationConstants";
import { useToast } from "@chakra-ui/react";

const Index = () => {

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const toast = useToast()
    const {cartItems , getCartTotalPrice} = useContext(CartContext)
    
    const itemsId = []
    cartItems.map( cartItem => {
        return itemsId.push(cartItem.id)
    })

    const body = {
        userId: JSON.parse(localStorage.getItem('currentUser')).userId,
        itemsId: itemsId,
        totalCost: getCartTotalPrice(),
        orderDate: formattedDate
      };
      
      const getStoreIdOfFirstItem = () =>{
       
        if(cartItems.length !== 0){
            return cartItems[0].store
        }

        return 0
      }

      const makeOrder = () => {

        if(cartItems.length === 0){
            {toast({ title:'No Items in the Cart', 
            status: "error",
             duration:'3000', 
             position:'top'}) }
        }

        const storeId =  getStoreIdOfFirstItem()
        
        if(storeId === 0){

            {toast({ title:'Something went wrong try again later', 
            status: "error",
             duration:'3000', 
             position:'top'}) }

             return 
        }
        
      
        fetch(`${APP_URL}/stores/${storeId}/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 

          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            checkout(data.pubKey, data.sessionId) 
            console.log('Success:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
  
      }

      function checkout(pubKey, sessionId) {
        const stripe = window.Stripe(pubKey);
        stripe.redirectToCheckout({ sessionId });
    }
    
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
                                
                                   <CartItem item={item} key={index} />
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
                            <button onClick={makeOrder}>Checkout</button>
                    </div>
                        
                </div>
           </section>
         
        </>
                  
    )
}

export default Index

