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
    Breadcrumb,
    BreadcrumbItem, 
    BreadcrumbLink,
} from '@chakra-ui/react';      
import { APP_URL } from "../../utils/constants/applicationConstants"
import { useNavigate } from "react-router-dom";
import ModalStyle from '../ModalAddItem/ModalAddItem.module.css'
import { color } from "framer-motion";
import ModalDeleteStore from "../ModalDeleteStore/ModalDeleteStore";


const Index = (props) => {
    const navigate = useNavigate();
    const [item, setItem] = useState({
        name:"",
        description:"",
        price:0,
        categoryId:0

    })
    const [isDelteModalActive, setIsDelteModalActive] = useState(false)

    const currentUser = JSON.parse(localStorage.getItem('currentUser')).userId
<<<<<<< HEAD

=======
    console.log(currentUser)
>>>>>>> 15b69112da6231a0839336ce17a64459b465d35c

    const [newProduct, setNewProduct] = useState(null)
    const toast = useToast()

    const [isItemAdded, setIsItemAdded ] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
  
    const [page , setPage] = useState(1)
    const initialRef = useRef(null)
    
    const [categories, setCategories ] = useState(null) 

    const handleStorePropertyChange = (e) => {
        setItem({ ...item, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       //setFile(document.getElementById('fileInput').files[0])
       addProduct()
    }

    const verifyfFileHasBeenSelected = () =>{
        var fileFromInput = document.getElementById('fileInput')?.files[0]
            if(!fileFromInput){
                toast({title: 'Choose a file first',
                status: 'error',
                duration: '3000',
                position: 'top' })

                 return false;
            }

            return true
            
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

    const addProduct= () => {

        if(!verifyfFileHasBeenSelected()){
            return;
        }
        fetch(`${APP_URL}/stores/${props.store.id}/items`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then( response => {
            if(!response.ok){

                {toast({ title:'product not added', 
                status: 'error' ,
                 duration:'3000', 
                 position:'top'}) }
                throw new Error('Network response was not ok')
            }

            return response.json()
        })
        .then(data => {
            if(!verifyfFileHasBeenSelected()){
                return;
            }

            var fileFromInput = document.getElementById('fileInput')?.files[0]

            addPictureToItem(data.id, fileFromInput)
            {toast({ title:'new product added succesully', 
                    status: isItemAdded? 'success' : undefined,
                     duration:'3000', 
                     position:'top'}) }
<<<<<<< HEAD
            navigate(`/stores/${props.store.id}`)
=======
            console.log("navigating to the .....  " + props.store.id)
            setIsOpen(false)
            navigate(`/stores/${props.store.id}`)
            
>>>>>>> 15b69112da6231a0839336ce17a64459b465d35c
        })
        .catch(error => {
            {toast({ title:'Could not add the item to the store', 
                    status: "error",
                     duration:'3000', 
                     position:'top'}) };
            console.log(`something went wrong... ${error}`)
          });

          
    }

    const addPictureToItem = (id, file) => {
        const formData = new FormData();
        formData.append('picture', file);

        fetch(`${APP_URL}/stores/${props.store.id}/items/${id}/pictures` , {
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
            setIsItemAdded(true)
            console.log(data)
        })
        .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
        })
    } 

    const onClose = () => setIsOpen(false);
    
    useEffect( () => {
        getCategories()
    },[])
    const onOpen = () => {
        setIsOpen(true)
    }

    return (<>
            {isDelteModalActive ? <ModalDeleteStore store={props.store} /> : null}
            {props.store.userId == currentUser &&
          
                <div  className={ModalStyle.breadcrumb_container}>
                    <Breadcrumb flex={1} spacing='8px' marginLeft={-7} separator='>'>
                        <BreadcrumbItem>
                            <BreadcrumbLink   onClick={onOpen} href='#'> Add product</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink  href={`/manage_store/${props.store.id}`}>Manage store</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <BreadcrumbLink href={`/stores/${props.store.id}`} >Store</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    {
                        window.location.pathname != `/stores/${props.store.id}` ? 
                        <div>
                        <Button  onClick={()=> setIsDelteModalActive(!isDelteModalActive)}  colorScheme='red'>Delete store</Button>
                        </div>
                        : null
                    
                    }
                    
                </div>
            }
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Add New product to the store</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                    <FormControl mr={4}>
                            <FormLabel> choose a picture</FormLabel>       
                            <Input id="fileInput" type='file' />
                    </FormControl>
                    <form onSubmit={handleSubmit}> 
                                        
                    <div style={{display:'flex'}}>
                            <FormControl mr={4}>
                                <FormLabel>name</FormLabel>
                                <Input
                                name='name'
                                value={item.name}
                                onChange={handleStorePropertyChange}
                                placeholder='name' />
                            </FormControl>

                        <FormControl>
                                <FormLabel>description</FormLabel>
                                <Input
                                name='description'
                                value={item.description}
                                onChange={handleStorePropertyChange}
                                placeholder='description' />
                        </FormControl>
                    </div>
                    <FormControl>
                        <FormLabel>price</FormLabel>
                        <Input
                            name='price'
                            value={item.price}
                            onChange={handleStorePropertyChange}
                            placeholder='price' />
                    </FormControl>
                    
                    <FormControl mt={4}>
                        <FormLabel>categories</FormLabel>
                        <Select name='categoryId'  value={item.categoryId} onChange={handleStorePropertyChange}>
                           {categories && categories.map(categorie => {
                            return  <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                        })} 
                        </Select>
                    </FormControl>

                    <div style={{marginTop:'15px'}}>
                            <Button type='submit' colorScheme='orange' mr={3}>
                                create
                            </Button>
                            <Button  onClick={onClose}  colorScheme='blue'>Cancel</Button>
                        </div>
                    </form>           
                    
                    </ModalBody>

                    </ModalContent>
                </Modal>
         

                
     </>)
}

export default Index 