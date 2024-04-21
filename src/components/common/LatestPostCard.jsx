import React from "react";
import LatestPostCss from "../../components/common/LatesPostCard.module.css"
import noImage from "../../assets/noImage.jpg" 






const LatestPostCard = ({name, description, price}) => {

    return (
            <> 
                <div className={LatestPostCss.card}>
                    <div className={LatestPostCss.img_container}>
                        <img className={LatestPostCss.img } />
                    </div>
                 
                    <div  className={LatestPostCss.card_info}>
                        <p>{name}</p>
                        <p className={LatestPostCss.description}>{description}</p>
                        <p className={LatestPostCss.description}>{price}</p>
                    </div>
                </div>
              
            </>        
    )
}

export default LatestPostCard 