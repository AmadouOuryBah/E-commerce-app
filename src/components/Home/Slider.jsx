import React from "react";
import SliderCss from "../../components/Home/Slider.module.css"
import watch from "../../assets/daniel-korpai-hbTKIbuMmBI-unsplash.png"


const Slider = () => {

    return (
        <div className={SliderCss.bg}> 
            <div className={SliderCss.container}>
               <div className={SliderCss.slider_title}>
                   <h1>YOUR PRODUCTS <br/>ARE GREAT.</h1>

                   <button className={SliderCss.btn}>SHOP PRODUCT</button>
               </div>
               <div className={SliderCss.img_container}>
                   <img className={SliderCss.img} src={watch} />
               </div>
            </div> 
        </div>
                  
    )
}

export default Slider