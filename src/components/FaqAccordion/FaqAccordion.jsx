import {
Accordion,
AccordionButton,
AccordionPanel,
AccordionIcon,
Box,
AccordionItem} 
from "@chakra-ui/react";
    
const FaqAccordion = (props) => {
    return (
        <>
         <Accordion width={400} allowToggle>
             <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                  <Box as='span' flex='1' textAlign='left'>
                   {props.faq.question}
                  </Box>
                 <AccordionIcon />
                 </AccordionButton>
               </h2>
               <AccordionPanel>
                   {props.faq.response}
                </AccordionPanel>
              </AccordionItem>
        </Accordion>   
        </>
    )
}
export default FaqAccordion