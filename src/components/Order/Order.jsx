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
    const date = new Date(order.orderDate)
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
        <Table  colorScheme='orange'>
          
            <Tbody>
            <>
                
                 
                { order.items?.map( item => (
               
                    <Tr>
                        <Td>{item.name}</Td>
                        <Td>{item.price}</Td>
                          
                            <Td>{ date.toLocaleDateString()} {date.toLocaleTimeString()} </Td>
                            <Td>{order.totalCost}</Td>
                    
                    </Tr>
        
                    ))}
            
              
            
                </>
              
            </Tbody>
        
        </Table>
        </TableContainer>
    </>
   ) 
}

export default Order