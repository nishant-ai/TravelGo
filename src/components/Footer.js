import React from 'react'
import styled from 'styled-components'
import footerLogo from '../assets/footer-logo.svg'
import appStore from '../assets/appstore.svg'
import playStore from '../assets/playstore.svg'
import '../styles/footer.css'

function Footer() {
  return (
    <Container style={{background: '#333'}}>

        <Left>
          <Logo src={footerLogo} alt='' /> 
          <LeftText>Book your trip in minute, get full Control for much longer.</LeftText>
        </Left>

        <Mid className='links'>
          <List className="list">
            <ListTitle>Company</ListTitle>
            <a href='#home'  className="m-2">Home</a>
            <a href='#about-us'  className="m-2">About Us</a>
            <a href='#' className="m-2">Careers</a>
          </List>
          <List className='list'>
            <ListTitle>Contact</ListTitle>
            <a href='#'  className="m-2">Help/FAQs</a>
            <a href='#'  className="m-2">Press</a>
            <a href='#'  className="m-2">Affiliates</a>
          </List>
          <List className='list'>
            <ListTitle>More</ListTitle>
            <a href='#'  className="m-2">Airline Fees</a>
            <a href='#'  className="m-2">Airline</a>
            <a href='#'  className="m-2">Low Fair Trips</a>
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
  color: #647696;
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
  color: #f0f0f0;
  font-size: 18px;
`

const ListItem = styled.li`
  margin-bottom: 3vh;
  color: #5E6282;
  font-weight: 400;
  color: #c0ded9;
`

const RightLogo = styled.img`
  margin: 0 8px;
  width: 8vw;
`

const Logos = styled.div`
  display: flex;
`