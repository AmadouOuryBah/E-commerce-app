import React from "react";
import LatestPostsCss from "../../components/Home/LatestPosts.module.css"
import Card  from "../../components/common/Card";
import picture from "../../assets/Watch1.png"
import picture2 from "../../assets/Iphone1.png.png"
import picture3 from "../../assets/daniel-korpai-hbTKIbuMmBI-unsplash.png"



const LatestPosts = (props) => {

    return (
            <> 
                <div  className={LatestPostsCss.container}> 
                    <div className={LatestPostsCss.title}>
                        <h3>LATEST POSTS </h3>
                        <p>READ BLOG</p>
                    </div>
                    <div className={LatestPostsCss.card_container}>
                        <Card  image = {picture }/>
                        <Card  image = {picture2 }/>
                        <Card  image = {picture3}/>
                        <Card  image = {picture }/>                    
                    </div >
                </div>
                
            </>        
    )
}

export default LatestPosts