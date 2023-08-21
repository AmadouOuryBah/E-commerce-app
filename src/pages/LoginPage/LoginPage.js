import React, {useState, useRef, useEffect} from "react";
import {Button, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {APP_URL} from "../../utils/constants/applicationConstants";
import {LocalStorage} from "../../services/LocalStorage/LocalStorate.service";
import styled from "styled-components";


export const LoginPage =() =>{

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const[errors, setErrors] = useState(false)
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        axios.get(APP_URL+ "authentication", {
            params:{
                email: user.email,
                password:user.password
            }
        })
            .then(res => {
                if(res.status === 200 && res.data ){
                    LocalStorage.set("token", res.data.accessToken)
                    console.log(LocalStorage.get("token"))
                }
            })
            .catch(err => {
                 if(err.response.status === 404 ){
                    setErrors(true)
                 }
                else if (err.response.status === 400){
                    console.log("the password must have at least 6 caracteres")
                }
            })

    }

    const handleOnChange = (event) =>{
        const {name, value} = event.target

        setUser(user =>{
            return {
                ...user, [name]: value
            }
        })
    }

    const Container = styled.div`
        width: 50%!important;
      height: 400px;
      border: 0.5px solid lightgray;
      box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 900;
      margin-top: -70px;
      
    `
    const Loading = () => {

    }

    return(
        <main className="container-wrapper">
            <Container>
                <Form onSubmit={handleOnSubmit}  className="mt-3">
                        <Form.Text >
                            <h2>Login To NV-BUSINESS</h2>
                        </Form.Text>

                        <Form.Group className="mt-3">
                            <Form.Text >
                                { errors && <span className="text-center text-danger">The email or the password is not correct </span>} <br/>
                            </Form.Text>
                            <Form.Label >Email</Form.Label>
                            <Form.Control name="email" placeholder="Enter the email of the user" onChange={handleOnChange}></Form.Control>
                        </Form.Group >
                        <Form.Group className="mt-3">
                            <Form.Label >Password</Form.Label>
                            <Form.Control name="password" placeholder="Enter the password of the user" onChange={handleOnChange}></Form.Control>
                        </Form.Group>

                        <Button type="submit" className="mt-5 mb-5">Submit</Button>
                </Form>
            </Container>
        </main>
    )
}
