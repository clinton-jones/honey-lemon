import React from 'react'
import styled from 'styled-components'

const StyledLabelledValue = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.span`
  font-size: 1em;
  opacity: 0.8;
`
const StyledValue = styled.h3`
  font-size: 2em;
  margin: 0;
  padding: 0;
`

const LabelledValue = ({ label, value }) => (
  <StyledLabelledValue>
    <StyledValue>{value}</StyledValue>
    <StyledLabel>{label}</StyledLabel>
  </StyledLabelledValue>
)

export default LabelledValue