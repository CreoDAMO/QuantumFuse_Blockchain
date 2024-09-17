import React, { useState } from 'react';
import styled from 'styled-components';

const GovernanceContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
`;

const GovernanceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProposalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

const ProposalList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 500px;
`;

const ProposalItem = styled.li`
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Governance = () => {
  const [proposals, setProposals] = useState([]);
  const [newProposal, setNewProposal] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProposal.title && newProposal.description) {
      setProposals([...proposals, newProposal]);
      setNewProposal({ title: '', description: '' });
    }
  };

  return (
    <GovernanceContainer id="governance">
      <Title>Decentralized Governance</Title>
      <GovernanceContent>
        <ProposalForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Proposal Title"
            value={newProposal.title}
            onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
          />
          <TextArea
            placeholder="Proposal Description"
            value={newProposal.description}
            onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
          />
          <SubmitButton type="submit">Submit Proposal</SubmitButton>
        </ProposalForm>
        <ProposalList>
          {proposals.map((proposal, index) => (
            <ProposalItem key={index}>
              <h3>{proposal.title}</h3>
              <p>{proposal.description}</p>
            </ProposalItem>
          ))}
        </ProposalList>
      </GovernanceContent>
    </GovernanceContainer>
  );
};

export default Governance;
