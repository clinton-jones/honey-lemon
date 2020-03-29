import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'

const StyledButton = styled.button`
  align-items: center;
  background-color: ${props => (props.outlined || props.black) ? '#000' : theme.palette.primary.main};
  border: 2px solid ${props => props.black ?  '#000' : theme.palette.primary.main};
  border-radius: ${theme.shape.borderRadius}px;
  box-sizing: border-box;
  color: ${props => (props.outlined || props.black) ? '#FFF' : '#000'};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 48px;
  padding: 0 24px;
  transition: background-color .2s, border-color .2s;
  &:hover {
    background-color: ${props => props.outlined ? theme.palette.primary.main : theme.palette.primary.light};
    color: ${props => props.outlined ? '#000' : '#000'};
  }
`

const Button = ({ black, children, outlined = false }) => {

  return (
    <StyledButton black={black} outlined={outlined}>
      {children}
    </StyledButton>
  )
}

export default Button