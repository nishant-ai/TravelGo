import React from 'react'
import styled from 'styled-components'
function Cover() {
  return (
    <Container id='home'>
      <CoverImg src={require('../assets/cover.png')} alt="cover" />
      <CoverBody>
        <CoverTitle>Your Imagination Is</CoverTitle>
        <CoverTitle>Your Only Limit</CoverTitle>
        <CoverTextu>We always try to make our customer happy. We provide all kind of facilities.</CoverTextu>
        <CoverText>Your satisfaction is our main priority</CoverText>
        <CoverButton href='/'>Discover More</CoverButton>
      </CoverBody>
      <BottomFade />
    </Container>
  )
}
 
export default Cover

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`

const CoverImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

const BottomFade = styled.div`
  position: absolute;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0) 4%, rgba(255,255,255,0.5032606792717087) 77%, rgba(255,255,255,1) 89%);
  top: 91vh;
  width: 100vw;
  height: 10vh;
  z-index: 1;
`

const CoverBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  

`
const CoverTitle = styled.div`
  color: white;
  font-weight: 800;
  font-size: 7vh;
  text-align: center;
  line-height: 65px;
`
const CoverText = styled.div`
  color: white;
  font-weight: 600;
  line-height: 35px;
`

const CoverTextu = styled.div` // cover text upper
  color: white;
  padding-top: 5vh;
  @media (max-width: 480px) {
    padding-top: 2vh;
  }
`

const CoverButton = styled.a`

cursor:pointer;
clear:both; 
border-radius: 3px;
padding:20px 60px; 
margin-top:4vh;
display:inline-block;
    color:white;
    transition:all 0.8s, color 0.3s 0.3s;
     cursor:pointer;
      background:#04A551;
       color:white;
       :hover
       { box-shadow:-300px 0 0 0 rgb(120,178,167) inset;
      }
      @media (max-width: 480px) {
        padding: 10px 60px;
        margin-top: 3vh;
      }
      
`

