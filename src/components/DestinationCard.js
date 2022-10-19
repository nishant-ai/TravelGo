import React from 'react'
import styled from 'styled-components'

function DestinationCard({place, image, activities, duration}) {
  return (
    <Container>
        <Image src={require(`../assets/${image}`)} />
        <Content>
            <Place>{place}</Place>
            <Details>
                <Activities>{activities}</Activities>
                <Duration>{duration}</Duration>
            </Details>
        </Content>
        <Navigate src={require(`../assets/navigate.png`)}/>
    </Container>
  )
}

export default DestinationCard

const Container = styled.div`
    cursor: pointer;
    border: 0.5px solid #647696;
    display: flex;
    margin: 2vh 5vw;
    width: 38vw;
    border-radius: 12px;
    box-shadow: 10px 10px 51px -25px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 51px -25px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 51px -25px rgba(0,0,0,0.75);
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 30px 45px -15px rgba(255,255,255,0.57);
    }
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        display: grid;
        grid-gap: 10px 0;
        grid-template-columns: 1fr 1fr auto;
        margin: 0;
        
    }  
`

const Image = styled.img`
    height: 22vh;
    margin-right: 2vw;
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        margin: 0;
    }
`

const Navigate = styled.img`
    height: 15%;
    align-self: center;
    margin-left: 4vw;
    @media (max-width: 480px) {
        margin: 0;
    }
`

const Details = styled.div`
    font-size: 14px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width: 480px) {
       display: grid;
    }
` 

const Place = styled.div`
    font-weight: 700;
    margin-right: 5vw;
    color: #f0f0f0;
    @media (max-width: 480px) {
        margin: 0;
    }
`

const Activities = styled.div`
    color: #f0f0f0;
`

const Duration = styled.div`
    color: yellow;
`