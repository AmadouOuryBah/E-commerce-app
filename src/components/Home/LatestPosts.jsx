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

        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    useEffect(() => {
        getProducts()
    },[])

    return (
            <> 
                <div  className={LatestPostsCss.container}>

                    <div className={LatestPostsCss.title}>
                        <h3>NEW PRODUCTS </h3>
                        <p><a href="#">VIEW ALL</a></p>
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", 
            background: "#f4511e" ,
            width:'30px', 
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'30px',
            borderRadius:'50px',
            padding: "2px", 
                
        }}
            onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            background: "#f4511e" ,
            width:'30px', 
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'30px',
            borderRadius:'50px',
     }}
            onClick={onClick}
      />
    );
  }
export default LatestPosts