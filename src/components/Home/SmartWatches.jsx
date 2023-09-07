import React from "react";
import Card  from "../../components/common/Card";
import SmartWatcCss from "../../components/Home/SmartWatches.module.css"
import WatchIcone from "../../assets/Watch1.png"


const SmartWatches = () => {

    return (
            <div> 
              <div className={SmartWatcCss.section_title}>
                <h1>SMART WATCHES</h1>
                <p>GO TO SHOP</p>
              </div>
              <div classsName={SmartWatcCss.card_container} style = {{ display: "flex", justifyContent: "space-between"}}>
                  <Card icone={WatchIcone }/>
                  <Card icone={WatchIcone }/>
                  <Card icone={WatchIcone }/>
                  <Card icone={WatchIcone }/>
              </div>
            </div>        
    )
}

export default SmartWatches