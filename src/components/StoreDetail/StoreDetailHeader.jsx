import React from "react";
import storeDetailCss from "../../components/StoreDetail/StoreDetailHeader.module.css"
import storeImage from "../../assets/storePageDetail/storeImage.jpg"
import storeMiniImage from "../../assets/storePageDetail/storeLogo.jpg"
import {BsShare} from "react-icons/bs"


const StoreDetailHeader = (props) => {

    return (
        <>
            <section>
                <div className={storeDetailCss.image_container}>
                    <img src={storeImage} className="rounded " alt="picture of the store"/>
                </div>

                <div className="d-flex  align-items-center justify-content-between">
                    <div className="d-flex ">
                        <div className={storeDetailCss.MiniImage_container}>
                              <img src={storeMiniImage} className="rounded" alt="logo"/>
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
                        <span className=" border p-2 rounded-circle"> <BsShare/> </span>
                    </div>
                </div>
            </section>
       </>
                  
    )
}

export default StoreDetailHeader