import React from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'

const cards = [
    {
        title: "Ticket Booking",
        text: "We Book All Kinds of national or international tickets for your destination.",
        image: "ticket.png",
        active: false
    },
    {
        title: "Hotel Booking",
        text: "You can easily book your according to your budget hotel by our website.",
        image: "hotel.png",
        active: false
    },
    {
        title: "Tour Plan",
        text: "We provide you the best plan within a short time explore more.",
        image: "tour.png",
        active: false
    }
]

function Service() {
  return (
    <Container id='about-us'>
        <ServiceTitle>Our Services</ServiceTitle>
        <ServiceCardContainer>
            {
                cards.map((card) => (
                    <ServiceCard title={card.title} text={card.text} image={card.image} active={card.active} key={card.id} />
                ))
            }
        </ServiceCardContainer>
    </Container>
  )
}

export default Service

const Container = styled.div`
  width: 100vw;
  display: flex;
  background: #333;
  flex-direction: column;
  height: 60vh;
  padding-top: 1vh;
  cursor: pointer;
  align-items: center;
  @media (max-width: 480px) {
    height: 100%;
    align-content: center;
    justify-content: center;
    // overflow: hidden;
}
`

const ServiceTitle = styled.div`
  width: 100%;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 7vh;
  font-weight: 600;
  font-size: 30px;
  color: rgb(240, 240, 240);
`

const ServiceCardContainer = styled.div`
    margin-top: 7.5vh;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    @media (max-width: 480px) {
        display: grid;
        padding: 0 32px;
      }
`
