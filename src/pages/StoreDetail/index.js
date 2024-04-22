import React from "react";
import StoreDetailHeader from "../../components/StoreDetail/StoreDetailHeader";
import style from  "../StoreDetail/index.module.css"
import StoreSearchBar from "../../components/StoreDetail/StoreSearchBar";
import StoreItem from "../../components/common/StoreItem";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { APP_URL } from "../../utils/constants/applicationConstants";
import { Menu,
MenuList,
MenuItem,
MenuGroup,MenuDivider } from "@chakra-ui/react";


const Index = () => {
   
    const [store, setStore ] = useState({})
    const [storeItems, setStoreItems ] = useState([])
    const { id } = useParams()
    const [isOpen ,  setIsOpen] = useState(false)

    const [activeContent, setActive] = useState(1)

    const currentUser = JSON.parse(localStorage.getItem('currentUser')).userId

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

   const handleActiveContent = (index) =>{
    setActive(index)
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
          <div className={style.storeDetail_container}>
            <div className={style.side_bar_menu}>
              <h6  style={{marginLeft:'10px'}}>Menu  </h6>
              <Menu>
                    <MenuItem onClick={()=> handleActiveContent(1)}>Home</MenuItem>
                    {store.userId == currentUser && 
                      <MenuItem>Order</MenuItem>
                    }
                    <MenuItem>Payments </MenuItem>
                    {store.userId == currentUser &&
                      <MenuItem>Add product</MenuItem>
                     }
                    {store.userId == currentUser && 
                      <MenuItem>Delete store</MenuItem>
                    }
                     {store.userId == currentUser &&
                      <MenuItem>Edit store</MenuItem>
                     }
                     
                     {store.userId == currentUser &&
                      <MenuItem onClick={()=> handleActiveContent(2)}>Manage store</MenuItem>
                     }
                     

                    <MenuItem>Policies</MenuItem>
                    <MenuItem>FAQ</MenuItem>
              </Menu>
            </div>

          {activeContent === 1 &&
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

            }

            {
              activeContent === 2 && 
               <div className={style.container}>
                 <div className={style.card_container}>
                  {noItems()}
                  {storeItems.map(storeItem => {
                      return <StoreItem isOwner={true} storeId={id} key={storeItem.id} storeItem={storeItem} />
                  })}
                          
                </div>   
               
                </div>
            
            }
         
         </div>
         
        </>
                  
    )
}

export default Index

