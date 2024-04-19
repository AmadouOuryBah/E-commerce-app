import {
    Button,
    FormControl,
    FormLabel,
    Input,
    useToast
   
} from '@chakra-ui/react'; 
import ModalStyle from '../ModalDeleteStore/ModalDeleteStore.module.css'
import { APP_URL } from '../../utils/constants/applicationConstants';

const ModalEditProduct = () => {

    const toast = useToast()
  
    const editProduct = (storeId) => {

        fetch(`${APP_URL}/stores/${storeId}/items/itedId`, {
            method: 'PUT',
           
        })
        .then( response => {
            if(!response.ok){
                throw new Error('Network response was not ok')
            }

            return response
        })
        .then(data => {
            toast({ title:'Product has been deleted', 
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
            
                    <div className={ModalStyle.modal_container} > 
                              
                    </div>           
                    

         
</>)
}

export default ModalEditProduct