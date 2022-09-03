import React from 'react'
import styled from 'styled-components'
import DestinationCard from './DestinationCard'

function Destinations() {
  return (
    <Container>
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
`

const Body = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
`

const DestinationCards = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 4vh;
    width: 100%;
    text-align: center;
`

const Background = styled.img`
    left: 0;
    max-height: 80vh;
    object-fit: contain;
`