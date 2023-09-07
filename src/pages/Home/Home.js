import React from "react"
import Header from "../../components/Home/Header";
import Slider  from "../../components/Home/Slider";

import MobileProducts from "../../components/Home/MobileProducts";
import SmartWatches from "../../components/Home/SmartWatches";


function Home() {

    return (
          <div>
             <Header />
             <Slider/>
             <MobileProducts/>
             <SmartWatches/>
       
          </div>
    );
  }
  
  export default Home;