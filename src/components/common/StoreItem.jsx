import React from "react";
import storeItemCss from "../../components/common/StoreItem.module.css"
import {AiOutlineStar} from "react-icons/ai"
import {VscVerifiedFilled} from "react-icons/vsc"




const StoreItem = (props) => {
   
    return (
            <> 
               
                    {props.storeItems.map((storeItem , index) => (

                         <div key={index} className={`card ${storeItemCss.card_item} `} >

                                <img src={props.image} className="card-img-top" alt="..."/>
    
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">$ {storeItem.price}</h5>
                                    <p className="card-text">{storeItem.description} </p>
                                </div>
                                <div className={` card-text ${storeItemCss.stats}`}>
                                    <AiOutlineStar className="mx-3"/> <span >0(1)</span>
                                </div>
                                <div className={` d-flex justify-content-between ${storeItemCss.city}`}>
                                    <h5 className="">{storeItem.name}</h5>
                                    <span><VscVerifiedFilled/></span>
    
                                </div>
    
                                <div className="card-body d-flex align-items-center justify-content-center">
                                    <a href="#" className={`card-link  ${storeItemCss.btn} `}> + Add to Cart</a>
                                </div>
                         </div>

                    ))}              
            </>        
    )
}

export default StoreItem