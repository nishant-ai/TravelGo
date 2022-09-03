import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Nav>
      <Left>
        <Logo src={require('../assets/TravelGo.png')} />
      </Left>
      <Center>
        <a href='/'>Home</a>
        <a href='/'>About Us</a>
        <a href='/'>Packages</a>
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