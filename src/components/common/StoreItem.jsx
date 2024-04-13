import React from "react";
import storeItemCss from "../../components/common/StoreItem.module.css"
import {AiOutlineStar} from "react-icons/ai"
import {VscVerifiedFilled} from "react-icons/vsc"
import { CartContext } from '../../context/CartContext'
import { useContext, useEffect, useState } from 'react'
import noPicture from '../../assets/noImage.jpg'
import { APP_URL } from "../../utils/constants/applicationConstants";


const StoreItem = (props) => {

    const {addToCart } =  useContext(CartContext)
    const [pictureUrl, setPictureUrl] = useState("")

    const fetchPicture = (storeItem) => {
        if(storeItem.pictureId){
          fetch(`${APP_URL}/stores/60/items/${storeItem.id}/pictures/${storeItem.pictureId}`)
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
        if(props.storeItem.pictureId){
            fetchPicture(props.storeItem)
        }
      }, [])
   
    return (
            <>
                
                     <div  className={`card ${storeItemCss.card_item} `} >
                             {pictureUrl ? <img src={pictureUrl}  alt="item picture"/> :
                                             <img src={noPicture}  alt="item pictire"/>        }
                                <div className={`card-body ${storeItemCss.card_body}`}>
                                    <h5 className="card-title fw-bold">$ {props.storeItem.price}</h5>
                                    <p className="card-text">{props.storeItem.description} </p>
                                </div>
                                <div className={` card-text ${storeItemCss.stats}`}>
                                    <AiOutlineStar className="mx-3"/> <span >0(1)</span>
                                </div>
                                <div className={` d-flex justify-content-between ${storeItemCss.city}`}>
                                    <h6 className="">{props.storeItem.name}</h6>
                                    <span><VscVerifiedFilled/></span>
    
                                </div>
    
                                <div className="card-body d-flex align-items-center justify-content-center">
                                    <a
                                        href="#"
                                        className={`card-link  ${storeItemCss.btn} `}
                                        onClick={()  => addToCart(props.storeItem)}
                                    >
                                         Add to Cart
                                    </a>
                                </div>
                     </div>
          
            </>        
    )
}

export default StoreItem