import React from "react";
import hamburger from "../../assets/storeItemImage/hamburger-494706_640.jpg"
import iceCream from "../../assets/storeItemImage/ice-cream-1274894_640.jpg"
import istockPhoto_1 from "../../assets/storeItemImage/istockphoto-1481323897-1024x1024.jpg"
import istockPhoto_2 from "../../assets/storeItemImage/istockphoto-542817430-1024x1024.jpg"
import StoreDetailHeader from "../../components/StoreDetail/StoreDetailHeader";
import style from  "../StoreDetail/index.module.css"
import StoreSearchBar from "../../components/StoreDetail/StoreSearchBar";
import StoreItem from "../../components/common/StoreItem";


const Index = () => {

    return (
        <>
            <div className={style.container}>
                  <StoreDetailHeader/>
                  <StoreSearchBar/>
                  <div >
                        <div class="row gap-4">
                            <div class="col pb-4">
                            <StoreItem image={hamburger}/>
                            </div>
                            <div class="col">
                            <StoreItem image={iceCream}/>
                            </div>
                            <div class="col">
                            <StoreItem image={istockPhoto_1}/>
                            </div>
                            <div class="col">
                            <StoreItem image={istockPhoto_2}/>
                            </div>
                            <div class="col">
                            <StoreItem image={istockPhoto_2}/>
                            </div>
                        </div>
                    </div>
            </div>
         
        </>
                  
    )
}

export default Index

