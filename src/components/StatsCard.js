import React from 'react'
import styled from 'styled-components'

function StatsCard(props) {
  return (
    <Container>
        <Image src={require(`../assets/${props.image}`)} alt='' />
        <Count>{props.count}</Count>
        <Title>{props.title}</Title>
    </Container>
  )
}

export default StatsCard

const Container = styled.div`
    width: 30vh;
    height: 30vh;
    background: #FFFFFF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: 3vw 1vh;
`

const Image = styled.img`
  margin-bottom: 2.5vh;
`

const Count = styled.div`
  font-weight: 700;
  font-size: 3vh;
`

const Title = styled.p`
`