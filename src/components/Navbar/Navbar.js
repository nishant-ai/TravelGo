import React, { useState } from 'react'
import styled from 'styled-components'
import Navigation from './Navigations'
import {AiOutlineStar}  from 'react-icons/ai'
import {MdMenu} from "react-icons/md"
import {ImCross}  from "react-icons/im"
import MobileNavigation from './MobileNavigation'

function Navbar() {
  const [openNav, setOpenNav] = useState(false)

  const clickHandler =()=>{
    setOpenNav(!openNav)
  }
  return (
    <Nav>
      <Left>
       
        <Logo src={require('../../assets/TravelGo.png')} />
      </Left>
      <Navigation/>
      {openNav  &&
        <MobileNavigation/>
     }
      <Right>
        <FavIcon  size="42" />
        <Profile src={require('../../assets/Profile.png')} alt='Profile' />
      </Right>
        <MenuIconCon>
          {openNav  ?       
          <CrossIcon  onClick={clickHandler}  size="29"/>
        : 
          <MenuIcon   onClick={clickHandler} size="37"/>
        }
        
        </MenuIconCon>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  padding:0 5rem;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  backdrop-filter: blur(5px);
  @media (max-width:600px) {
    padding:0 1rem;
   
  }
`

const MenuIconCon = styled.div`
        display: none;
        width:4rem;
        
   @media (max-width:600px) {
         display: flex;
       }
`

const MenuIcon = styled(MdMenu)`
      cursor:pointer;
   
      color:white

`
const CrossIcon = styled(ImCross)`
      cursor:pointer;
      color:white
`

const FavIcon = styled(AiOutlineStar)`
       color: orangered;
       cursor: pointer;
       margin:0  0.6rem;
      
       :hover{
        transform: scale(1.01);
        color: orange;
       }
    
`  
const Left = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`


const Logo = styled.img`
  height: 50%;
  cursor: pointer;


  @media (max-width:600px) {
      height: 20%;
  }
`



const Right = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


const Profile = styled.img`
  height: 50%;
  cursor: pointer;
`