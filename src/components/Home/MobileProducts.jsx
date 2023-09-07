import React from "react";
import MobileProduct from "../../components/Home/MobileProducts.module.css"
import Card  from "../../components/common/Card";
import CartIcone from "../../assets/CardIcone.png" 


const MobileProducts = () => {

    return (
            <div > 
              <div className={MobileProduct.section_title}>
                <h1>MOBILE PRODUCTS</h1>
                <p>GO TO SHOP</p>
              </div>
              <div classsName={MobileProduct.card_container} style = {{ display: "flex", justifyContent: "space-around"}}>
                  <Card icon ={CartIcone}/>
                  <Card icon={CartIcone}/>
                  <Card/>
              </div>
            </div>        
    )
}

export default MobileProducts