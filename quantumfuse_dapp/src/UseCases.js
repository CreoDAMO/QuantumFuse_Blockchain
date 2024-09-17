import React from 'react';
import styled from 'styled-components';
import { FaIdCard, FaStore, FaPalette } from 'react-icons/fa';

const UseCasesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
`;

const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const UseCaseCard = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const UseCaseIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const UseCaseTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const UseCaseDescription = styled.p`
  color: ${props => props.theme.text};
`;

const useCases = [
  {
    icon: <FaIdCard />,
    title: 'Decentralized Identity Management',
    description: 'Implement secure, privacy-preserving digital identities on the QuantumFuse blockchain.',
  },
  {
    icon: <FaStore />,
    title: 'Sustainable E-commerce',
    description: 'Leverage blockchain for a decentralized marketplace with trustless transactions and green logistics.',
  },
  {
    icon: <FaPalette />,
    title: 'Smart Contracts & NFTs',
    description: 'Manage standard and fractional NFTs with live metadata updates and secure smart contracts.',
  },
];

const UseCases = () => {
  return (
    <UseCasesContainer>
      <Title>Use Cases</Title>
      <UseCaseGrid>
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index}>
            <UseCaseIcon>{useCase.icon}</UseCaseIcon>
            <UseCaseTitle>{useCase.title}</UseCaseTitle>
            <UseCaseDescription>{useCase.description}</UseCaseDescription>
          </UseCaseCard>
        ))}
      </UseCaseGrid>
    </UseCasesContainer>
  );
};

export default UseCases;
