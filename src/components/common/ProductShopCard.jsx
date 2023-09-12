import React from "react";
import ProductShopCardCss from "../../components/common/Card.module.css"




const ProductShopCard = (props) => {

    return (
            <> 
                <div className={ProductShopCardCss.img_container}>
                    <img className={ProductShopCardCss.img} src={props.cardImg}/>
                </div>
              
            </>        
    )
}

export default ProductShopCard