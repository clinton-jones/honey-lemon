import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'

import Container from '../Container'
import LabelledValue from '../LabelledValue'
import Overview from '../Overview'
import OverviewSection from '../OverviewSection'

const StyledDashboard = styled.div`
`

const StyledDashboardHeader = styled.div`
  background: radial-gradient(at top,#005669,#000546,#00010f);
  color: #FFF;
  margin-top: -96px;
  padding: 160px 0 138px;
  position: relative;
  text-align: center;
`

const Dashboard = () => {
  return (
    <StyledDashboard>
      <StyledDashboardHeader>
        <Container>
          <Overview>
            <OverviewSection>
              <LabelledValue label="Your Balance" value="$12,550.67" />
            </OverviewSection>
            <OverviewSection>
              <LabelledValue label="Pool Balance" value="$332,091.54" />
            </OverviewSection>
            <OverviewSection>
              <LabelledValue label="Pool APR" value="3.2%" />
            </OverviewSection>
          </Overview>
        </Container>
      </StyledDashboardHeader>
    </StyledDashboard>
  )
}

export default Dashboard