import React, {useState} from "react";
import "./RegisterPage.styles.css"
import Form from "react-bootstrap/Form"
import {Button, Col, Row} from "react-bootstrap";
import axios from "axios";
import {APP_URL} from "../../utils/constants/applicationConstants";
import styled from "styled-components";


const Container = styled.div`
  width: 50%!important;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  border:0.5px solid lightgray;
  border-radius: 30px;
  box-shadow: 5px 0px 5px 5px rgba(0, 0, 0, 0.2);
`
export default function RegisterPage(){

    const [isSent, setIsSent]  = useState(false);
    const  [user, setUser] = useState({
        email: "",
        password:"",
        username:"",
        confirmPassword:"",
        role:"user"
    })

    const handleOnChange = (event) =>{
        const {name, value} = event.target;
        setUser((user) =>{
            return {
                ...user, [name] : value
            };
        })
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(user)
        axios.post(APP_URL+"users", user)
            .then(res => {
                if(res.status === 201 && res.data){
                    setIsSent(true);
                }
            }).catch(error =>{
            console.log(error)
        });

    }

    return(

        <main className="container-wrapper">


            <Container >
                <Form onSubmit={handleOnSubmit} >
                    <Form.Text >
                        <h2 style={{textAlign:"center"}}>Register To NV-BUSINESS</h2>
                    </Form.Text>
                    <Row className="pt-3 mb-3 ">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleOnChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your Address"  name="confirmPassword" onChange={handleOnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" name="username" onChange={handleOnChange} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity" className="mb-3">
                            <Form.Label>Phone-Number</Form.Label>
                            <Form.Control placeholder="Enter your Phone Number" name="phoneNumber" onChange={handleOnChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip" className="mb-3">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control  />
                        </Form.Group>
                    </Row>


                    <Button variant="primary" type="submit" className="mb-5">
                        Submit
                    </Button>
                    {isSent && <Form.Text className="text-justify-center"><h5>An email has been sent to you ...</h5></Form.Text>}
                </Form>

            </Container>
        </main>
    );
}