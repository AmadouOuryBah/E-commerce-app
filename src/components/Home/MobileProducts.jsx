import React from "react";
import MobileProduct from "../../components/Home/MobileProducts.module.css"
import Card  from "../../components/common/Card";
import Iphone1 from "../../assets/Iphone1.png.png"
import StoreItem from "../common/StoreItem";
import { useState, useEffect } from "react";
import { APP_URL } from "../../utils/constants/applicationConstants";
import StoreCard from "../Store/StoreCard";


const MobileProducts = () => {

  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1)


  const getStores = () =>{
      
      const params = {
          size: 8, // Replace with your desired size
          pageNumber: pageNumber
        };

      const headers = {
          'Content-Type': 'application/json',
          'size': params.size,
          'pageNumber': params.pageNumber
        };
        
        fetch(`${APP_URL}/stores` , {
          method: 'GET',
          headers: headers
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then(data => {
          setStores([...stores, ...data.data]); // Append new stores to existing ones
          setLoading(false);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          setLoading(false);
        });
  };

  useEffect(() => {
    getStores()
}, [4])
  

    return (
            <div className={MobileProduct.container} > 
              <div className={MobileProduct.section_title}>
                <h4>TOP RATED STORES</h4>
                <p><a href='#'>GO TO STORES</a></p>
              </div>
              <div className={MobileProduct.card_container}>
                {stores.map(store => (
                  <StoreCard  key={store.id} store={store} /> 
                ))}
                    
                </div>
            </div>     
               
    )
}

export default MobileProducts