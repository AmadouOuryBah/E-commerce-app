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
    BreadcrumbLink
} from '@chakra-ui/react';      
import { APP_URL } from "../../utils/constants/applicationConstants"


const Index = (props) => {

    const [item, setItem] = useState({
        name:"",
        description:"",
        price:0,
        categoryId:0

    })
    //const [file, setFile] = useState();

    const [newProduct, setNewProduct] = useState(null)
    const toast = useToast()

    const [isItemAdded, setIsItemAdded ] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()
  
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

        console.log(props.storeId)
        fetch(`${APP_URL}/stores/${props.storeId}/items`, {
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
            console.log(data)
            var fileFromInput = document.getElementById('fileInput').files[0]
            console.log(fileFromInput)
            addPictureToItem(data.id, fileFromInput)
            setIsItemAdded(true)
            {toast({ title:'new product added succesully', 
                    status: isItemAdded? 'success' : undefined,
                     duration:'3000', 
                     position:'top'}) }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });


    }

    const addPictureToItem = (id, file) => {
        const formData = new FormData();
        formData.append('picture', file);

        fetch(`${APP_URL}/stores/${props.storeId}/items/${id}/pictures` , {
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

    useEffect( () => {
        getCategories()
    },[])


    return (<>
     

                <div style={{marginLeft:'-30px', fontSize:'16px'}}>
                    <Breadcrumb spacing='8px' separator='>'>
                        <BreadcrumbItem>
                            <BreadcrumbLink  onClick={onOpen} href='#'>add new product</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink  href={`/manage_store/${props.storeId}`}>manage store</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <BreadcrumbLink href={`/stores/${props.storeId}`} >store</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
             
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
                            <Button  colorScheme='blue'>Cancel</Button>
                        </div>
                    </form>           
                    
                    </ModalBody>

                    </ModalContent>
                </Modal>
         
     </>)
}

export default Index 