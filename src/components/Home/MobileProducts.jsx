import React from "react";
import MobileProduct from "../../components/Home/MobileProducts.module.css"
import Card  from "../../components/common/Card";
import CartIcone from "../../assets/CardIcone.png" 
import Iphone1 from "../../assets/Iphone1.png.png"


const MobileProducts = () => {

    return (
            <div className={MobileProduct.container} > 
              <div className={MobileProduct.section_title}>
                <h3>MOBILE PRODUCTS</h3>
                <p>GO TO SHOP</p>
              </div>
              <div classsName={MobileProduct.cardContainer}  style={{ display: "flex", justifyContent: "space-between"}} >
                  <Card icon ={CartIcone} cardImg = {Iphone1}/>
                  <Card icon={CartIcone} cardImg= {Iphone1}/>
                  <Card  icon={CartIcone} cardImg = {Iphone1}/>
                  <Card  icon={CartIcone} cardImg = {Iphone1}/>
              </div>
            </div>        
    )
}

export default MobileProducts