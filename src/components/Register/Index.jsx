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

const Register = () => {

  const [userCredentials, setUserCredentials ] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    role: 'user'
  })

  const toast = useToast()
  
  const [isUserCreated, setIsUserCreated ] = useState(false)

  const handleOnchangeUserCredentials = (e) => {
    setUserCredentials({...userCredentials , [e.target.name] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userCredentials)
    createUser()
    setIsUserCreated(true)
  }

  const createUser = () => {
        fetch(`${APP_IDENTITY_URL}/users` , {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(userCredentials) 
      })
      .then(response => {
          if(!response.ok){
              throw new Error('Network response was not ok')
          }
          return response.json()
      })
      .then(data => {
          console.log(data)
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
          {/*}  {isUserCreated ? toast({ title:'account created succesfully', status: 'success', duration:'9000', position:'top'})
            : toast({ title:'error', status: 'error', description:'passwords must match', duration:'9000', position:'top'})}
          */}
            <h3 style={{marginBottom:'20px'}}>Sign up</h3>
            <form onSubmit={handleSubmit}>
              <FormControl mb={4} mr={4}>
                <FormLabel>username</FormLabel>
                <Input
                  name='username'  
                  value={userCredentials.username}
                  onChange={handleOnchangeUserCredentials}     
                  placeholder='username' />
              </FormControl>

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

                <FormControl  mb={4}>
                  <FormLabel>confirm password</FormLabel>
                    <Input
                      type="password"
                      name='confirmPassword'
                      value={userCredentials.confirmPassword}
                      onChange={handleOnchangeUserCredentials}
                      placeholder='confirmPassword' />
                </FormControl>

                <Box  w="100%" mt='15px'>
                    <Button w="100%"   type='submit' colorScheme='orange' mr={3}>
                      create
                    </Button>
                </Box>

            </form>
            
              <Box mt='10px'>
                <Text> Already have an account ? <a href="/login">log in</a></Text>
              </Box>
      </section>
                  
    )
}

export default Register