import React, { useState } from 'react';
import styled from 'styled-components';

const TokenomicsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
`;

const TokenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TokenCard = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TokenTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const TokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const TokenLabel = styled.span`
  color: ${props => props.theme.text};
`;

const TokenValue = styled.span`
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

const Tokenomics = () => {
  const [qfcReward, setQfcReward] = useState(5);
  const [qetReward, setQetReward] = useState(2);
  const [qfcFee, setQfcFee] = useState(0.1);
  const [qetFee, setQetFee] = useState(0.05);

  return (
    <TokenomicsContainer id="tokenomics">
      <Title>Tokenomics</Title>
      <TokenGrid>
        <TokenCard>
          <TokenTitle>QFC (QuantumFuse Coin)</TokenTitle>
          <TokenInfo>
            <TokenLabel>Mining Reward:</TokenLabel>
            <TokenValue>{qfcReward} QFC</TokenValue>
          </TokenInfo>
          <TokenInfo>
            <TokenLabel>Transaction Fee:</TokenLabel>
            <TokenValue>{qfcFee} QFC</TokenValue>
          </TokenInfo>
        </TokenCard>
        <TokenCard>
          <TokenTitle>QET (QuantumFuse Energy Token)</TokenTitle>
          <TokenInfo>
            <TokenLabel>Mining Reward:</TokenLabel>
            <TokenValue>{qetReward} QET</TokenValue>
          </TokenInfo>
          <TokenInfo>
            <TokenLabel>Transaction Fee:</TokenLabel>
            <TokenValue>{qetFee} QET</TokenValue>
          </TokenInfo>
        </TokenCard>
      </TokenGrid>
    </TokenomicsContainer>
  );
};

export default Tokenomics;
