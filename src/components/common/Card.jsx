import React from "react";
import CardCss from "../../components/common/Card.module.css"




const Card = (props) => {

    return (
            <> 
                <div className={CardCss.card}>
                    <img className={CardCss.img} src={props.cardImg}/>
                    <button className={CardCss.btn}>ADD TO CART <span><img src={props.icone}/></span></button>
                    <div className={CardCss.description}>
                        <p>Iphone</p> <p className={CardCss.price}>$192</p>
                    </div>
                   
                </div>
              
            </>        
    )
}

export default Card