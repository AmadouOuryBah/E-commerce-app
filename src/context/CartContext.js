import {createContext} from 'react';
import { useState, useEffect } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    const addToCart = (item) => {

        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart
      
        if (isItemInCart) {
        setCartItems(
            cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem // otherwise, return the cart item
            )
        );
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
        }
      };

      const removeFromCart = (item) => {

        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
      
        if (isItemInCart.quantity === 1) {
            const NewCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id) // if the quantity of the item is 1, remove the item from the cart
            setCartItems(NewCartItems); 
        } else {

            const NewCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                : cartItem
          )
          setCartItems(NewCartItems);
        }
      };

      const clearCart = () => {
        setCartItems([]); 
      };

      const getCartTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); 
      };

      useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);

      useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
        setCartItems(JSON.parse(cartItems));
        }
    }, []);


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotalPrice,
            }}
        >
          {children}
        </CartContext.Provider>
    );
}
