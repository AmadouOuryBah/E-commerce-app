import React, { useEffect } from "react";
import LatestPostsCss from "../../components/Home/LatestPosts.module.css"
import { APP_URL } from "../../utils/constants/applicationConstants";
import { useState } from "react";
import Card from "../../components/common/Card";
import  Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const LatestPosts = () => {

    const [products, setProducts] = useState()

    const getProducts = () => {
        fetch(`${APP_URL}/stores/items?` +  new URLSearchParams({
            numberOfItems: 20
        })  , {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',  
            },
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            return response.json()
          })
          .then(data => {
            setProducts([...data]);
           
          })
          .catch(error => {
           console.log(error)
          });
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    useEffect(() => {
        getProducts()
    },[])
    return (
            <> 
                <div  className={LatestPostsCss.container}>

                    <div className={LatestPostsCss.title}>
                        <h3>NEW PRODUCTS </h3>
                        <p>READ BLOG</p>
                    </div>

                    <Slider className={LatestPostsCss.card_container} {...settings}>
                        
                            {products?.map((product, index) => (
                                <Card key={index} product={product}/>
                            ))}  
                    
                                
                  </Slider>
                </div>
                
            </>        
    )
}

export default LatestPosts