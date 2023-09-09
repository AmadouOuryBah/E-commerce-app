import React from "react";
import MobileProduct from "../../components/Home/MobileProducts.module.css"
import Card  from "../../components/common/Card";
import CartIcone from "../../assets/CardIcone.png" 
import Iphone1 from "../../assets/Iphone1.png.png"


const MobileProducts = () => {

    return (
            <div style = {{width: "1300px"  ,   marginLeft: "230px" , marginTop: "40px"}} > 
              <div className={MobileProduct.section_title}>
                <h3>MOBILE PRODUCTS</h3>
                <p>GO TO SHOP</p>
              </div>
              <div classsName={MobileProduct.card_container} style = {{ display: "flex", width:"900px", justifyContent: "space-between"}}>
                  <Card icon ={CartIcone} cardImg = {Iphone1}/>
                  <Card icon={CartIcone} cardImg= {Iphone1}/>
                  <Card  icon={CartIcone} cardImg = {Iphone1}/>
                  <Card  icon={CartIcone} cardImg = {Iphone1}/>
              </div>
            </div>        
    )
}

export default MobileProducts