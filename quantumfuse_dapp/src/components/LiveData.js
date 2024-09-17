import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const LiveDataContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DataItem = styled.div`
  text-align: center;
`;

const DataValue = styled(animated.div)`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
`;

const DataLabel = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.text};
`;

const LiveData = () => {
  const [data, setData] = useState({
    transactions: 0,
    blocks: 0,
    nodes: 0,
    hashRate: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        transactions: Math.floor(Math.random() * 1000),
        blocks: Math.floor(Math.random() * 100),
        nodes: Math.floor(Math.random() * 50),
        hashRate: Math.floor(Math.random() * 1000),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const props = useSpring({ ...data });

  return (
    <LiveDataContainer>
      <DataItem>
        <DataValue>{props.transactions.interpolate(val => Math.floor(val))}</DataValue>
        <DataLabel>Live Transactions</DataLabel>
      </DataItem>
      <DataItem>
        <DataValue>{props.blocks.interpolate(val => Math.floor(val))}</DataValue>
        <DataLabel>Latest Blocks</DataLabel>
      </DataItem>
      <DataItem>
        <DataValue>{props.nodes.interpolate(val => Math.floor(val))}</DataValue>
        <DataLabel>Connected Nodes</DataLabel>
      </DataItem>
      <DataItem>
        <DataValue>{props.hashRate.interpolate(val => Math.floor(val))} H/s</DataValue>
        <DataLabel>Network Hash Rate</DataLabel>
      </DataItem>
    </LiveDataContainer>
  );
};

export default LiveData;
