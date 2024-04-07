import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
   
  } from '@chakra-ui/react'

const Index = () => {
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
                        <div style={{display:'flex'}}>
                            <FormControl mr={4}>
                                <FormLabel>name</FormLabel>
                                <Input placeholder='name' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>description</FormLabel>
                                <Input placeholder='description' />
                            </FormControl>
                        </div>
                        
                        <div style={{display:'flex'}}>
                            <FormControl mr={4} mt={4}>
                                <FormLabel>country</FormLabel>
                                <Input  placeholder='country' />
                            </FormControl>

                            <FormControl mr={4} mt={4}>
                                <FormLabel>city</FormLabel>
                                <Input placeholder='city' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>region</FormLabel>
                                <Input  placeholder='region' />
                            </FormControl>
                        </div>
                    
                        <div style={{display:'flex'}}>
                            <FormControl mr={4} mt={4}>
                                <FormLabel>address line first</FormLabel>
                                <Input placeholder='address line first' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>address line second</FormLabel>
                                <Input placeholder='adress line second' />
                            </FormControl>
                        </div>
                                            
                        <div  style={{display:'flex'}}>
                            <FormControl mr={4} mt={4}>
                            <FormLabel>postal code</FormLabel>
                            <Input placeholder='postal code' />
                            </FormControl>

                            <FormControl  mt={4}>
                            <FormLabel>store rating </FormLabel>
                            <Input  placeholder='store rating' />
                            </FormControl>
                        </div>
                    

                        <FormControl mt={4}>
                        <FormLabel>categories</FormLabel>
                        <Select placeholder='option1'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        </FormControl>

                        <div style={{marginTop:'10px'}}>
                            <Button colorScheme='orange' mr={3}>
                                create
                            </Button>
                            <Button  >Cancel</Button>
                        </div>
                    
                </div> 
            </div>
                
      </>
  )
}
export default Index     

