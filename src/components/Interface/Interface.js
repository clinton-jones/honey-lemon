import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'

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
  background: ${theme.palette.grey[50]};
  height: 64px;
`
const StyledBrowserBody = styled.div`
  height: 400px;
`
const StyledSearchBar = styled.div`
  height: 44px;
  background-color: ${theme.palette.grey[100]};
  border-radius: 4px;
`

const Interface = () => (
  <StyledInterfaceWrapper>
    <Container>
      <StyledContentWrapper>
        <StyledUIWrapper>
          <StyledBrowserWindow>
            <StyledBrowserTopBar>

            </StyledBrowserTopBar>
            <StyledBrowserBody>

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
        </StyledDescription>

      </StyledContentWrapper>
    </Container>
  </StyledInterfaceWrapper>
)

export default Interface