import React from 'react'
import styled from 'styled-components'

function Reviews() {
  return (
    <Container>
        <Title>What People Say About Us</Title>
        <ReviewCard>
            <ReviewBody>
                <PersonImg src={require('../assets/person.png')} alt=''/>
                <ReviewText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</ReviewText>
                <PersonName>- Jeo Stanley</PersonName>
            </ReviewBody>
            <DecorationL src={require('../assets/loation.png')} alt='' />
            <DecorationR src={require('../assets/loation.png')} alt='' />
            <ReviewBg src={require('../assets/reviewbg.png')} alt='' />
        </ReviewCard>
    </Container>
  )
}

export default Reviews

const Container = styled.div`
    background: #ECF1F0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 4vh;
    width: 100%;
    text-align: center;
`

const ReviewCard = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    margin-bottom: 8vh;
`

const ReviewBg = styled.img`
    position: absolute;
    height: 50vh;
`

const ReviewBody = styled.div`
    background: #ffffff;
    z-index: 1;
    align-self: center;
    height: 25vh;
    width: 35vw;
    margin-top: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px;
    font-size: 14px;
`

const PersonImg = styled.img`
    height: 15vh;
    margin-top: -7vh;
`

const ReviewText = styled.p`
`

const PersonName = styled.div`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 1vh;
`

const DecorationL = styled.img`
    position: absolute;
    left: -45vw;
`

const DecorationR = styled.img`
    position: absolute;
    right: -50vw;
`