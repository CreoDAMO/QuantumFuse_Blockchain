import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
      </SocialLinks>
      <Copyright>© 2023 QuantumFuse Blockchain. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
