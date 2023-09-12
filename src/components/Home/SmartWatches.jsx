import React from "react";
import Card  from "../../components/common/Card";
import SmartWatcCss from "../../components/Home/SmartWatches.module.css"
import WatchIcone from "../../assets/Watch1.png"
import CartIcone from "../../assets/CardIcone.png" 


const SmartWatches = () => {

    return (
            <div  className= {SmartWatcCss.container}> 
              <div className={SmartWatcCss.section_title}  style={{ display: "flex", justifyContent: "space-between"}}>
                <h3>SMART WATCHES</h3>
                <p>GO TO SHOP</p>
              </div>
              <div classsName={SmartWatcCss.card_container}  style={{ display: "flex", justifyContent: "space-between"}}>
                  <Card icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card  icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card  icon ={CartIcone} cardImg={WatchIcone }/>
              </div>
            </div>        
    )
}

export default SmartWatches