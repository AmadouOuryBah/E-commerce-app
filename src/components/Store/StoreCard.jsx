import React from "react";
import CardCss from "../../components/Store/StoreCard.module.css"
import CartIcone from "../../assets/Cart.png" 
import {BiMap} from "react-icons/bi";





const StoreCard = (props) => {

    return (
            <> 
               <div className={`col ${CardCss.card}`} >
                    <div className="card">
                    <img src={CartIcone} className={CardCss.card_img_top} alt="..."/>
                    <div className="card-body">
                        <h5 className={CardCss.card_title}>
                            {props.store.name} 
                           <span className={CardCss.title}>{props.store.addressLineFirst}</span> 
                        </h5>
                        <p className={CardCss.card_text}>
                            {props.store.description}
                        </p>
                        <p className={CardCss.city}>
                            <span ><BiMap size="16px"/></span> {props.store.city} - {props.store.region}
                        </p>
                       
                    </div>
                    </div>
                </div>
            </>        
    )
}

export default StoreCard