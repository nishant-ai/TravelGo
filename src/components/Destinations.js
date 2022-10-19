import React from 'react'
import styled from 'styled-components'
import DestinationCard from './DestinationCard'

function Destinations() {
  return (
    <Container style={{background: '#333'}}>
        <Title>Our Popular Destinations</Title>
        <Body>
        <Background src={require('../assets/world-map-2.png')} />
            <DestinationCards>
                <DestinationCard place={'Thailand'} activities='20+ Spots' duration={'2D & 3N'} image='thailand.png' />
                <DestinationCard place={'Indonesia'} activities='25+ Spots' duration={'3D & 3N'} image='indonesia.png' />
                <DestinationCard place={'New Zealand'} activities='29+ Spots' duration={'3D & 2N'} image='newzealand.png' />
            </DestinationCards>
        </Body>
    </Container>
  )
}

export default Destinations

const Container = styled.div`
    padding-top: 6vh;
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        justify-content: center;
        padding: 0 32px 50px;
    }  
`

const Body = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    @media (max-width: 480px) {
        display: grid;
        width: 100%;
      }
  
`

const DestinationCards = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  @media (max-width: 480px) {
    display: grid;
    align-items: center;
    width: 100%;
    grid-gap: 20px 0;
    text-align-center;
  }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 25px; 
    width: 100%;
    text-align: center;
    font-weight: 500;
    color: #f0f0f0;
    @media (max-width: 480px) {
       padding: 80px 0 48px 0; 
       text-align: center;
    }
`

const Background = styled.img`
    left: 0;
    max-height: 80vh;
    object-fit: contain;
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
      }
  
`