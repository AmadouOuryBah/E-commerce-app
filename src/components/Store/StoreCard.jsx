import React, { useEffect, useState } from "react";
import CardCss from "../../components/Store/StoreCard.module.css"
import noPicture from "../../assets/noImage.jpg"
import {BiMap} from "react-icons/bi";
import { APP_URL } from "../../utils/constants/applicationConstants";

const StoreCard = (props) => {
    const [pictureUrl, setPictureUrl] = useState("");

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
        if(props.store.pictureId){
            fetchPicture(props.store)
        }
      }, [])
    return (
            <> 
               <a  href={`stores/${props.store.id}`} className={CardCss.card} >
                    <div className="card">
                    {pictureUrl ? <img src={pictureUrl} className={CardCss.card_img_top} alt="..."/>
                    :
                                            <img style={{height: '165px'}} className={CardCss.card_img_top} src={noPicture}/>
                    }
                   
                    <div className="card-body">
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
                    </div>
                </a>
            </>        
    )
}

export default StoreCard