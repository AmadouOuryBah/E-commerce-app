import React from "react";
import storeItemCss from "../../components/common/StoreItem.module.css"
import {AiOutlineStar} from "react-icons/ai"
import {VscVerifiedFilled} from "react-icons/vsc"




const StoreItem = (props) => {

    return (
            <> 
                <div className={storeItemCss.card}>

                    <div class="card" style={{width: 14 + "rem"}}>
                            <img src={props.image} class="card-img-top" alt="..."/>

                            <div class="card-body">
                                <h5 class="card-title">$ 1380,8</h5>
                                <p class="card-text">Some quick example text to build on the card title</p>
                            </div>
                            <div className="card-text">
                                <AiOutlineStar className="mx-3"/> <span >0(1)</span>
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <h5 className="card-title">LubumShop</h5>
                                <span><VscVerifiedFilled/></span>

                            </div>

                            <div class="card-body">
                                <a href="#" class="card-link">Add to Cart</a>
                            </div>
                            </div>
                </div>
              
            </>        
    )
}

export default StoreItem