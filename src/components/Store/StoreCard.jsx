import React, { useEffect, useState } from "react";
import CardCss from "../../components/Store/StoreCard.module.css"
import noPicture from "../../assets/noImage.jpg"
import {BiMap} from "react-icons/bi";
import { APP_URL } from "../../utils/constants/applicationConstants";
import { Skeleton } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const StoreCard = (props) => {
    
    const [pictureUrl, setPictureUrl] = useState("");
    const [isImageLoaded, setIsImageLoaded ] = useState(false)
    const toast = useToast()

    const fetchPicture = (store) => {
        if(store.pictureId){
          fetch(`${APP_URL}/stores/${store.id}/pictures/${store.pictureId}`)
          .then(async response => {
            if (response.ok) {
              const blob = await response.blob();
              const url = URL.createObjectURL(blob);
              store.pictureId = url
              console.log(url)
              setPictureUrl(url)
              setIsImageLoaded(true)
            
          
            } else if (response.status === 404) {
              console.error('Store picture not found');
              {toast({ title:'Store picture not found', 
                status: "error",
                duration:'4000', 
                position:'top'}) }
            } else {
              {toast({ title:'Failed to fetch store picture', 
                status: "error",
                duration:'4000', 
                position:'top'}) }
              console.error('Failed to fetch store picture');
            }
            
          })
          .catch(error => {
            {toast({ title:'Could not load stores', 
            status: "error",
             duration:'4000', 
             position:'top'}) }
            console.error('Error fetching store picture:', error);
        })
       }
      }

      useEffect(() =>{
        if(props.store.pictureId){
            fetchPicture(props.store)
        
        }
      }, [])

      
    return (
            <> 
               <a  href={`stores/${props.store.id}`} className={CardCss.card} >
                        {
                          isImageLoaded ?  props.store.pictureId ? <img src={pictureUrl}  className={CardCss.card_img_top}  alt="..."/> :  <img  className={CardCss.card_img_top} src={noPicture}/>
                          : <div className={CardCss.cart_img_skeleton}>
                                  <Skeleton width="100%" height="100%" />
                            </div>
                        }
                        
                     
                        <div className={CardCss.card_body}>
                            <h5 className={CardCss.card_title}>
                                {props.store.name} 
                            <span className={CardCss.title}>{props.store.addressLineFirst}</span> 
                            </h5>
                            <p className={CardCss.card_text}>
                                {props.store.description}
                            </p>
                            <p className={CardCss.city}>
                                <span ><BiMap size="16px"/></span> {props.store.city} - {props.store.region}
                            </p>
                        
                        </div>
                </a>
            </>        
    )
}

export default StoreCard