import React, { useState } from "react";
import { APP_IDENTITY_URL } from "../../utils/constants/applicationConstants";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  useToast
} from '@chakra-ui/react'

const Index = () => {

  const [userCredentials, setUserCredentials ] = useState({
    email:'',
    password:'',
  })

  const [accessToken, setAccessToken ] = useState()

  const handleOnchangeUserCredentials = (e) => {
    setUserCredentials({...userCredentials , [e.target.name] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userCredentials)
    authUser()
  }

  const authUser = () => {
        fetch(`${APP_IDENTITY_URL}/authentication?${new URLSearchParams({
            email: userCredentials.email ,
            password: userCredentials.password})}` ,
         {
          method: 'GET',

      })
      .then(response => {
          if(!response.ok){
              throw new Error('Network response was not ok')
          }
          return response.json()
      })
      .then(data => {
          console.log(data.accessToken)
          setAccessToken(data.accessToken)
      })
      .catch(err => {
          console.error('There was a problem with the fetch operation:', err);
      })
      }

    return (

      <section style={{maxWidth: '350px',
              margin: '50px auto', 
              border: '1px solid black' ,
              padding:'30px' ,
              borderRadius:'8px',
       }}>
 
            <h3 style={{marginBottom:'20px'}}>Login</h3>
            <form onSubmit={handleSubmit}>
                <FormControl  mb={4}>
                  <FormLabel>email</FormLabel>
                    <Input
                      type="email"
                      name='email'
                      value={userCredentials.email}
                      onChange={handleOnchangeUserCredentials}
                      placeholder='email' />
                </FormControl>

                <FormControl  mb={4}>
                  <FormLabel>password</FormLabel>
                    <Input
                      type="password"
                      name='password'
                      value={userCredentials.password}
                      onChange={handleOnchangeUserCredentials}
                      placeholder='password' />
                </FormControl>

                <Box  w="100%" mt='15px'>
                    <Button w="100%"   type='submit' colorScheme='orange' mr={3}>
                      Continue
                    </Button>
                </Box>

            </form>
            
              <Box mt='10px'>
                <Text><a>forgot password ?</a>  <a href="/register">Create an account</a></Text>
              </Box>
      </section>
                  
    )
}

export default Index