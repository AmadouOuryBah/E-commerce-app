import React from "react"
import Slider  from "../../components/Home/Slider";
import MobileProducts from "../../components/Home/MobileProducts";
import SmartWatches from "../../components/Home/SmartWatches";
import NewYearSale from "../../components/Home/NewYearSale";
import LatestPosts from "../../components/Home/LatestPosts";
import EmailSubscription from "../../components/Home/EmailSubscription";
import ProductShop from "../../components/Home/ProductShop";
import FooterLinks from "../../components/Home/FooterLinks";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header"


function Home() {

    return (
          <>

             <Slider/>
             <MobileProducts/>
             <NewYearSale/>
             <LatestPosts/>
             <EmailSubscription/>
             <ProductShop/>
             <FooterLinks/>
             <Footer/>
            
          </>
    );
  }
  
export default Home