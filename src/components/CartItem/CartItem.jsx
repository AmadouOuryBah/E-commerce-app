import CartCss from "../../pages/Cart/index.module.css"
import {AiOutlineDelete} from "react-icons/ai"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import image from "../../assets/storeItemImage/hamburger-494706_640.jpg"
import  noImage from "../../assets/noImage.jpg"
import { useState, useEffect } from "react";
import { APP_URL } from "../../utils/constants/applicationConstants";

const CartItem = ({item}) => {

    const { addToCart,  removeFromCart } = useContext(CartContext)
    const [product, setProduct ] = useState({})

    const [pictureUrl , setPictureUrl ] = useState('')

    console.log(product)
    console.log(item)


    const getItem = () =>{
          
        fetch(`${APP_URL}/stores/${item.store}/items/${item.id}` , {
          method: 'GET',
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json()
        })
        .then(data => {
            setProduct(data);
         })
        .catch(error => {
         console.log(error)
        });

      }

    const fetchPicture = (storeItem) => {
        if(storeItem.pictureId){
          fetch(`${APP_URL}/stores/${item.store}/items/${storeItem.id}/pictures/${storeItem.pictureId}`)
          .then(async response => {
            if (response.ok) {
              const blob = await response.blob();
              const url = URL.createObjectURL(blob);
              storeItem.pictureId = url
              console.log(url)
              setPictureUrl(url)
          
            } else if (response.status === 404) {
              console.error('Store picture not found');
            } else {
              console.error('Failed to fetch store picture');
            }
          
          })
          .catch(error => {
            console.error('Error fetching store picture:', error);
        })
       }
      }

      useEffect(() =>{
        getItem()
        if(product.pictureId){
            fetchPicture(product)
          
        }


      }, [])

    return (
        <>
         <div  className={CartCss.Cart_info}>
               <div className={CartCss.card}>
                     <div className={CartCss.img_container}>
                         {
                            pictureUrl ?   <img src={pictureUrl} alt="product image"/> : 
                                 <img src={noImage} alt="product image"/>
                       } 
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
        </>
    )
}

export  default CartItem