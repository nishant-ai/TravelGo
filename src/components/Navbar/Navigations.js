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
    font-weight: 100;
    border: 2px solid #04A551;
    border-radius: 1.5rem;
    color: #ff0;
    margin:1rem;
    text-align: center;
    font-family: roboto;
    font-size: 1.35rem;
    overflow: hidden;
    padding: 0.50rem 1.6rem;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
::after {
  background-color: #04A551;
  border-radius: 3rem;
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-100%, 0) rotate(10deg);
  transform-origin: top left;
  transition: 0.2s transform ease-out;
  will-change: transform;
  z-index: -1;
}
  
&:hover::after
{
  transform: translate(0, 0);
}
&:hover
{
  border: 2px solid transparent;
  color: indigo;
  transform :scale(1.05);
  will-change :transform;
}
`

const Navigation = () => {
    return ( 
        <Nav>
            <List >
              <a href='#home' style={{color: 'white', textDecoration: 'none'}}>Home</a>
            </List>
           <List >
              <a href='#about-us' style={{color: 'white', textDecoration: 'none'}}>About Us</a>
           </List>
           <List>
              <a href='#packages' style={{color: 'white', textDecoration: 'none'}}>Package</a>
          </List>
        </Nav>
     );
}
 
export default Navigation;

