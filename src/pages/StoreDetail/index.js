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
import CardManageStoreItem from "../../components/CardManageStoreItem/CardManageStoreItem";
import AlertDialogModal from "../../components/AlertDialog/AlertDialogModal";


const Index = () => {
   
    const [store, setStore ] = useState({})
    const [storeItems, setStoreItems ] = useState([])
    const { id } = useParams()
    const [isOpenDeleteAlert ,  setIsOpenDeleteAlert] = useState(false)
    const [isOpen ,  setIsOpen] = useState(false)
    const toast = useToast()


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

    const onOpen = () => { setIsOpen(true)
      }
    const onClose = () => setIsOpen(false);
    
    return (
        <>

        <AlertDialogModal
          isOpen={isOpenDeleteAlert} 
          onClose={onClose}
          storeId={id}
          message="store"
          setIsOpenDeleteAlert={setIsOpenDeleteAlert}
        />
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
                  

                    <MenuDivider/>
                    {store.userId == currentUser &&
                     <Fragment>
                        <MenuItem  onClick={onOpen} >Add product</MenuItem>
                        <MenuItem onClick={()=>setIsOpenDeleteAlert(true)}>Delete store</MenuItem>
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
              activeContent === 2 && 
              <div className={style.container}>
                   <h5 className="mb-4 opacity-3">Edit or delete a product from your store </h5>
                   {noItems()}
                  
                    <div className={style.manageStore_items}>
                      {
                       storeItems.map(storeItem => {
                        return    <CardManageStoreItem storeId={id} key={storeItem.id} storeItem={storeItem} />
                      })
                    }
                    </div>
              </div>
            
            }

            {
              activeContent === 3 && 
              <div className={style.container} >
                   <h3> Order </h3>
              </div>
            
            }
         
         </div>
         
        </>
                  
    )
}

export default Index

