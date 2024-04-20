import React from "react";
import hamburger from "../../assets/storeItemImage/hamburger-494706_640.jpg"
import StoreDetailHeader from "../../components/StoreDetail/StoreDetailHeader";
import style from  "../StoreDetail/index.module.css"
import StoreSearchBar from "../../components/StoreDetail/StoreSearchBar";
import StoreItem from "../../components/common/StoreItem";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { APP_URL } from "../../utils/constants/applicationConstants";
import Header from "../../components/Home/Header";
import ModalDeleteStore from '../../components/ModalDeleteStore/ModalDeleteStore'


const Index = () => {
   
    const [store, setStore ] = useState({})
    const [storeItems, setStoreItems ] = useState([])
    const { id } = useParams()
    const [isOpen ,  setIsOpen] = useState(false)

    const getStore = () =>{
          
          fetch(`${APP_URL}/stores/${id}` , {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
            },
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
            console.log(error)
          });

    }

   

    const getStoreItems = () =>{
          
            fetch(`${APP_URL}/stores/${id}/items` , {
              method: 'GET',
              headers: {
                "Content-Type": "application/json",
                "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
              },
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
             console.log(error)
            });
  
          }

      const noItems = () => {
            if(storeItems.length == 0){
              return <h6 className={style.noItems}>NO ITEMS FOR THIS STORE YET</h6>
            }
          }

     useEffect(() => {
            getStore()
            getStoreItems()
           
        },[])
    
    return (
        <>
       
            <div className={style.container}>
                  <StoreDetailHeader  store={store}/>
                  <StoreSearchBar/>
               
                  <div className={style.card_container}>
                    {noItems()}
                    {storeItems.map(storeItem => {
                      return <StoreItem storeId={id} key={storeItem.id} storeItem={storeItem} />
                    })}
                        
                  </div>
                    
                  
            </div>
         
        </>
                  
    )
}

export default Index

