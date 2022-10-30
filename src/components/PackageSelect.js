import React from 'react'
import styled from 'styled-components'

function PackageSelect({title, active}) {
  if (active)
  return (
    <ContainerActive>{title}</ContainerActive>
  )
  else return (
    <ContainerInactive>{title}</ContainerInactive>
  )
}

export default PackageSelect

const ContainerActive  = styled.a`
  background-color: #00A651;
  padding: 1.5vh 2vw;
  border-radius: 7px;
  font-size: 2vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  // comeback here is this right??
  &:hover 
  {
    color: white;
  }
`

const ContainerInactive  = styled.a`
  background-color: #666666;
  padding: 1.5vh 2vw;
  border-radius: 7px;
  font-size: 2vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  // comeback here is this right??
  &:hover
  {
    color: white;
  }
`