import { 
AlertDialog,
Button,
AlertDialogOverlay,
AlertDialogContent,
AlertDialogHeader, 
AlertDialogBody,
AlertDialogFooter 
,AlertDialogCloseButton,
useToast
}
from "@chakra-ui/react"
import { APP_URL } from "../../utils/constants/applicationConstants"

const AlertDialogModal = ({onClose, isOpen, storeId, storeItemId, message, setIsOpenDeleteAlert}) => {

    const toast = useToast()
    const currentUser = JSON.parse(localStorage.getItem('currentUser')).userId

    const deleteStore = (storeId) => {

      fetch(`${APP_URL}/stores/${storeId}`, {
          method: 'DELETE',
          headers: {
              userId: currentUser,
              "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
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
                   duration:'5000', 
                   position:'top'})  
              setIsOpenDeleteAlert(false)
            
                   
   })
     .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }


    const deleteItem = (storeId, storeItemId) => {


      fetch(`${APP_URL}/stores/${storeId}/items/${storeItemId}`, {
          method: 'DELETE',
          headers: {
              "Authorization": ' Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).accessToken, 
          }
      })
      .then( response => {
          if(!response.ok){
              throw new Error('Network response was not ok')
          }
  
          return response
      })
      .then(data => {
          console.log('it s been deleted',data)
          toast({ title:'product has been deleted', 
                  description: "Refresh the page",
                  status: 'success',
                   duration:'4000', 
                   position:'top'})

          window.location.reload();
          
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  

    return (
        <>
       
        <AlertDialog
          motionPreset='slideInBottom'
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Delete</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delete this {message} from your store.
           
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button  onClick={onClose} >
                No 
              </Button>
              <Button onClick={
                () => message === "product" ?  
                    deleteItem(storeId, storeItemId) :
                    deleteStore(storeId)} colorScheme='red' ml={3}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog></>
    )
}

export default AlertDialogModal