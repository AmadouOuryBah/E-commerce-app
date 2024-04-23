import { useState, useEffect } from "react"
import noImage from "../../assets/noImage.jpg"
import style from "../Order/Order.module.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Order = ({order}) => {

    console.log(order.totalCost, order.orderDate)
    const  NoOrders = () =>{
        if(!order){
            return <p>No Orders Yet For This Store</p>
        }
    }

    console.log(order.items)
   return (
   
    <>
        <TableContainer>
        <Table variant='striped' colorScheme='orange'>
            <Thead>
            <Tr>
                <Th>name</Th>
                <Th>price</Th>
                <Th>date</Th>
                <Th>cost</Th>
            </Tr>
          
            </Thead>
            <Tbody>
            { order.items?.map( item => (

                <Tr>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>{order.orderDate}</Td>
                    <Td>{order.totalCost}</Td>
                </Tr>
            ))}
            </Tbody>
        
        </Table>
        </TableContainer>
    </>
   ) 
}

export default Order