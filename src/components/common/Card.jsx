import React from "react";
import CardCss from "../../components/common/Card.module.css"
import {AiOutlineStar} from "react-icons/ai"
import noImage from '../../assets/product1.jpg'
import { useToast , Skeleton} from "@chakra-ui/react";
import { APP_URL } from "../../utils/constants/applicationConstants";
import { useState, useEffect, useContext} from "react";

import { CartContext } from "../../context/CartContext";
const Card = (props) => {

console.log(props.product)
    const {addToCart } =  useContext(CartContext)
    const [pictureUrl, setPictureUrl] = useState("")
    const toast = useToast()
    const [isPictureLoading, setIsPictureLoading ] = useState(false)


    const fetchPicture = (storeItem) => {
       setIsPictureLoading(true)
        if(storeItem.pictureId){
          fetch(`${APP_URL}/stores/1/items/${storeItem.id}/pictures/${storeItem.pictureId}`, {
            headers: {
              "Content-Type": "application/json"
            },
          })
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
            setIsPictureLoading(false);
          })
          .catch(error => {
          console.error('Error fetching store picture:', error);
        })
       }
      }

      useEffect(() =>{
        if(props.product.pictureId){
            fetchPicture(props.product)
        }
      }, [])

    return (
            <> 
               
                <div className={CardCss.card}>
                    {isPictureLoading ? < Skeleton width="100%" height="100%" /> :
                      pictureUrl ? <img className={CardCss.img} src={pictureUrl}  alt="item picture"/> :
                         <img src={noImage}  alt="item picture"/>
                     }
                    
                        <div className={CardCss.info_section}>
                            <h5 > ${props.product.price}</h5>
                            <p >{props.product.description} </p>
                        </div>
                        <div className={CardCss.rating}>
                            <AiOutlineStar /> <span >0(1)</span>
                        </div>
                        <div  className={CardCss.product_name_section}>
                            <h6>{props.product.name}</h6>
                    
                        </div>
                        <div className={CardCss.btn_container}>
                                <a onClick={() => addToCart(props.product)} className={CardCss.btn}> Add to cart</a>
                        </div>
                           
                    
                </div>
            </>        
    )
}

export default Card