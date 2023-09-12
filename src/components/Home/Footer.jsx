import React from "react";
import FooterCss from "../../components/Home/Footer.module.css"


const Footer = () => {

    return (
        <>
            <hr></hr>
            <div className={FooterCss.container}> 
          
                <p>We ship with :  ....</p>
                <p>Payments options : </p>
                <p>Copyright 2023 MiniStore Design by <span className={FooterCss.designerName}>BahAmadou</span></p>

            </div> 
        </>
       

                  
    )
}

export default Footer