import {useState, useEffect } from "react";
import storeDetailCss from "../../components/StoreDetail/StoreDetailHeader.module.css"
import ModalAddItem from "../../components/ModalAddItem/ModalAddItem"
import { APP_URL } from "../../utils/constants/applicationConstants";
import noImage from "../../assets/noImage.jpg"


const StoreDetailHeader = (props) => {

    const [pictureUrl, setPictureUrl ] = useState("")

    const fetchPicture = (store) => {
        if(store.pictureId){
          fetch(`${APP_URL}/stores/${props.store.id}/pictures/${props.store.pictureId}`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
    
              },
          })
          .then(async response => {
            if (response.ok) {
              const blob = await response.blob();
              const url = URL.createObjectURL(blob);
              store.pictureId = url
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

      useEffect(()=> {
        if(props.store.pictureId){
            fetchPicture(props.store)
        }
      },[props.store.pictureId])

     

    return (
        <>
            <div className={storeDetailCss.modal}>
                <ModalAddItem store={props.store}/>
               
            </div>
            <section >
                <div className={storeDetailCss.image_container}>
                    {
                        pictureUrl ?    <img src={pictureUrl} className="rounded " alt="picture of the store"/> 
                        : <img src={noImage} className="rounded " alt="picture of the store"/>
                    }
                  
                </div>

                <div className="d-flex  align-items-center justify-content-between">
                    <div className="d-flex ">
                        <div className={storeDetailCss.MiniImage_container}>
                            {
                                pictureUrl ?  <img src={pictureUrl} className="rounded" alt="picture of store"/>
                                :  <img src={noImage} className="rounded" alt="picture of store"/>
                            }
                             
                        </div>
                      
                        <p className="d-flex flex-column"> 
                           <span className={storeDetailCss.store_name}>{props.store.name}</span> 
                            <span>{props.store.description}</span>
                            <span className={storeDetailCss.city}>
                                {props.store.city},
                                {props.store.country} 

                            </span>
                          
                            <span className={storeDetailCss.total_followers}>6 followers</span>
                        </p>
                    </div>

                    <div>
                        
                        <button className="btn btn-outline-secondary px-3 mx-2 ">Follow</button>
                    </div>
                </div>
            </section>
       </>
                  
    )
}

export default StoreDetailHeader