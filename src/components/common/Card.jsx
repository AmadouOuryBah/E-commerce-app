import React from "react";
import CardCss from "../../components/common/Card.module.css"
import {AiOutlineStar} from "react-icons/ai"
import {VscVerifiedFilled} from "react-icons/vsc"
import noImage from '../../assets/noImage.jpg'


const Card = (props) => {

    return (
            <> 
               
                <div className={CardCss.card}>
                        <img className={CardCss.img} src={noImage}/>
                    
                        <div >
                            <h5 >{props.product.name}</h5>
                            <p >{props.product.description} </p>
                        </div>
                        <div >
                            <AiOutlineStar className="mx-3"/> <span >0(1)</span>
                        </div>
                        <div >
                            <h5 >{props.product.price}</h5>
                            <span><VscVerifiedFilled/></span>

                        </div>
                        <div>
                                <a> + Add to Cart</a>
                        </div>
                           
                    
                </div>
            </>        
    )
}

export default Card