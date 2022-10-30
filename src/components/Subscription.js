import React from 'react'
import styled from 'styled-components'

function Subscription() {
  return (
    <Container>
        <SubscriptionForm>
            <Title>Subscribe to get information, latest news and other interesting offers about Cobham</Title>
            <Form>
                <Field placeholder='✉️ Your Email'/>
                <Button style={{textDecoration: 'none'}}>Subscribe</Button>
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
    media (max-width: 480px) {
      margin-top: 100px; 
    }
   
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
    @media (max-width: 480px) {
      width: 90%;
      height: 50%;
      justify-content: center;
    }
`

const Decor = styled.img`
    height: 15vh;
    margin-top: 30vh;
    margin-left: 61vw;
    @media (max-width: 480px) {
      margin-bottom: -100px; 
    }
    
`

const TopDecor = styled.img`
    position: absolute;
    height: 6vh;
    right: 18.5vw;
    @media (max-width: 480px) {
      margin-top: -110px; 
      right: 1.5vw;
    }
`

const Title = styled.div`
    font-size: 3vh;
    width: 39vw;
    color: #5E6282;
    font-weight: 600;
    @media (max-width: 480px) {
      padding: 0 16px;
      width: 100%;
      text-align: center;
      padding: 16px;
    }
`

const Form = styled.div`
@media (max-width: 480px) {
  display: grid; 
  width: 70vw;
}
`

const Field = styled.input`
  padding: 2vh 2vw;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 400;
  font-size: 13px;
  width: 20vw;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    text-align: center;
  }
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
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    margin-left: 0;
    margin-top: 10px;
  }
  &:hover{
    color:white;
    
}
`