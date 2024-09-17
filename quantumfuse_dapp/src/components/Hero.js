import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const HeroContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.primary};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

const Hero = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <HeroContainer>
      <animated.div style={props}>
        <Title>Welcome to QuantumFuse Blockchain</Title>
        <Subtitle>The next generation of decentralized technology</Subtitle>
        <Button>Get Started</Button>
      </animated.div>
    </HeroContainer>
  );
};

export default Hero;
