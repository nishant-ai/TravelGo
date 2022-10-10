import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../components/menuItems'
import '../components/App.css'
import MenuItems from '../components/Submenu'

function Navbar() {
  return (
    <Nav>
      <Left>
        <Logo src={require('../assets/TravelGo.png')} />
      </Left>
      <Center>
          {menuItems.map((menu, index) => {
            const depthLevel = 0 ;
            return  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          })}
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

// const ListItems = styled.li`
//   position: relative;
//   list-style: none;
// `

// const Button = styled.button`
//   background-color: inherit;
//   border: none;
//   font-size: 16px;
//   font-weight: 540;
//   font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
// `