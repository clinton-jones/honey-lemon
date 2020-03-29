import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'

import Button from '../Button'
import Container from '../Container'
import Logo from '../Logo'

const StyledHeader = styled.div`
  background: #000;
  position: sticky;
  color: ${props => props.darkContent ? theme.palette.grey[1000] : "#FFF"};
  top: 0;
  z-index: 2;
`
const StyledHeaderInner = styled.div`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;
`

const StyledLink = styled.a`
  color: inherit;
  margin: 0 24px;
  opacity: 0.8;
  text-decoration: none;
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const Header = ({ darkContent = false }) => (
  <StyledHeader darkContent={darkContent}>
    <Container full>
      <StyledHeaderInner>
        <Logo color={darkContent ? "#000" : "#FFF" }/>
        <StyledNav>
          <StyledLink href="#">About</StyledLink>
          <StyledLink href="#">Data</StyledLink>
          <div style={{ width: 24 }} />
          <Button outlined={true}>Open App</Button>
        </StyledNav>
      </StyledHeaderInner>
    </Container>
  </StyledHeader>
)

/*
*/

export default Header