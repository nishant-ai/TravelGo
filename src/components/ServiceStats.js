import React from 'react'
import styled from 'styled-components'
import StatsCard from './StatsCard'

function ServiceStats() {
  return (
    <div style={{background: '#333'}}>
      <Container>
        <CoverTitleu>We always try to give you</CoverTitleu>
        <CoverTitle>the best service</CoverTitle>
        <CoverTextu>We always try to make our customer Happy. We provide all kind of</CoverTextu>
        <CoverText>facilities. Your Satisfaction is our main priority.</CoverText>
        <StatsCards>
            <StatsCard count='15+' title ='Years of Experience' image='calendar.png' />
            <StatsCard count='15k+' title ='Happy Travelers' image='chart.png' />
            <StatsCard count='650+' title ='Places Visited' image='location.png' />
            <StatsCard count='2k+' title ='Travel History' image='history.png' /> 
        </StatsCards>
        <Background src={require('../assets/world-map.png')} alt='background' />
    </Container>
    </div>
  )
}

export default ServiceStats

const Container = styled.div`
    background: rgba(0, 88, 83, 0.05);
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 80vh;
    @media (max-width: 480px) {
      padding: 0 16px;
      height: 100%;
    }
`

const Background = styled.img`
  position: absolute;
  align-self: center;
  max-width: 100vw;
`
const CoverTitleu = styled.div` // cover title upper text
  margin-top: 10vh;
  color: #f0f0f0;
  font-weight: 600;
  font-size: 6vh;
  text-align: center;

`

const CoverTitle = styled.div`
  color: black;
  font-weight: 600;
  font-size: 6vh;
  text-align: center;
`
const CoverText = styled.div`
  font-size: 14px;
  color: #eee;
  text-align: center;
  line-height: 22px;
`

const CoverTextu = styled.div` // cover text upper
  font-size: 14px; 
  color: #eee;
  padding-top: 5vh;
  text-align: center;
  line-height: 22px;
`

const StatsCards = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  color:#f0f0f0;
  @media (max-width: 480px) {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    text-align: center;
  }
`