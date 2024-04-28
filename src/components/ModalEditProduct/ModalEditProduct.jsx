import { useState, useEffect, useRef } from "react"
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton ,
    useDisclosure,
    useToast,
   
} from '@chakra-ui/react';      
import { APP_URL } from "../../utils/constants/applicationConstants"
import { useNavigate } from "react-router-dom";


const ModalEditProduct = (props) => {

    const toast = useToast()

    const navigate = useNavigate();
    const [item, setItem] = useState({
        name:"",
        description:"",
        price:0,
        categoryId:0,
    })
   
   
  
    const [page , setPage] = useState(1)
    const initialRef = useRef(null)
    
    const [categories, setCategories ] = useState(null) 

    const handleStorePropertyChange = (e) => {
        setItem({ ...item, [e.target.name] : e.target.value});
    }
 
    const [IsModalOpen , setIsModalOpen] = useState(false)

    const open = () => {
        setIsModalOpen(!props.isOpen)
    }
    

    const getCategories = () => {

        const params = {
            size: 10, // Replace with your desired size
            page: page
          };

        const headers = {
            'Content-Type': 'application/json',
            'size': params.size,
            'page': params.page,    
            "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
      
          };

        fetch(`${APP_URL}/categories`, {
            method: 'GET',
            headers: headers
        })
        .then( response => {
            if(!response.ok){
                throw new Error('Network response was not ok')
            }

            return response.json()
        })
        .then(data => {
            setCategories(data.data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });

          
    }
  
    console.log(item)
    const editProduct = () => {


        console.log(item)
        fetch(`${APP_URL}/stores/${props.storeId}/items/${props.storeItemId}`, {
            method: 'PUT',
            headers: {
                    'Content-Type': 'application/json',
                    "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
            },
            body: JSON.stringify(item)
        })
        .then( response => {
            if(!response.ok){

                {toast({ title:'product has not been updated', 
                status: 'error' ,
                 duration:'3000', 
                 position:'top'}) }
                throw new Error('Network response was not ok')
            }

            return response.json()
        })
        .then(data => {
            console.log(data)
            {toast({ title:'Product updated', 
                    status: 'success',
                     duration:'3000', 
                     position:'top'}) }
            console.log("navigating to the .....  " + props.storeId)
            props.setIsOpenEdit(false)
            navigate(`/stores/${props.storeId}`)
            
        })
        .catch(error => {
            {toast({ title:'Could not updated the product', 
                    status: "error",
                     duration:'3000', 
                     position:'top'}) };
            console.log(`something went wrong... ${error}`)
          });
   
    }
        

        const getItem = () =>{
  
            fetch(`${APP_URL}/stores/${props.storeId}/items/${props.storeItemId}` , {
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
              setItem(data);
             
            })
            .catch(error => {
             console.log(error)
            });
  
          }

          useEffect(() => {
            getItem()
            getCategories()
          },[props.isOpen])
   
return (<>
            
               
            <Modal
                    initialFocusRef={initialRef}
                    isOpen={props.isOpen}
                    onClose={props.onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Edit product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                    <FormControl mr={4}>
                            <FormLabel> choose a picture</FormLabel>       
                            <Input id="fileInput" type='file' />
                    </FormControl>
                    <form > 
                                        
                    <div style={{display:'flex'}}>
                            <FormControl mr={4}>
                                <FormLabel>name</FormLabel>
                                <Input
                                name='name'
                                value={item?.name}
                                onChange={handleStorePropertyChange}
                                placeholder='name' />
                            </FormControl>

                        <FormControl>
                                <FormLabel>description</FormLabel>
                                <Input
                                name='description'
                                value={item?.description}
                                onChange={handleStorePropertyChange}
                                placeholder='description' />
                        </FormControl>
                    </div>
                    <FormControl>
                        <FormLabel>price</FormLabel>
                        <Input
                            name='price'
                            value={item?.price}
                            onChange={handleStorePropertyChange}
                            placeholder='price' />
                    </FormControl>
                    
                    <FormControl mt={4}>
                        <FormLabel>categories</FormLabel>
                        <Select name='categoryId'  value={item?.categoryId} onChange={handleStorePropertyChange}>
                           {categories && categories.map(categorie => {
                            return  <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                        })} 
                        </Select>
                    </FormControl>

                    <div style={{marginTop:'15px'}}>
                            <Button onClick={editProduct} 
                             colorScheme='orange' mr={3}>
                                save
                            </Button>
                            <Button  onClick={props.onClose}  colorScheme='blue'>Cancel</Button>
                        </div>
                    </form>           
                    
                    </ModalBody>

                    </ModalContent>
                </Modal>     
                    

         
</>)
}

export default ModalEditProduct