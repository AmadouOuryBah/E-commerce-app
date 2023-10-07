import React from "react";

import FooterLinks from "../../components/Home/FooterLinks";
import Footer from "../../components/Home/Footer";
import StoreCard from "../../components/Store/StoreCard"
import style from  "../Store/index.module.css"


const Index = () => {

    return (
        <>
            <div className={style.container}>
                <p className="d-flex align-items-center mb-4 justify-content-center">
                    Store Page in Developpment phase
                </p>
                <div className={`row row-cols-1 row-cols-md-2 g-4  ${style.card_container}`}>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                 
                </div>
            </div>
            <FooterLinks/>
            <Footer/>
        </>
                  
    )
}

export default Index

