import React from "react";
import {FaSearch} from "react-icons/fa"
import {FaChevronDown} from "react-icons/fa"
import FooterLinks from "../../components/Home/FooterLinks";
import Footer from "../../components/Home/Footer";
import StoreCard from "../../components/Store/StoreCard"
import style from  "../Store/index.module.css"
 

const Index = () => {

    return (
        <>

            <div className={style.container}>
                <hr/>
                <p className="d-flex  align-items-center mb-4 justify-content-between">
                    <div className={style.form_input}>
                        <FaSearch className={style.search_icon}/>
                        <input placeholder="search..." type="text"/>
                    </div>
                  
                    <div className={style.filter_section}>
                        <div>Categories <FaChevronDown/></div>
                        <div>Brands <FaChevronDown/></div>
                    </div>
                </p>
                <hr/>
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

