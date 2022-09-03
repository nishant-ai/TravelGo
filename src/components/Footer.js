import React from 'react'
import styled from 'styled-components'
import footerLogo from '../assets/footer-logo.svg'
import appStore from '../assets/appstore.svg'
import playStore from '../assets/playstore.svg'

function Footer() {
  return (
    <Container>

        <Left>
          <Logo src={footerLogo} alt='' />
          <LeftText>Book your trip in minute, get full Control for much longer</LeftText>
        </Left>

        <Mid>
          <List>
            <ListTitle>Company</ListTitle>
            <ListItem>About</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Mobile</ListItem>
          </List>
          <List>
            <ListTitle>Contact</ListTitle>
            <ListItem>Help/FAQs</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>Affiliates</ListItem>
          </List>
          <List>
            <ListTitle>More</ListTitle>
            <ListItem>Airline fees</ListItem>
            <ListItem>Airline</ListItem>
            <ListItem>Low Fare tips</ListItem>
          </List>
        </Mid>

        <Right>
          <RightText>Discover Our App</RightText>
          <Logos>
            <RightLogo src={appStore} alt='' />
            <RightLogo src={playStore} alt='' />
          </Logos>
        </Right>

    </Container>
  )
}

export default Footer

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Left = styled.div`
  padding: 1vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.2;
  height: 50vh;
  font-size: 14px;
`
const Mid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.6;
  height: 50vh;
`
const Right = styled.div`
  padding: 1vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.2;
  height: 50vh;
`

const Logo = styled.img`
  height: 6.5vh;
`

const LeftText = styled.p`
  margin-top: 6vh;
  width: 20vw;
`

const RightText = styled.p`
  font-size: 14px;
  width: 100%;
  color: #5E6282;
  margin-top: 4vh;
  padding-left: 0.8vw;
`

const List = styled.ul`
  margin: 0 1.3vw;
`

const ListTitle = styled.li`
  font-weight: 700;
  margin-bottom: 6vh;
`

const ListItem = styled.li`
  margin-bottom: 3vh;
  color: #5E6282;
  font-weight: 400;
`

const RightLogo = styled.img`
  margin: 0 8px;
  width: 8vw;
`

const Logos = styled.div`
  display: flex;
`