import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background: teal;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`
export const Announcement = () => {
    return(
        <Container>
            Chat is now available on Nv-business!
        </Container>
    )
}