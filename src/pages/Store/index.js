import React, { useEffect, useState , useRef} from "react";
import {FaChevronDown} from "react-icons/fa"
import FooterLinks from "../../components/Home/FooterLinks";
import Footer from "../../components/Home/Footer";
import StoreCard from "../../components/Store/StoreCard"
import style from  "../Store/index.module.css"
import SearchBar from "../../components/common/SearchBar";
import { APP_URL } from "../../utils/constants/applicationConstants";
import { Spinner } from '@chakra-ui/react';
import Header  from "../../components/Home/Header";

 

const Index =  () => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1)


    const getStores = () =>{
        
        const params = {
            size: 10, // Replace with your desired size
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
 }, [pageNumber])

 /*   const  fetchStorePicture = async () => {

        if(stores){
          stores.map( store => {
    
              if(store.pictureId){
                  fetch(`${APP_URL}/stores/${store.id}/pictures/${store.pictureId}`)

                  .then(response => {
                    if (response.ok) {
                      return response.blob();
                       // const url = URL.createObjectURL(blob);
                       // store.pictureId = url
                    }
                    else {
                        console.error('Failed to fetch store picture');
                    }
                  })
                  .then( blob =>{
                    const url = URL.createObjectURL(blob);
                    store.pictureId = url
                  })
                .catch (error => {
                  console.error('Error fetching store picture:', error);
                }  ) 
              }
          })
        }
    }       
      */
    

    const loadMoreStores = () => {
        setPageNumber(pageNumber + 1); // Increment pageNumber to fetch next page
      };

    return (
        <>
          <div className={style.container}>
            <hr />
            <p className="d-flex align-items-center mb-4 justify-content-between">
              <SearchBar placeholder="search " />
              <div className={style.filter_section}>
                <div>Categories <FaChevronDown /></div>
                <div>Brands <FaChevronDown /></div>
              </div>
            </p>

            <hr />

            <div className={style.card_container}>
              {stores.map(store => (
                <StoreCard  key={store.id} store={store} /> 
              ))}
            </div>

            <div className={style.loader}>
                {loading && <Spinner size="xl" /> }{/* Show loading indicator while fetching data */}
               </div>
          </div>

          <div className={style.btn_container}>
              {!loading && <button onClick={loadMoreStores} className="btn btn-primary">Load More</button> }
          </div>
          <FooterLinks />
          <Footer />
      </>
                  
    )
}

export default Index

