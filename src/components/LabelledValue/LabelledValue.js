import React from 'react'
import styled from 'styled-components'

const StyledLabelledValue = styled.div`
  align-items: baseline;
  display: flex;
  flex: 1;
`
const StyledLabel = styled.span`
  flex: 1;
  font-weight: 500;
`
const StyledValue = styled.h3`
  font-weight: 500;
  margin: 0;
  padding: 0;
  opacity: 0.8;
`

const LabelledValue = ({ label, value }) => (
  <StyledLabelledValue>
    <StyledLabel>{label}</StyledLabel>
    <StyledValue>{value}</StyledValue>
  </StyledLabelledValue>
)

export default LabelledValue