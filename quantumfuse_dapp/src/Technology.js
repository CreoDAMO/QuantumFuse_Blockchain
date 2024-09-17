import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaFileContract } from 'react-icons/fa';

const TechnologyContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TechCard = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const TechTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const TechDescription = styled.p`
  color: ${props => props.theme.text};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechItem = styled.span`
  background-color: ${props => props.theme.primary};
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const Technology = () => {
  return (
    <TechnologyContainer id="technology">
      <Title>Technology</Title>
      <TechGrid>
        <TechCard>
          <TechIcon><FaShieldAlt /></TechIcon>
          <TechTitle>Consensus Mechanism</TechTitle>
          <TechDescription>
            Implements both Proof of Stake (PoS) and Proof of Authority (PoA) for flexible consensus.
          </TechDescription>
        </TechCard>
        <TechCard>
          <TechIcon><FaFileContract /></TechIcon>
          <TechTitle>Smart Contracts</TechTitle>
          <TechDescription>
            Supports upgradeable smart contracts with proxy patterns for enhanced flexibility.
          </TechDescription>
        </TechCard>
      </TechGrid>
      <TechStack>
        <TechItem>Python</TechItem>
        <TechItem>Go</TechItem>
        <TechItem>Qiskit</TechItem>
        <TechItem>IPFS</TechItem>
        <TechItem>AI</TechItem>
        <TechItem>Blockchain</TechItem>
      </TechStack>
    </TechnologyContainer>
  );
};

export default Technology;
