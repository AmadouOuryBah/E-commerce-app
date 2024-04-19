import {
    Button,
    FormControl,
    FormLabel,
    Input,
    useToast
   
} from '@chakra-ui/react'; 
import ModalStyle from '../ModalDeleteStore/ModalDeleteStore.module.css'
import { APP_URL } from '../../utils/constants/applicationConstants';

const ModalDeleteStore = (props) => {

    const toast = useToast()
    const userId = JSON.parse(localStorage.getItem('currentUser')).userId

   
    const deleteStore = (storeId) => {

        fetch(`${APP_URL}/stores/${storeId}`, {
            method: 'DELETE',
            headers: {
                userId: userId
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

   
return (<>
            
                    <form className={ModalStyle.modal_container} > 
                        <h4>Are you want to delete the store ?</h4>      
                        <div>
                                <FormControl mr={4}>
                                    <FormLabel>name</FormLabel>
                                    <Input
                                        readOnly
                                        value={props.store?.name}
                                    />
                                </FormControl>

                            <FormControl>
                                    <FormLabel>description</FormLabel>
                                    <Input
                                        readOnly
                                        value={props.store?.description}
                                    />
                            </FormControl>
                            <FormControl>
                                <FormLabel>city</FormLabel>
                                <Input
                                    readOnly
                                    value={props.store?.city}
                                />
                            </FormControl>
                        </div>

                        <div style={{marginTop:'15px'}}>
                            <Button
                                 colorScheme='orange'
                                  mr={3}
                                  onClick={() => deleteStore(props.store.id)}
                                  >
                                Delete
                            </Button>
                            <Button  colorScheme='blue'>Cancel</Button>
                        </div>
                    </form>           
                    

         
</>)
}

export default ModalDeleteStore