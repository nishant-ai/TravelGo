import React from 'react'
import styled from 'styled-components'
import PackageCard from './PackageCard'
import PackageSelect from './PackageSelect'

function Packages() {
  return (
    <Container>

        <Title>Best Packages For You</Title>
        <Package>
            <PackageSelect title='Hot Deals' active={true} />
            <PackageSelect title='Backpack' active={false} />
            <PackageSelect title ='South Asia'active={false} />
            <PackageSelect title='United States' active={false} />
            <PackageSelect title='Russia' active={false} />
            <PackageSelect title='More' active={false} />
        </Package>
        <PackageCards>
            <PackageCard
                location='Indonesia'
                cost='$500 / Person'
                tagline='Explore the Beauty of the island for 3 days and 2 nights with our travel agency'
                stay='3 Days, 2 Nights'
                image='indonesia2.png'
            />
            <PackageCard
                location='Japan'
                cost='$800 / Person'
                tagline='Enjoy the Shrimes and blossoms here in this beautiful country'
                stay='3 Days, 2 Nights'
                image='japan.png'
            />
            <PackageCard
                location='Mountains'
                cost='$600 / Person'
                tagline='Explore the majestic mountains and landscapes day and nights'
                stay='3 Days, 2 Nights'
                image='mountains.png'
            />
        </PackageCards>
        <Discover href='/'>Discover More</Discover>

    </Container>
  )
}

export default Packages

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #ECF1F0;
    margin-top: 5vh;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 4vh;
    width: 100%;
    text-align: center;
`

const Package = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 7vw;
`

const PackageCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Discover = styled.a`
  margin-top: 4vh;
  background-color: #00A651;
  padding: 15px 20px;
  border-radius: 7px;
  font-size: 2.5vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  margin-bottom: 5vh;
`