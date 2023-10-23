import React from "react";
import CardCss from "../../components/common/Card.module.css"
import {AiOutlineStar} from "react-icons/ai"
import {VscVerifiedFilled} from "react-icons/vsc"





const Card = (props) => {

    return (
            <> 
               
                <div className={`${CardCss.card} `}>

                        <div className={CardCss.image_container}>
                            <img src={props.image} class={`card-img-top ${CardCss.img}`} alt="..."/>
                        </div>

                        <div className={`${CardCss.card_body}`}>
                            <h5 class="card-title fw-bold">$ 1380,8</h5>
                            <p class="card-text">Some quick example </p>
                        </div>
                        <div className="card-text">
                            <AiOutlineStar className="mx-3"/> <span >0(1)</span>
                        </div>
                        <div className={` d-flex justify-content-between ${CardCss.city}`}>
                            <h5 >LubumShop</h5>
                            <span><VscVerifiedFilled/></span>

                        </div>

                        <div className="card-body d-flex align-items-center justify-content-center">
                            <a href="#" className={`card-link  ${CardCss.btn} `}> + Add to Cart</a>
                        </div>
                </div>
            </>        
    )
}

export default Card