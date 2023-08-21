import React from "react";
import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import image from "../../../assets/product1.jpg"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${props => props.direction === "left" && "10px" };
  right: ${props => props.direction === "rigth" && "10px" };
  top: 0;
  bottom: 0;
  margin: auto;
  cursor:pointer;
  opacity: 0.5;
`

const Wrapper = styled.div`
  height: 100%;
`
const Slide = styled.div`
  display: flex;
  align-items: center;
`
const ImageContainer = styled.div`
  flex: 1;
`
const InfoContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
`
export const Slider =() =>{
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <ImageContainer>
                    <Image src= {image}/>
                </ImageContainer>
                <InfoContainer>

                </InfoContainer>
            </Wrapper>
            <Arrow  direction="rigth">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}