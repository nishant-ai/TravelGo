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
        active: true
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
    <Container>
        <ServiceTitle>Our Service</ServiceTitle>
        <ServiceCardContainer>
            {
                cards.map((card) => (
                    <ServiceCard title={card.title} text={card.text} image={card.image} active={card.active} />
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
  flex-direction: column;
  height: 60vh;
  padding-top: 1vh;
  cursor: pointer;
`

const ServiceTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 7vh;
  font-weight: 600;
  font-size: 3vh;
`

const ServiceCardContainer = styled.div`
    margin-top: 7.5vh;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`