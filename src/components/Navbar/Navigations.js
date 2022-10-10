import React from "react";
import styled from "styled-components";

const Nav  = styled.ul`
     display: flex;
     justify-content: space-between;
     align-items: center;
     flex:1;
     margin: 0 2rem;
     @media (max-width:600px) {

     display: none;
     }
     
`
const List  = styled.li`
    cursor: pointer ;
    font-weight: 700;
    padding: 0.4rem  0.7rem;
    border: 3px solid transparent;
    :hover{
        border: 3px solid white;
        border-radius:1rem;
        
    }
`

const Navigation = () => {
    return ( 
        <Nav>
            <List >
                 <a  href='#home'>Home</a>
            </List>
           <List >
              <a href='#about-us'>About Us</a>
           </List>
           <List>
              <a href='#packages'>Package</a>
          </List>
        </Nav>
     );
}
 
export default Navigation;

