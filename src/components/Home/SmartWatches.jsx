import React from "react";
import Card  from "../../components/common/Card";
import SmartWatcCss from "../../components/Home/SmartWatches.module.css"
import WatchIcone from "../../assets/Watch1.png"
import CartIcone from "../../assets/CardIcone.png" 


const SmartWatches = () => {

    return (
            <div style = {{width: "1300px"  ,   marginLeft: "230px" , marginTop: "40px"}}> 
              <div className={SmartWatcCss.section_title}>
                <h3>SMART WATCHES</h3>
                <p>GO TO SHOP</p>
              </div>
              <div classsName={SmartWatcCss.card_container} style = {{ display: "flex",  width: "900px",justifyContent: "space-between"}}>
                  <Card icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card  icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card  icon ={CartIcone} cardImg={WatchIcone }/>
              </div>
            </div>        
    )
}

export default SmartWatches