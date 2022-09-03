import React from 'react'
import styled from 'styled-components'

function PackageCard({image, stay, cost, tagline, location}) {
  return (
    <Container>
        <Lower>
            <Top>
                <Stay>{stay}</Stay>
                <Cost>{cost}</Cost>
            </Top>
            <Mid>{tagline}</Mid>
            <Bottom>
                <Location><img height={14} src={require('../assets/location-2.png')} alt='' />  {location}</Location>
                <More>Know More</More>
            </Bottom>
        </Lower>
        <Background src={require(`../assets/${image}`)} />
    </Container>
  )
}

export default PackageCard

const Container = styled.div`
    margin: 0 2vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 14px;
`

const Background = styled.img`
    width: 25vw;
    object-fit: contain;
`

const Lower = styled.div`
    position: absolute;
    width: 25vw;
    background-color: white;
    border-radius: 0 0 9px 9px;
    padding: 20px 15px;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

const Mid = styled.div`
    margin: 10px 0;
    font-size: 12px;
`

const Bottom = styled.div`
    margin-top: 2vh;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
`

const Stay = styled.div`
`

const Cost = styled.div`
`

const Location = styled.div`
`

const More = styled.div`
    font-size: 11px;
    text-decoration: underline;
    cursor: pointer;
`