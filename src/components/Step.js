import React from 'react'
import styled from 'styled-components'

function Step({image, title, text}) {
  return (
    <Container>
        <Left src={require(`../assets/${image}`)} alt='' />
        <Right>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Right>
    </Container>
  )
}

export default Step

const Container = styled.div`
    display: flex;
    font-size: 16px;
    margin: 2.5vh;
`

const Left = styled.img`
    height: 9vh;
    margin-right: 2vw;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const Title = styled.div`
    margin-bottom: 2vh;
    font-weight: 500;
    font-size:18px;
    color: #feb236;
`

const Text = styled.div`
    color: #f0f0f0;
`