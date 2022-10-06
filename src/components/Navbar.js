import React from 'react'
import styled from 'styled-components'
import {Link} from "react-scroll"

function Navbar() {
  return (
    <Nav>
      <Left>
        <Logo src={require('../assets/TravelGo.png')} />
      </Left>
      <Center>
        <a><Link to="home" smooth={true} duration={500} spy={true} exact="true">Home</Link></a>
        <a><Link to="aboutUs" smooth={true} duration={500} spy={true} exact="true">About Us</Link></a>
        <a href='/'><Link to="packages" smooth={true} duration={500} spy={true} exact="true">Packages</Link></a>
      </Center>
      <Right>
        <Favourite src={require('../assets/favourite.png')} alt='Favourites' />
        <Profile src={require('../assets/Profile.png')} alt='Profile' />
      </Right>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  z-index:12;
`

const Left = styled.div`
  padding-left: 7vw;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Logo = styled.img`
  height: 50%;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 7vw;
`

const Favourite = styled.img`
  margin-right: 1vw;
  height: 50%;
  cursor: pointer;
`
const Profile = styled.img`
  height: 50%;
  cursor: pointer;
`