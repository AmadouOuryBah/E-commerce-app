import React from "react";
import CardCss from "../../components/common/Card.module.css"
import {AiOutlineStar} from "react-icons/ai"
import {VscVerifiedFilled} from "react-icons/vsc"
import noImage from '../../assets/product1.jpg'


const Card = (props) => {

    return (
            <> 
               
                <div className={CardCss.card}>
                        <img className={CardCss.img} src={noImage}/>
                    
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
                                <a className={CardCss.btn}> Add to cart</a>
                        </div>
                           
                    
                </div>
            </>        
    )
}

export default Card