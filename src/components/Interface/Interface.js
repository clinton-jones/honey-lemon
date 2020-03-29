import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'

import Button from '../Button'
import Container from '../Container'

const StyledInterfaceWrapper = styled.div`
  align-items: center;
  background: ${theme.palette.primary.main};
  display: flex;
  min-height: 50vh;
  padding: 96px 0;
`
const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
const StyledTitle = styled.h2`
  font-size: 3rem;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
  &:after {
    background-color: #FFF;
    content: "";
    position: absolute;
    bottom: 4px; right: 0; left: 0;
    height: 8px;
    opacity: 0.8;
  }
  & > span {
    position: relative;
    z-index: 2;
  }
`

const StyledSpacer = styled.div`
  height: 64px;
  width: 64px;
`

const StyledContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const StyledDescription = styled.div`
  flex: 1;
`

const StyledUIWrapper = styled.div`
  flex: 1;
`

const StyledBrowserWindow = styled.div`
  background: #FFF;
  border-radius: 12px;
  overflow: hidden;
`
const StyledBrowserTopBar = styled.div`
  align-items: center;
  background: ${theme.palette.grey[50]};
  display: flex;
  height: 64px;
`
const StyledBrowserBody = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 400px;
`
const StyledSearchBar = styled.div`
  align-items: center;
  display: flex;
  padding: 0 24px;
  font-size: 12px;
  height: 32px;
  background-color: ${theme.palette.grey[100]};
  border-radius: 12px;
  color: ${theme.palette.grey[600]};
  margin: 0 24px;
  flex: 1;
`

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

const Interface = () => (
  <StyledInterfaceWrapper>
    <Container>
      <StyledContentWrapper>
        <StyledUIWrapper>
          <StyledBrowserWindow>
            <StyledBrowserTopBar>
              <StyledSearchBar>
                https://honeylemon.markets
              </StyledSearchBar>
            </StyledBrowserTopBar>
            <StyledBrowserBody>
              {`<sexy ass UI screenshot here>`}
            </StyledBrowserBody>
          </StyledBrowserWindow>
        </StyledUIWrapper>

        <StyledSpacer />

        <StyledDescription>
          <StyledTitleWrapper>
            <StyledTitle>
              <span>Start trading now!</span>
            </StyledTitle>
          </StyledTitleWrapper>
          <div style={{
            margin: '24px 0',
          }}>
            {loremIpsum}
          </div>
          <Button black={true}>Launch App</Button>
        </StyledDescription>

      </StyledContentWrapper>
    </Container>
  </StyledInterfaceWrapper>
)

export default Interface