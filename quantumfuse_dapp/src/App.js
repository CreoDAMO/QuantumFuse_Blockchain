import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveData from './components/LiveData';
import Features from './components/Features';
import Technology from './components/Technology';
import Tokenomics from './components/Tokenomics';
import Governance from './components/Governance';
import Sustainability from './components/Sustainability';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

const lightTheme = {
  background: '#f0f0f0',
  text: '#333',
  primary: '#4a90e2',
};

const darkTheme = {
  background: '#222',
  text: '#f0f0f0',
  primary: '#61dafb',
};

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <LiveData />
        <Features />
        <Technology />
        <Tokenomics />
        <Governance />
        <Sustainability />
        <UseCases />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
