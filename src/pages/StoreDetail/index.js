import React from "react";
import hamburger from "../../assets/storeItemImage/hamburger-494706_640.jpg"
import iceCream from "../../assets/storeItemImage/ice-cream-1274894_640.jpg"
import istockPhoto_1 from "../../assets/storeItemImage/istockphoto-1481323897-1024x1024.jpg"
import istockPhoto_2 from "../../assets/storeItemImage/istockphoto-542817430-1024x1024.jpg"
import StoreDetailHeader from "../../components/StoreDetail/StoreDetailHeader";
import style from  "../StoreDetail/index.module.css"
import StoreSearchBar from "../../components/StoreDetail/StoreSearchBar";
import StoreItem from "../../components/common/StoreItem";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { APP_URL } from "../../utils/constants/applicationConstants";


const Index = () => {

    const [store, setStore ] = useState({})
    const [storeItems, setStoreItems ] = useState([])
    const { id } = useParams()

    const getStore = () =>{
          
          fetch(`${APP_URL}/stores/${id}` , {
            method: 'GET',
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            return response.json()
          })
          .then(data => {
            setStore(data);
           
          })
          .catch(error => {
           
          });

        }

        const getStoreItems = () =>{
          
            fetch(`${APP_URL}/stores/${id}/items` , {
              method: 'GET',
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
  
              return response.json()
            })
            .then(data => {
              setStoreItems([...data]);
             
            })
            .catch(error => {
             
            });
  
          }

     useEffect(() => {
            getStore()
            getStoreItems()
        },[])
    

    return (
        <>
            <div className={style.container}>
                  <StoreDetailHeader store={store}/>
                  <StoreSearchBar/>
                  <div className={style.card_container}>
                        <StoreItem  storeItems={storeItems} image={hamburger}/>
                  </div>
                    
            </div>
         
        </>
                  
    )
}

export default Index

