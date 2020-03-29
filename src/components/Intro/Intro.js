import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'

import calendarSvg from '../../img/calendar.svg'
import contractsSvg from '../../img/contracts.svg'
import investmentDataSvg from '../../img/investment-data.svg'

import Container from '../Container'

const StyledIntroWrapper = styled.div`
  padding: 96px 0;
`
const StyledIntro = styled.div`

`
const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const StyledTitle = styled.h2`
  font-size: 3rem;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
  &:after {
    background-color: ${theme.palette.primary.main};
    content: "";
    position: absolute;
    bottom: 4px; right: 0; left: 0;
    height: 8px;
  }
  & > span {
    position: relative;
    z-index: 2;
  }
`

const StyledSection = styled.div`
  display: flex;
  margin: 128px 0;
`

const StyledSectionGraphic = styled.div`
  flex: 1;
`
const StyledSectionDescription = styled.div`
  flex: 1;
`
const StyledSectionDescriptionTitle = styled.h3`
  font-size: 2rem;
  margin: 24px 0;
  padding: 0;
`
const StyledSectiondescriptionText = styled.span`
  font-size: 1.25rem;
  opacity: 0.8;
`
const StyledSectionSpacer = styled.div`
  height: 64px;
  width: 64px;
`

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

const Intro = () => (
  <StyledIntroWrapper>
    <Container>
      <StyledIntro>

        <StyledTitleWrapper>
          <StyledTitle>
            <span>How it works</span>
          </StyledTitle>
        </StyledTitleWrapper>

        <StyledSection>
          <StyledSectionGraphic>
            <img src={contractsSvg} width="100%" />
          </StyledSectionGraphic>
          <StyledSectionSpacer />
          <StyledSectionDescription>
            <StyledSectionDescriptionTitle>First do this</StyledSectionDescriptionTitle>
            <StyledSectiondescriptionText>{loremIpsum}</StyledSectiondescriptionText>
          </StyledSectionDescription>
        </StyledSection>

        <StyledSection>
          <StyledSectionDescription>
            <StyledSectionDescriptionTitle>Then do this</StyledSectionDescriptionTitle>
            <StyledSectiondescriptionText>{loremIpsum}</StyledSectiondescriptionText>
          </StyledSectionDescription>
          <StyledSectionSpacer />
          <StyledSectionGraphic>
            <img src={investmentDataSvg} width="100%" />
          </StyledSectionGraphic>
        </StyledSection>

        <StyledSection>
          <StyledSectionGraphic>
            <img src={calendarSvg} width="100%" />
          </StyledSectionGraphic>
          <StyledSectionSpacer />
          <StyledSectionDescription>
            <StyledSectionDescriptionTitle>Finally do this</StyledSectionDescriptionTitle>
            <StyledSectiondescriptionText>{loremIpsum}</StyledSectiondescriptionText>
          </StyledSectionDescription>
        </StyledSection>

      </StyledIntro>
    </Container>
  </StyledIntroWrapper>
)

export default Intro