
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
    useToast,
   
} from '@chakra-ui/react';      
import { APP_URL } from "../../utils/constants/applicationConstants"
import { useNavigate } from "react-router-dom";



const ModalAddFaq = (props) => {

    const navigate = useNavigate();
    const [faq, setFaq] = useState({
        question:"",
        response:"",
        storeId: props.storeId

    })
    const toast = useToast()

    console.log(props)
    const handleStorePropertyChange = (e) => {
        setFaq({ ...faq, [e.target.name] : e.target.value});
    }
    const addFaq = () =>{
          
        fetch(`${APP_URL}/stores/${props.storeId}/faqs` , {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
          },
          body: JSON.stringify(faq)
        })
        .then(response => {
          if (!response.ok) {
            {toast({ title:'faq not added', 
            status: 'error' ,
             duration:'3000', 
             position:'top'}) }
            throw new Error('Network response was not ok');
          }

          return response
        })
        .then(data => {
          console.log(data);
          {toast({ title:'faq has been added', 
          status: 'success' ,
           duration:'3000', 
           position:'top'}) }
           window.location.reload();
          
         
        })
        .catch(error => {
          console.log(error)
        });

  }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(faq)
       addFaq()
     }
    return (<>
                <Modal
                    isOpen={props.isOpen}
                    onClose={props.onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Add Faq </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    <form onSubmit={handleSubmit}> 
                                        
                   
                    <FormControl>
                        <FormLabel>Question</FormLabel>
                        <Input
                            name='question'
                            value={faq.question}
                            onChange={handleStorePropertyChange}
                            placeholder='question' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Answer</FormLabel>
                        <Input
                            name='response'
                            value={faq.response}
                            onChange={handleStorePropertyChange}
                            placeholder='answer' />
                    </FormControl>

                    <div style={{marginTop:'15px'}}>
                            <Button type='submit' colorScheme='orange' mr={3}>
                                create
                            </Button>
                            <Button  onClick={props.onClose}  colorScheme='blue'>Cancel</Button>
                        </div>
                    </form>           
                    
                    </ModalBody>

                    </ModalContent>
                </Modal>
         

                
     </>)
}

export default ModalAddFaq