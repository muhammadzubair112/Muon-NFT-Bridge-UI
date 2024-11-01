import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

import { CopyBtn, WrapTokenAddress, WrapperInfo } from '.'
import { useMuonState } from '../../context'
import { Type } from '../common/Text'

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ background }) => background};
  margin: 0 3px 0 5px;
`

const Info = (props) => {
  const { generateBridge, chain } = props
  const { state } = useMuonState()
  return (
    <WrapperInfo
      maxWidth="450px"
      width="100%"
      justifyContent="space-between"
      padding="0 15px"
      alignItems="center"
      marginBottom="3px"
    >
      <WrapTokenAddress width="100%">
        <Flex alignItems="center">
          <Circle background={generateBridge ? '#00e376' : '#DC5151'} />
          <Type.SM
            fontSize="12px"
            fontFamily="FH Oscar"
            fontSizeXXS="9px"
            color={generateBridge ? 'rgba(0, 227, 118, 1)' : '#DC5151'}
          >
            {`${state.bridge.token.name} ${!generateBridge ? 'is not yet available on' : 'is available on'
              } ${chain.name}`}
          </Type.SM>
        </Flex>
        {!generateBridge && <CopyBtn color={!generateBridge && "#000000"}>Info</CopyBtn>}
      </WrapTokenAddress>
    </WrapperInfo>
  )
}

export default Info
