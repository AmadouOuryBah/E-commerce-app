import React from "react";
import Card  from "../../components/common/Card";
import SmartWatchCss from "../../components/Home/SmartWatches.module.css"
import WatchIcone from "../../assets/Watch1.png"
import CartIcone from "../../assets/CardIcone.png" 


const SmartWatches = () => {

    return (
            <div  className= {SmartWatchCss.container}> 
              <div className={SmartWatchCss.section_title} >
                <h3>SMART WATCHES</h3>
                <p>GO TO SHOP</p>
              </div>
              <div className={SmartWatchCss.card_container}>
                  <Card icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card  icon ={CartIcone} cardImg={WatchIcone }/>
                  <Card  icon ={CartIcone} cardImg={WatchIcone }/>
              </div>
            </div>        
    )
}

export default SmartWatches