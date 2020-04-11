import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import theme from '../../theme'

import Button from '../Button'
import LabelledValue from '../LabelledValue'
import Logo from '../Logo'

import bitcoin from '../../img/bitcoin.svg'
import ethereum from '../../img/ethereum.svg'

import DoneIcon from '@material-ui/icons/Done'


import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const StyledDashboard = styled.div`
  background: black;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  transition: transform .4s ease-out;
  transform: translateY(${props => props.step === 'buy' ? '-100%' : 0});
`


const Dashboard = () => {
  const [step, setStep] = useState('splash')
  const [looper, setLooper] = useState(true)
  const [endLooper, setEndLooper] = useState(false)
  const handleBuyClick = () => {
    setStep('buy')
  }

  return (
    <div style={{
      background: theme.palette.primary.main,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
    }}>
      <div className="device device-iphone-x">
        <div className="device-frame">
          <div style={{
            position: 'relative',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 40,
          }}>
            <StyledDashboard step={step}>
              <Splash onBuyClick={handleBuyClick} />
              <Buy active={step === 'buy'} onFinish={() => setEndLooper(true)} />
            </StyledDashboard>
            {looper && (
              <Looper onDismiss={() => setLooper(false)} />
            )}
            {endLooper && (
              <Looper ending={true} onDismiss={() => setLooper(false)} />
            )}
          </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </div>
  )
}

const StyledSplashTitle = styled.h1`
  font-size: 2.6rem;
  margin: 64px 0 48px;
  padding: 24px;
  text-align: left
`

const StyledSplash = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: #FFF;
  display: flex;
  height: 100%;
  padding: 64px 0;
  flex-direction: column;
  justify-content: space-between;
`

const Splash = ({ onBuyClick }) => {
  return (
    <StyledSplash>
      <Logo />
      <StyledSplashTitle>
        Would you like to buy or sell mining contracts?
      </StyledSplashTitle>
      <div style={{ width: 'calc(100% - 48px)'}}>
        <Button onClick={onBuyClick}>
          Buy Contracts
          <KeyboardArrowRightIcon />
        </Button>
        <div style={{ height: 24 }} />
        <Button black>Sell Contracts</Button>
      </div>
    </StyledSplash>
  )
}

const StyledLooper = styled.div`
  background: #000;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 100;
  transition: opacity 1s;
  opacity: ${props => props.finished || props.notStarted ? 0 : 1};
`

const Looper = ({ onDismiss, ending }) => {
  const [notStarted, setNotStarted] = useState(ending)
  const [active, setActive] = useState()
  const [finished, setFinished] = useState()
  useEffect(() => {
    setNotStarted(false)
    if (!ending) {
      setTimeout(() => {
        setActive(true)
      }, 1000)
      setTimeout(() => {
        setFinished(true)
      }, 2000)
      setTimeout(() => {
        onDismiss()
      }, 3000)
    }
  }, [])
  return (
    <StyledLooper notStarted={notStarted} finished={finished}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        transform: `translateY(${active ? '64px' : 'calc(406px - 48px)'})`,
        transition: 'transform 1s',
      }}>
        <div style={{
          position: 'relative',
          transform: `scale(${active ? 1 : 2})`,
          transition: 'transform 1s',
        }}>
        <Logo />
        </div>
      </div>
    </StyledLooper>
  )
}

const StyledBuy = styled.div`
  background: ${theme.palette.primary.main};
  box-sizing: border-box;
  color: #000;
  height: 100%;
  min-height: 0;
  padding: 32px 0;
`

const StyledCard = styled.div`
  align-items: center;
  display: flex;
  background: #FFF;
  border-radius: 24px;
  color: #000;
  height: ${props => props.active ? 'calc(100% - 30px)' : 'calc(50% - 48px)'};
  flex-direction: column;
  margin: 12px;
  padding: 12px;
  overflow: hidden;
  transition: height .3s;
`

const StyledCoin = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  padding: 12px 0;
`
const StyledCoinIcon = styled.div`
  margin-left: -24px;
  margin-right: 12px;
  height: 36px;
  & > * {
    height: 100%;
  }
`

const StyledCardAction = styled.div`
  align-items: center;
  background: black;
  border-radius: 24px;
  color: #FFF;
  font-size: 16px;
  display: flex;
  font-weight: 700;
  padding: 0 24px;
  height: 48px;
  justify-content: space-between;
  width: calc(100%);
  &:active {
    opacity: 0.5;
  }
`

const StyledCardContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  margin: 0;
  width: 100%;
`

const StyledRow = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  display: flex;
  height: 64px;
  &:last-of-type {
    border-bottom: 0;
  }
`

