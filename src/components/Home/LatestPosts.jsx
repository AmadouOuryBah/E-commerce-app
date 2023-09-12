import React from "react";
import LatestPostsCss from "../../components/Home/LatestPosts.module.css"
import LatestPostCard  from "../common/LatestPostCard";
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
                        <LatestPostCard picture={picture}/>
                        <LatestPostCard picture={picture2}/>
                        <LatestPostCard picture={picture3}/>
                    </div >
                </div>
                
            </>        
    )
}

export default LatestPosts