import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLeaf, FaCoins } from 'react-icons/fa';

const SustainabilityContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
`;

const SustainabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SustainabilityCard = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const CardIcon = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-right: 0.5rem;
`;

const CardContent = styled.div`
  color: ${props => props.theme.text};
`;

const StakeForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
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

const Sustainability = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const handleStake = (e) => {
    e.preventDefault();
    // Implement staking logic here
    console.log(`Staked ${stakeAmount} tokens`);
    setStakeAmount('');
  };

  const handleCarbonFootprintChange = (e) => {
    setCarbonFootprint(e.target.value);
  };

  return (
    <SustainabilityContainer id="sustainability">
      <Title>Sustainability</Title>
      <SustainabilityGrid>
        <SustainabilityCard>
          <CardTitle>
            <CardIcon><FaLeaf /></CardIcon>
            Green Staking
          </CardTitle>
          <CardContent>
            <p>Earn rewards while supporting eco-friendly practices through green staking initiatives.</p>
            <StakeForm onSubmit={handleStake}>
              <Input
                type="number"
                placeholder="Amount to stake"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
              />
              <Button type="submit">Stake Tokens</Button>
            </StakeForm>
          </CardContent>
        </SustainabilityCard>
        <SustainabilityCard>
          <CardTitle>
            <CardIcon><FaCoins /></CardIcon>
            Carbon Credits
          </CardTitle>
          <CardContent>
            <p>Offset your carbon footprint with our integrated blockchain-based carbon credits system.</p>
            <Input
              type="number"
              placeholder="Your estimated carbon footprint (tons CO2e)"
              value={carbonFootprint}
              onChange={handleCarbonFootprintChange}
            />
            <p>Carbon credits needed: {carbonFootprint * 1.2} credits</p>
            <Button>Purchase Credits</Button>
          </CardContent>
        </SustainabilityCard>
      </SustainabilityGrid>
    </SustainabilityContainer>
  );
};

export default Sustainability;
