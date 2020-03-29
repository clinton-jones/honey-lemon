import React from 'react'
import styled from 'styled-components'

import logo from '../../logo.png'

import Button from '../Button'
import Container from '../Container'

const StyledHero = styled.div`
  background: #000;
  color: #FFF;
  margin-top: -72px;
`
const StyledHeroInner = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 96px);
  max-height: 1000px;
  justify-content: center;
  position: relative;
  z-index: 10;
`

/*
  background: linear-gradient(36deg, rgba(246,248,239,1) 0%, rgba(229,230,250,1) 5%, rgba(183,246,252,1) 13%, rgba(246,248,239,1) 19%, rgba(210,218,251,1) 29%, rgba(173,248,236,1) 37%, rgba(214,243,218,1) 46%, rgba(249,196,255,1) 54%, rgba(196,188,255,1) 65%, rgba(196,188,255,1) 78%, rgba(249,196,255,1) 87%, rgba(228,229,242,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
*/
const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 32px 0 0;
  padding: 0;
`
const StyledSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  opacity: 0.8;
  margin: 0;
  padding: 0;
`

const Hero = () => (
  <StyledHero>
    <Container>
      <StyledHeroInner>
        <StyledMain>
          <img src={logo} height={128} style={{ opacity: 1 }} />
          <StyledTitle>The best way to invest in cloud mining.</StyledTitle>
          <StyledSubtitle>
            No signups, no KYC, just contracts.
          </StyledSubtitle>
          <div style={{ height: 64 }} />
          <div style={{ display: 'flex' }}>
            <Button>Trade Contracts</Button>
            <div style={{ width: 12 }} />
            <Button black={true}>Learn More</Button>
          </div>
        </StyledMain>
      </StyledHeroInner>
    </Container>
  </StyledHero>
)

export default Hero