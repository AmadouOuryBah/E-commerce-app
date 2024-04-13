import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast
  } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { APP_URL} from "../../utils/constants/applicationConstants";

const Index = () => {
    const toast = useToast()

    const [store, setStore ] = useState({
        photo: "",
        userId:0,
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
    const [newStore, setNewStore] = useState(null)

    const [categories, setCategories] = useState(null)
    const [page ,setPage] = useState(1)
    const [isStoreAdded, setIsStoreAdded ] = useState(false)

    const [file, setFile] = useState(null);

   /* const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
*/
    const handleStorePropertyChange = (e) => {
        setStore({ ...store, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFile(document.getElementById('fileInput').files[0])
        createStore()  
    }


    const createPicture = () => {
        const formData = new FormData();
        formData.append('picture', file);

        fetch(`${APP_URL}/stores/${newStore.id}/pictures` , {
            method: 'POST',
            body: formData 
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
        })
    } 

    const createStore = () => {

        fetch(`${APP_URL}/stores` , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(store) 
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            setNewStore(data)
            createPicture()
            {toast({ title:'new product added succesully', 
                    status: isStoreAdded? 'success' : null,
                     duration:'3000', 
                     position:'top'}) }
        })
        .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
        })
    } 
    const getCategories = () => {

        const params = {
            size: 10, // Replace with your desired size
            page: page
          };

        const headers = {
            'Content-Type': 'application/json',
            'size': params.size,
            'page': params.page
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
    },[])

    return (
      <>
            <div style={{  backgroundColor:"#D7DDDF",  padding:'15px' }}>
                <div style={{maxWidth: '500px',
                            margin: '10px auto', 
                            border: '1px solid black' ,
                            padding:'15px' ,
                            borderRadius:'8px',
                            backgroundColor:"#fff"
                        }}
                >
                    <h4 style={{marginBottom:'10px'}}>create store </h4>


                    <FormControl mr={4}>
                                <FormLabel>choose a picture</FormLabel>
                                <Input id="fileInput" type='file' />
                    </FormControl>
                    <form onSubmit={handleSubmit}> 
                           
                            <div style={{display:'flex'}}>
                                <FormControl mr={4}>
                                    <FormLabel>name</FormLabel>
                                    <Input
                                        name='name'
                                        value={store.name}
                                        onChange={handleStorePropertyChange}
                                        placeholder='name' />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>description</FormLabel>
                                    <Input
                                        name='description'
                                        value={store.description}
                                        onChange={handleStorePropertyChange}
                                        placeholder='description' />
                                </FormControl>
                            </div>
                            
                            <FormControl mr={4} mt={4}>
                                    <FormLabel>country</FormLabel>
                                    <Input
                                        name='country'
                                        value={store.country}
                                        onChange={handleStorePropertyChange}
                                        placeholder='country' />
                            </FormControl>
                            <div style={{display:'flex'}}>
                                

                                <FormControl mr={4} mt={4}>
                                    <FormLabel>city</FormLabel>
                                    <Input
                                        name='city'
                                        value={store.value}
                                        onChange={handleStorePropertyChange}
                                        placeholder='city' />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>region</FormLabel>
                                    <Input 
                                        name='region'
                                        value={store.region}
                                        onChange={handleStorePropertyChange}
                                        placeholder='region' />
                                </FormControl>
                            </div>
                        
                            <div style={{display:'flex'}}>
                                <FormControl mr={4} mt={4}>
                                    <FormLabel>address line first</FormLabel>
                                    <Input 
                                        name='addressLineFirst'
                                        value={store.addressLineFirst}
                                        onChange={handleStorePropertyChange}
                                        placeholder='address line first' />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>address line second</FormLabel>
                                    <Input 
                                        name='addressLineSecond'
                                        value={store.addressLineSecond}
                                        onChange={handleStorePropertyChange}
                                        placeholder='adress line second' />
                                </FormControl>
                            </div>
                                                
                            <div  style={{display:'flex'}}>
                                <FormControl mr={4} mt={4}>
                                <FormLabel>postal code</FormLabel>
                                <Input 
                                    name='postalCode'
                                    value={store.postalCode}
                                    onChange={handleStorePropertyChange}
                                    placeholder='postal code' />
                                </FormControl>

                                <FormControl  mt={4}>
                                <FormLabel>store rating </FormLabel>
                                <Input 
                                    name='storeRating'
                                    value={store.storeRating} 
                                    onChange={handleStorePropertyChange}
                                    placeholder='store rating' />
                                </FormControl>
                            </div>
                        

                            <FormControl mt={4}>
                            <FormLabel>categories</FormLabel>
                            <Select name='categoryId'  value={store.categoryId} onChange={handleStorePropertyChange}>
                            {categories && categories.map(categorie => {
                                return  <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                                })} 
                            </Select>
                            </FormControl>

                            <div style={{marginTop:'15px'}}>
                                <Button type='submit' colorScheme='orange' mr={3}>
                                    create
                                </Button>
                                <Button  >Cancel</Button>
                            </div>
                    </form>   
                </div> 
            </div>
                
      </>
  )
}
export default Index     

