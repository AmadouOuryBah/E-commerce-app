import storeItemCss from '../common/StoreItem.module.css'
import React from "react";
import { useState , useEffect} from "react";
import { AiTwotoneDelete, AiOutlineStar } from "react-icons/ai";
import AlertDialogModal from "../AlertDialog/AlertDialogModal"
import noPicture from '../../assets/noImage.jpg'
import { FaRegEdit } from "react-icons/fa";
import { useToast, Skeleton } from "@chakra-ui/react";
import { APP_URL } from "../../utils/constants/applicationConstants";
import { useParams } from 'react-router-dom';
import ModalEditProduct from '../ModalEditProduct/ModalEditProduct';


const CardManageStoreItem = (props) => {

    const [pictureUrl, setPictureUrl] = useState('')
    const [isPictureLoading , setIsPictureLoading] = useState(false)
    const toast = useToast()
    const { id } = useParams()
    const [store, setStore] = useState()
    const [storeItems, setStoreItems ] = useState()
    const [isOpenEdit ,  setIsOpenEdit] = useState(false)
    const [isOpen , setIsOpen] =  useState(false)

    const onOpen = () => { setIsOpen(true)
    }

  const onClose = () => setIsOpen(false);
  const onCloseEdit = () => setIsOpenEdit(false)
  
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
  
    const fetchPicture = (storeItem) => {
        setIsPictureLoading(true)
         if(storeItem.pictureId){
           fetch(`${APP_URL}/stores/${props.storeId}/items/${storeItem.id}/pictures/${storeItem.pictureId}`, {
             headers: {
               "Content-Type": "application/json",
               "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
             },
           })
           .then(async response => {
             if (response.ok) {
               const blob = await response.blob();
               const url = URL.createObjectURL(blob);
               storeItem.pictureId = url
               console.log(url)
               setPictureUrl(url)
             
           
             } else if (response.status === 404) {
               console.error('Store picture not found');
             } else {
               console.error('Failed to fetch store picture');
             }
             setIsPictureLoading(false);
           })
           .catch(error => {
           console.error('Error fetching store picture:', error);
         })
        }
       }
   
   
return (
    <>

        <AlertDialogModal

            storeId={id}
            storeItemId={props.storeItem.id}
            isOpen={isOpen} 
            onClose={onClose}
            message="product"
        />

        <ModalEditProduct
            isOpen={isOpenEdit}
            onClose={onCloseEdit} 
            storeId={id}
            storeItemId={props.storeItem.id}       
          />

        <div  className={`card ${storeItemCss.card_item} `} >

            { isPictureLoading ? < Skeleton width="100%" height="50%" /> :
                    pictureUrl ? <img src={pictureUrl}  alt="item picture"/> : <img src={noPicture}  alt="item picture"/>
            }

            <div className={`card-body ${storeItemCss.card_body}`}>
                <h5 className="card-title fw-bold">$ {props.storeItem.price}</h5>
                <p className="card-text">{props.storeItem.description} </p>
            </div>

            <div className={` card-text ${storeItemCss.stats}`}>
                <AiOutlineStar className="mx-3"/> <span >0(1)</span>
            </div>

            <div className={` d-flex justify-content-between ${storeItemCss.city}`}>
                 <h6 className="">{props.storeItem.name}</h6>
            </div>
        
            <div className="card-body d-flex align-items-center justify-content-center">
                <a 
                    href="#"
                    onClick={()=> setIsOpen(true)}
                    className={`card-link  ${storeItemCss.btn_delete} `}
                >
                <AiTwotoneDelete />
                </a> 
                <a 
                    href="#"
                    className={`card-link  ${storeItemCss.btn_edit} `}
                    onClick={()=>setIsOpenEdit(true)}
                >
                    <FaRegEdit />
                </a>        
            </div>
        </div>
          
     
    </>
)
}

export default CardManageStoreItem