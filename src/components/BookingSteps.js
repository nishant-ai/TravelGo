import React from 'react'
import styled from 'styled-components'
import Step from './Step'

function BookingSteps() {
  return (
    <Container style={{background: '#333'}}>
        <Title>Plan your dream trip in 3 Easy Steps</Title>
        <TitleMini>Let our AI-powered search engine do the job.</TitleMini>
        <Body>
            <Left>
                <Step 
                title='Choose your ideal holiday features'
                text='Select your preferred type of activities, budget, travel time and weather.'
                image='step1.png'
                />
                <Step 
                title='Let our search engine do the work'
                text='Our generative AI-powered search engine will provide a list of suggested destinations and activities that suit your preference.'
                image='step2.png'
                />
                <Step 
                title='Start planning and packing'
                text='Select your favourite destinations and activites and head on that dream trip!'
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
    @media (max-width: 480px) {
        display: grid;
        width: 100%;
        height: 100%;
        padding: 20px 16px;
        }
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
    @media (max-width: 480px) {
        margin: 0;
        text-align: center;
        }
`

const Body = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        }
`

const Left = styled.div`
    flex: 1;
    margin-left: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 480px) {
        margin: 0;
    }
`

const Right = styled.img`
    max-height: 60vh;
    margin-right: 15vw;
    @media (max-width: 480px) {
        margin: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }
`