import React from 'react'
import styled from 'styled-components'

import lemon from '../../img/lemon.png'

import Button from '../Button'
import Container from '../Container'

const StyledHero = styled.div`
  background: black;
  color: #FFF;
  margin-top: -72px;
  padding-bottom: 24px;
  padding-top: 72px;
  position: relative;
`
const StyledHeroInner = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 212px);
  max-height: 840px;
  position: relative;
  z-index: 10;
`
const StyledTitleWrapper = styled.div`
  flex: 3;
`

const StyledHandWrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
`

const StyledTitle = styled.h1`
  font-size: 3.4rem;
  line-height: 1;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 24px 0;
  opacity: 0.8;
  padding: 0;
`

const StyledButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: 48px;
  & > *:nth-child(3) {
    background: transparent !important;
    border: 0 !important;
    color: #FFF !important;
  }
`

const titleText = `The best way to trade mining contracts.`
const subtitleText = `No signups, no KYC, just trading.`

const Hero = () => (
  <StyledHero>
    <Container>
      <StyledHeroInner>
        <StyledTitleWrapper>
          <StyledTitle>{titleText}</StyledTitle>
          <StyledSubtitle>{subtitleText}</StyledSubtitle>
          <StyledButtonWrapper>
            <Button>Trade Now</Button>
            <div style={{ width: 4 }} />
            <Button black={true}>Learn More</Button>
          </StyledButtonWrapper>
        </StyledTitleWrapper>
        <StyledHandWrapper>
          <img src={lemon} width="75%" style={{ filter: `drop-shadow(-12px 15px 128px #ffe50066)` }}/>
        </StyledHandWrapper>
      </StyledHeroInner>
    </Container>
  </StyledHero>
)

export default Hero