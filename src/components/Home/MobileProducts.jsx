import React from "react";
import MobileProduct from "../../components/Home/MobileProducts.module.css"
import Card  from "../../components/common/Card";
import Iphone1 from "../../assets/Iphone1.png.png"
import StoreItem from "../common/StoreItem";


const MobileProducts = () => {

 



    return (
            <div className={MobileProduct.container} > 
              <div className={MobileProduct.section_title}>
                <h3>MOBILE PRODUCTS</h3>
                <p>GO TO SHOP</p>
              </div>
              <div class="row gap-3">
                            <div class="col pb-4">
                                <Card image={Iphone1}/>
                            </div>
                            <div class="col">
                            <Card image={Iphone1}/>
                            </div>
                            <div class="col">
                            <Card image={Iphone1}/>
                            </div>
                            <div class="col">
                            <Card image={Iphone1}/>
                            </div>
                    
                 </div>
            </div>     
               
    )
}

export default MobileProducts