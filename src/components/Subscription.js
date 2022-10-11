import React from 'react'
import styled from 'styled-components'

function Subscription() {
  return (
    <Container>
        <SubscriptionForm>
            <Title>Subscribe to get information, latest news and other interesting offers about Cobham</Title>
            <Form>
                <Field placeholder='✉️ Your Email'/>
                <Button>Subscribe</Button>
            </Form>
        </SubscriptionForm>
        <TopDecor src={require('../assets/send.png')} alt='' />
        <Decor src={require('../assets/bottomrightdesign.png')} alt='' />
    </Container>
  )
}

export default Subscription

const Container = styled.div`
    height: 60vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
`

const SubscriptionForm = styled.div`
    height: 35vh;
    width: 60vw;
    background: #9FFFECA0;
    border-radius: 129px 20px 20px 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Decor = styled.img`
    height: 15vh;
    margin-top: 30vh;
    margin-left: 61vw;
`

const TopDecor = styled.img`
    position: absolute;
    height: 6vh;
    right: 18.5vw;
`

const Title = styled.div`
    font-size: 3vh;
    width: 39vw;
    color: #5E6282;
    font-weight: 600;
`

const Form = styled.div`
`

const Field = styled.input`
  padding: 2vh 2vw;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 400;
  font-size: 13px;
  width: 20vw;
`

const Button = styled.a`
  margin-left: 3vw;
  background-color: #00A651;
  padding: 1.5vh 2vw;
  border-radius: 7px;
  font-size: 2vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
`