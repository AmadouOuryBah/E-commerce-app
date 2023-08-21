import styled from "styled-components"
import React  from "react";
import {Search} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";


const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`
const Input = styled.input`
  border: none;
`

const Right = styled.div`
   flex:1;
  display:  flex;
  justify-content: flex-end;
  align-items: center;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor:pointer;
  margin-left: 25px;
`
const Center = styled.div`
    flex:1;
    text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`
export const NavbarNew = () =>{
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input></Input>
                        <Search style = {{color:"gray", fontSize:"16px"}}>

                        </Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        NV-M.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}