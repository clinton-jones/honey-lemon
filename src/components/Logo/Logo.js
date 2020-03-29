import React from 'react'
import styled from 'styled-components'

import logo from '../../logo.png'

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 700;
`

const Logo = ({ color = "#FFF" }) => (
  <StyledLogo color={color}>
    <img src={logo} height={32} />
    <div style={{ width: 8 }} />
    <span>Honey Lemon</span>
  </StyledLogo>
)

export default Logo