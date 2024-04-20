import React from "react";
import StoreDetailHeader from "../../components/StoreDetail/StoreDetailHeader";
import style from  "../StoreDetail/index.module.css"
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
            headers: {
              'Content-Type': 'application/json',
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
                'Content-Type': 'application/json',
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
                  <StoreDetailHeader store={store}/>
                  <div className={style.card_container}>
                    {noItems()}
                    {storeItems.map(storeItem => {
                      return <StoreItem isOwner={true} storeId={id} key={storeItem.id} storeItem={storeItem} />
                    })}
                        
                  </div>
                    
            </div>
         
        </>
                  
    )
}

export default Index

