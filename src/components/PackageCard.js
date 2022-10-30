import React from 'react'
import styled from 'styled-components'

function PackageCard({image, stay, cost, tagline, location}) {
  return (
    <Container>
        <Background src={require(`../assets/${image}`)} />
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
        
    </Container>
  )
}

export default PackageCard

const Container = styled.div`
    width: 89vw;
    margin: 1vw 5vw;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    font-size: 14px;
    border-radius: 9px;
    background-color: white;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 30px 45px -15px rgba(0,0,0,0.7);
    }
    @media (min-width: 768px) {
        width: auto;
        flex-direction: column; 
        width: fit-content;
    }
    @media (max-width: 480px) {
        width: 100%;
        // height: 100%;
        display: grid;
        // grid-template-columns: 1fr 1fr;
        margin: 10px 0;
    }
`

const Background = styled.img`
    width: 25vw;
    object-fit: cover;
    border-radius: 9px 0 0 9px;
    @media (min-width: 768px) {
        object-fit: contain;
        border-radius: 0;
        border-radius: 0 0 9px 9px;
    }
    @media (max-width: 480px) {
        // object-fit: cover;
        width: 100%;
        border-radius: 9px 9px 0 0;
        height: 20vh;
        // display: grid;
    }
`

const Lower = styled.div`
    position: relative;
    background-color: white;
    border-radius: 0 9px 9px 0;
    padding: 25px 17px;
    left: -5px;
    width: inherit;
    @media (min-width: 768px) {
        position: absolute;
        border-radius: 0 0 9px 9px;
        padding: 20px 15px;
        left: auto;
        width: 25vw;
    }
    @media (max-width: 480px) {
           left: 0;
        }
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