import React from 'react';
import styled from 'styled-components';
import { FaDatabase, FaExchangeAlt, FaCogs, FaPython, FaGo, FaAtom } from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.text};
`;

const features = [
  {
    icon: <FaDatabase />,
    title: 'Sharded Architecture',
    description: 'Utilizes multiple shards for enhanced scalability and throughput.',
  },
  {
    icon: <FaExchangeAlt />,
    title: 'Cross-Shard Transactions',
    description: 'Seamless transactions between different shards for improved efficiency.',
  },
  {
    icon: <FaCogs />,
    title: 'Dynamic Shard Allocation',
    description: 'Automatically adjusts the number of shards based on network load.',
  },
  {
    icon: <FaPython />,
    title: 'Core Blockchain in Python',
    description: 'High-performance and secure blockchain infrastructure with PoS.',
  },
  {
    icon: <FaGo />,
    title: 'Node Implementation in Go',
    description: 'Efficient networking and IPFS integration.',
  },
  {
    icon: <FaAtom />,
    title: 'Quantum Computing Simulation',
    description: 'Future-proof blockchain with Qiskit integration.',
  },
];

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <Title>Key Features</Title>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;
