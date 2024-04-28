import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton ,
    useDisclosure,
}
from '@chakra-ui/react'
  
import { useEffect, useState,useRef } from 'react'
import { APP_URL} from "../../utils/constants/applicationConstants";

import { useNavigate } from 'react-router-dom';


const ModalEditStore = (props) => {
    const toast = useToast()
    const navigate = useNavigate()
    console.log(props)
    const [newstoreValues, setNewStoreValues ] = useState({
        userId: JSON.parse(localStorage.getItem('currentUser')).userId,
        name:"",
        description:"",
        country: "",
        city:"",
        region:"",
        addressLineFirst:"",
        addressLineSecond:"",
        postalCode:"",
        storeRating:1,
        categoryId:0
    })
    const [store, setStore ] = useState({})
    const initialRef = useRef(null)
    const [categories, setCategories] = useState(null)
    

    

    const handleStorePropertyChange = (e) => {
        setStore({ ...store, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStore() 
    }

    const getStore = () =>{
          
        fetch(`${APP_URL}/stores/${props.store.id}` , {
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
            console.log(data)
          setStore(data);
         
        })
        .catch(error => {
          console.log(error)
        });

  }

   
    const updateStore = () => {

        fetch(`${APP_URL}/stores/${props.store.id}` , {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
                     "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken
            },
            body: JSON.stringify(newstoreValues) 
        })
        .then(response => {
            if(!response.ok){
                {toast({ title:' Store store has not been updated', 
                status: 'erro',
                 duration:'4000', 
                 position:'top'}) }
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
    
            {toast({ title:' Store has been succesully updated', 
                    status: 'success',
                     duration:'4000', 
                     position:'top'}) }
                     
            navigate("/stores")

        })
        .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
        })
    } 
    const getCategories = () => {

        const params = {
            size: 10, // Replace with your desired size
            page: 1
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

    useEffect( () => {
        getCategories()
        getStore()
    },[])

    return (
      <>
               <Modal
                    initialFocusRef={initialRef}
                    isOpen={props.isOpen}
                    onClose={props.onCloseModalEdit}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Updating store</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <div style={{  backgroundColor:"#D7DDDF",  padding:'15px' }}>
                                <div style={{maxWidth: '500px',
                                            margin: '10px auto', 
                                            border: '1px solid black' ,
                                            padding:'15px' ,
                                            borderRadius:'8px',
                                            backgroundColor:"#fff"
                                        }}
                                >
                                    <h4 style={{marginBottom:'10px'}}>Update store </h4>


                                    <form onSubmit={handleSubmit}> 
                                        
                                            <div style={{display:'flex'}}>
                                                <FormControl mr={4}>
                                                    <FormLabel>name</FormLabel>
                                                    <Input
                                                        name='name'
                                                        value={store?.name}
                                                        onChange={handleStorePropertyChange}
                                                        placeholder='name' />
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>description</FormLabel>
                                                    <Input
                                                        name='description'
                                                        value={store?.description}
                                                        onChange={handleStorePropertyChange}
                                                        placeholder='description' />
                                                </FormControl>
                                            </div>
                                            
                                            <FormControl mr={4} mt={4}>
                                                    <FormLabel>country</FormLabel>
                                                    <Input
                                                        name='country'
                                                        value={store?.country}
                                                        onChange={handleStorePropertyChange}
                                                        placeholder='country' />
                                            </FormControl>
                                            <div style={{display:'flex'}}>
                                                

                                                <FormControl mr={4} mt={4}>
                                                    <FormLabel>city</FormLabel>
                                                    <Input
                                                        name='city'
                                                        value={store?.value}
                                                        onChange={handleStorePropertyChange}
                                                        placeholder='city' />
                                                </FormControl>

                                                <FormControl mt={4}>
                                                    <FormLabel>region</FormLabel>
                                                    <Input 
                                                        name='region'
                                                        value={store?.region}
                                                        onChange={handleStorePropertyChange}
                                                        placeholder='region' />
                                                </FormControl>
                                            </div>
                                        
                                            <div style={{display:'flex'}}>
                                                <FormControl mr={4} mt={4}>
                                                    <FormLabel>address line first</FormLabel>
                                                    <Input 
                                                        name='addressLineFirst'
                                                        value={store?.addressLineFirst}
                                                        onChange={handleStorePropertyChange}
                                                        placeholder='address line first' />
                                                </FormControl>
                                                <FormControl mt={4}>
                                                    <FormLabel>address line second</FormLabel>
                                                    <Input 
                                                        name='addressLineSecond'
                                                        value={store?.addressLineSecond}
                                                        onChange={handleStorePropertyChange}
                                                        placeholder='adress line second' />
                                                </FormControl>
                                            </div>
                                                                
                                            <div  style={{display:'flex'}}>
                                                <FormControl mr={4} mt={4}>
                                                <FormLabel>postal code</FormLabel>
                                                <Input 
                                                    name='postalCode'
                                                    value={store?.postalCode}
                                                    onChange={handleStorePropertyChange}
                                                    placeholder='postal code' />
                                                </FormControl>

                                                <FormControl  mt={4}>
                                                <FormLabel>store rating </FormLabel>
                                                <Input 
                                                    name='storeRating'
                                                    value={store?.storeRating} 
                                                    onChange={handleStorePropertyChange}
                                                    placeholder='store rating' />
                                                </FormControl>
                                            </div>
                                        

                                            <FormControl mt={4}>
                                            <FormLabel>categories</FormLabel>
                                            <Select name='categoryId'  value={store?.categoryId} onChange={handleStorePropertyChange}>
                                            {categories && categories.map(categorie => {
                                                return  <option key={categorie.id} value={categorie.id}>{categorie?.name}</option>
                                                })} 
                                            </Select>
                                            </FormControl>

                                            <div style={{marginTop:'15px'}}>
                                                <Button type='submit' colorScheme='orange' mr={3}>
                                                    Save
                                                </Button>
                                                <Button onClick={props.onClose} colorScheme='blue' >Cancel</Button>
                                            </div>
                                    </form>   
                                </div> 
                            </div>
                        </ModalBody>

                     </ModalContent>
               </Modal>

      </>
  )
}
export default ModalEditStore  

