import React, { Fragment } from "react";
import StoreDetailHeader from "../../components/StoreDetail/StoreDetailHeader";
import style from  "../StoreDetail/index.module.css"
import StoreSearchBar from "../../components/StoreDetail/StoreSearchBar";
import StoreItem from "../../components/common/StoreItem";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { APP_URL } from "../../utils/constants/applicationConstants";
import ModalAddItem from "../../components/ModalAddItem/ModalAddItem"
import { Menu,
MenuList,
MenuItem,
MenuGroup, MenuDivider , useToast} from "@chakra-ui/react";


const Index = () => {
   
    const [store, setStore ] = useState({})
    const [storeItems, setStoreItems ] = useState([])
    const { id } = useParams()
    const [isOpen ,  setIsOpen] = useState(false)
    const toast = useToast()


    const [activeContent, setActive] = useState(1)

   const currentUser = JSON.parse(localStorage.getItem('currentUser')).userId

    const deleteStore = (storeId) => {

      fetch(`${APP_URL}/stores/${storeId}`, {
          method: 'DELETE',
          headers: {
              userId: currentUser,
              "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
          }
      })
      .then( response => {
          if(!response.ok){
              throw new Error('Network response was not ok')
          }

          return response
      })
      .then(data => {
          console.log('store has been deleted',data)
          toast({ title:'store has been deleted', 
                  description: "Refresh the page",
                  status: 'success',
                   duration:'4000', 
                   position:'top'})           
   })
     .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }

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

    const onOpen = () => { setIsOpen(true)
      }
    const onClose = () => setIsOpen(false);
    
    return (
        <>
          <ModalAddItem 
            isOpen={isOpen}
            setIsOpen={setIsOpen} 
            onClose={onClose} 
            store={store}
          />
          <div className={style.storeDetail_container}>
            <div className={style.side_bar_menu}>
              <h6  style={{marginLeft:'10px'}}>Menu  </h6>
              <Menu>
                    <MenuItem onClick={()=> handleActiveContent(1)}>Home</MenuItem>
                    {store.userId == currentUser && 
                      <MenuItem onClick={()=> handleActiveContent(3)}>Order</MenuItem>
                    }
                    <MenuItem>Payments </MenuItem>

                    <MenuDivider/>
                    {store.userId == currentUser &&
                     <Fragment>
                        <MenuItem  onClick={onOpen} >Add product</MenuItem>
                        <MenuItem>Delete store</MenuItem>
                        <MenuItem>Edit store</MenuItem>
                        <MenuItem onClick={()=> handleActiveContent(2)}>Manage store</MenuItem>
                        
                        <MenuDivider/>
                      </Fragment>

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
              activeContent === 3 && 
              <div className={style.container}>
                   <h3> Order </h3>
              </div>
            
            }
         
         </div>
         
        </>
                  
    )
}

export default Index

