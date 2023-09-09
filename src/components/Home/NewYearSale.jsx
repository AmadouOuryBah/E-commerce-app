import React from "react";
import SaleSectionCss from "../../components/Home/NewYearSale.module.css"
import iphone from "../../assets/Iphone1.png.png"


const NewYearSale = () => {

    return (
        <div className={SaleSectionCss.bg}>

    
            <div className={SaleSectionCss.container}  > 
              <div className={SaleSectionCss.sale_title}>
                    <p>10% OFF</p>
                    <h3>NEW YEAR SALE</h3>
                    <button className={SaleSectionCss.btn}>SHOP SALE</button>
              </div>

              <div className={SaleSectionCss.img_container}>
                    <img src={iphone} alt="Image should be here"/>
              </div>

            </div>       
         </div> 
    )
}

export default NewYearSale