import React from "react";
import CardCss from "../../components/Store/StoreCard.module.css"
import CartIcone from "../../assets/product1.jpg" 
import {BiMap} from "react-icons/bi";
import {AiOutlineStar} from "react-icons/ai"
import {IoIosPeople} from "react-icons/io"




const StoreCard = (props) => {

    return (
            <> 
               <div className={`col ${CardCss.card}`} >
                    <div className="card">
                    <img src={CartIcone} className={CardCss.card_img_top} alt="..."/>
                    <div className="card-body">
                        <h5 className={CardCss.card_title}>
                            LubumShop Official Store 
                           <span className={CardCss.title}>WholeSale & Retail</span> 
                        </h5>
                        <p className={CardCss.card_text}>
                            Best Online Store
                        </p>
                        <p className={CardCss.city}>
                            <span ><BiMap size="16px"/></span> Lubumbashi - Democratic Republic of th..
                        </p>
                       
                    </div>
                    </div>
                </div>
            </>        
    )
}

export default StoreCard