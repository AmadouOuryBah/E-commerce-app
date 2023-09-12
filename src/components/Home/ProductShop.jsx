import React from "react";
import ProductShopCss from "../../components/Home/ProductShop.module.css"
import ProductShopCard from "../common/ProductShopCard";
import imagefrst from "../../assets/Rectangle 172.png"
import imagescd from "../../assets/Rectangle 174.png"
import image_3 from "../../assets/Rectangle 175.png"
import image_4 from "../../assets/Rectangle 176.png"
import image_5 from "../../assets/hover.png"

const ProductShop = () => {

    return (
        <div className={ProductShopCss.container}> 
        
            <h3>SHOP OUR INSTA</h3>
            <div className={ProductShopCss.card_container} >
                <ProductShopCard cardImg = {imagefrst}/>
                <ProductShopCard cardImg = {imagescd}/>
                <ProductShopCard cardImg = {image_3}/>
                <ProductShopCard cardImg = {image_4}/>
                <ProductShopCard cardImg = {image_5}/>
            </div>

        </div> 

                  
    )
}

export default ProductShop 