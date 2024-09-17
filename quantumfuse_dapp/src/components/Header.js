import React from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Logo = styled.h1`
  color: ${props => props.theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.5rem;
`;

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderContainer>
      <Logo>QuantumFuse</Logo>
      <Nav>
        <NavItem href="#features">Features</NavItem>
        <NavItem href="#technology">Technology</NavItem>
        <NavItem href="#tokenomics">Tokenomics</NavItem>
        <NavItem href="#governance">Governance</NavItem>
        <NavItem href="#sustainability">Sustainability</NavItem>
      </Nav>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
