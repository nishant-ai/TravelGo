import React from 'react'
import styled from 'styled-components'
import Step from './Step'

function BookingSteps() {
  return (
    <Container style={{background: '#333'}}>
        <Title>Book Your Next Trip in 3 Easy Steps</Title>
        <TitleMini>Easy and Fast</TitleMini>
        <Body>
            <Left>
                <Step 
                title='Choose Destination'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
                image='step1.png'
                />
                <Step 
                title='Make Payment'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
                image='step2.png'
                />
                <Step 
                title='Reach Airport on Selected Date'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
                image='step3.png'
                />
            </Left>
            <Right src={require('../assets/greeceexample.png')} alt=''/>
        </Body>
    </Container>
  )
}

export default BookingSteps

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 25px;
    width: 100%;
    text-align: center;
    margin-bottom: 1vh;
    color: #f0f0f0;
`

const TitleMini = styled.div`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 5vh;
    color: #feb236;
`

const Body = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100vw;
`

const Left = styled.div`
    flex: 1;
    margin-left: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Right = styled.img`
    max-height: 60vh;
    margin-right: 15vw;
`