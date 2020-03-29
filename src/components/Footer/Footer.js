import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Container from '../Container'
import Logo from '../Logo'

const StyledFooterWrapper = styled.div`
  background-color: #000;
  color: #FFF;
  padding: 128px 0;
`
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledSocialWrapper = styled.div`
    display: flex;
    @media (max-width: 512px) {
        margin-top: 48px;
    }
`

const StyledSocialIcon = styled.a`
  align-items: center;
  display: flex;
  font-size: 24px;
  height: 44px;
  justify-content: center;
  width: 44px;
  color: #FFF;
  cursor: pointer;
  margin: 0 6px;
  opacity: 0.8;
  text-decoration: none;
  &:hover {
      opacity: 1;
  }
`

const Footer = () => (
  <StyledFooterWrapper>
    <Container>
      <StyledFooter>
        <div>
          <Logo />
          <span style={{
            display: 'block',
            fontSize: 14,
            marginTop: 24,
            opacity: 0.8,
          }}>Copyright 2020 Honey Lemon.</span>
        </div>
        <StyledSocialWrapper>
            <StyledSocialIcon color="#FFF" href="/">
              <FontAwesomeIcon icon={faGithubAlt} />
            </StyledSocialIcon>
            <StyledSocialIcon color="#FFF" href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </StyledSocialIcon>
            <StyledSocialIcon href="/">
              <FontAwesomeIcon color="#FFF" icon={faTelegramPlane} />
            </StyledSocialIcon>
          </StyledSocialWrapper>
      </StyledFooter>
    </Container>
  </StyledFooterWrapper>
)

export default Footer