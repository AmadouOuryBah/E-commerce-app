import React from "react";
import LatestPostCss from "../../components/common/LatesPostCard.module.css"






const LatestPostCard = (props) => {

    return (
            <> 
                <div className={LatestPostCss.card}>
                    <div className={LatestPostCss.img_container}>
                        <img className={LatestPostCss.img } src={props.picture} />
                    </div>
                 
                    <div  className={LatestPostCss.card_info}>
                        <p>FEB 22, 2023  GAGETS </p>
                        <p className={LatestPostCss.description}>GET SOME COOL GADGETS in 2023</p>
                    </div>
                </div>
              
            </>        
    )
}

export default LatestPostCard 