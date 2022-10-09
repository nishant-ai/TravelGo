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
`

const Image = styled.img`
    height: 22vh;
    margin-right: 2vw;
`

const Navigate = styled.img`
    height: 15%;
    align-self: center;
    margin-left: 4vw;
`

const Details = styled.div`
    font-size: 14px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
`

const Place = styled.div`
    font-weight: 600;
    margin-right: 5vw;
`

const Activities = styled.div`
`

const Duration = styled.div`
`