import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`

  width: 1024px
  margin: 0 auto
  border: 2px solid black
  height: 100vh
  padding: 20px 10%
  font-family: sans-serif

  h1 {
    font-size: 10rem
    text-align: center
  
  }

  h2 {
    font-size: 2rem
    text-align: center
    font-weight: 300
    color: red
  }
`

const Header = props => {
  return (
    <HeaderContainer>
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </HeaderContainer>
  )
}

export default Header