const Buy = ({ active, onFinish }) => {
  const [activeCard, setActiveCard] = useState(0)
  const [modal, setModal] = useState(false)
  return (
    <>
    <StyledBuy>
      <div style={{
        height: '100%',
        opacity: active ? 1 : 0,
        transition: 'opacity 1s',
      }}>
      <StyledCard active={activeCard === 1}>
        <StyledCoin>
          <StyledCoinIcon>
            <img src={bitcoin} />
          </StyledCoinIcon>
          Bitcoin
        </StyledCoin>
        <StyledCardContent>
          <StyledRow>
            <LabelledValue label="Unit Price" value="$0.2513 / TH / Day" />
          </StyledRow>
          <StyledRow>
            <LabelledValue label="Duration" value="28 days" />
          </StyledRow>
          {!!activeCard && (
            <div style={{
              marginTop: 64,
              overflow: 'hidden'
            }}>
              <div style={{
                fontWeight: 500,
                marginBottom: 8,
                opacity: 0.7,
              }}>Amount</div>
              <div style={{
                alignItems: 'center',
                backgroundColor: theme.palette.grey[50],
                borderRadius: 4,
                display: 'flex',
                fontSize: 24,
                height: 72,
                justifyContent: 'space-between',
                paddingLeft: 24,
                paddingRight: 24,
              }}>
                <span>$</span>
                <span>100</span>
              </div>
              <div style={{
                marginTop: 96,
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '3rem',
                  lineHeight: 1,
                }}>
                  0.016 BTC
                </div>
                <div style={{
                  fontWeight: 500,
                  marginBottom: 8,
                  opacity: 0.7,
                }}>Estimated return</div>
              </div>
            </div>
          )}
        </StyledCardContent>
        <StyledCardAction onClick={() => {
          if (!activeCard) {
            setActiveCard(1)
          } else {
            setModal(true)
          }
        }}>
          {activeCard === 1 ? 'Confirm Purchase' : 'Select'}
          <KeyboardArrowRightIcon />
        </StyledCardAction>
      </StyledCard>

      <div style={{
        alignItems: 'center',
        display: 'flex',
        fontWeight: 700,
        justifyContent: 'center',
        padding: 12,
      }}>
        <div style={{ flex: 1, height: 1, backgroundColor: '#000', opacity: 0.25 }} />
        <span style={{
          backgroundColor: theme.palette.primary.main,
          paddingLeft: 24,
          paddingRight: 24,
        }}>
          OR
        </span>
        <div style={{ flex: 1, height: 1, backgroundColor: '#000', opacity: 0.25 }} />
      </div>
      <StyledCard active={active === 2}>
      <StyledCoin>
          <StyledCoinIcon>
            <img src={ethereum} />
          </StyledCoinIcon>
          Ethereum
        </StyledCoin>
        <StyledCardContent>
          <StyledRow>
            <LabelledValue label="Unit Price" value="$0.1145 / MH / Day" />
          </StyledRow>
          <StyledRow>
            <LabelledValue label="Duration" value="28 days" />
          </StyledRow>
        </StyledCardContent>
        <StyledCardAction>
          Select
          <KeyboardArrowRightIcon />
        </StyledCardAction>
      </StyledCard>
      </div>
      </StyledBuy>
      {!!modal && <Modal onFinish={onFinish} />}
    </>
  )
}

const modalKeyframes = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

const StyledModal = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  backdrop-filter: blur(50px);
  height: 100%;
  right: 0;
  top: 100%;
  left: 0;
  animation: ${modalKeyframes} .3s;
`

const StyledModalBg = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: rgba(0,0,0,0.5);
`

const modalContentKeyframes = keyframes`
  from {
    transform: translateY(128px);
  }
  to {
    transform: translateY(0px);
  }
`
const StyledModalContent = styled.div`
  margin: 0 24px;
  background: #FFF;
  border-radius: 24px;
  display:flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  animation: ${modalContentKeyframes} .3s ease-out forwards;
` 

const StyledDoneIcon = styled.div`
  height: 96px;
  width: 96px;
  background: black;
  border-radius: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px 0 24px;
  & > * {
    color: ${theme.palette.primary.main};
    font-size: 48px !important;
  }
`

const Modal = ({ onFinish }) => {
  return (
    <StyledModal>
      <StyledModalBg />
      <StyledModalContent>
        <StyledDoneIcon>
          <DoneIcon />
        </StyledDoneIcon>
        <div style={{
          fontWeight: 700,
        }}>
          Purchase Complete!
        </div>
        <div style={{
          fontSize: 14,
          width: 'calc(100% - 48px)'
        }}>
        <StyledRow>
            <LabelledValue label="Unit Price" value="$0.2513 /T / Day" />
          </StyledRow>
          <StyledRow>
            <LabelledValue label="Total" value="$100" />
          </StyledRow>
        </div>
        <div style={{ width: 'calc(100% - 24px)', marginBottom: 12  }}>
          <StyledCardAction onClick={onFinish}>
            Finish
            <DoneIcon />
          </StyledCardAction>
        </div>
      </StyledModalContent>
    </StyledModal>
  )
}

export default Dashboard