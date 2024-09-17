import React from 'react';

const NavBar = ({ toggleDarkMode }) => {
  return (
    <nav className="neumorphic fixed w-full top-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">QuantumFuse</a>
        <div className="space-x-4">
          <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
          <a href="#technology" className="hover:text-blue-500 transition-colors">Technology</a>
          <a href="#tokenomics" className="hover:text-blue-500 transition-colors">Tokenomics</a>
          <a href="#governance" className="hover:text-blue-500 transition-colors">Governance</a>
          <button id="darkModeToggle" className="ml-4 p-2 rounded-full neumorphic" onClick={toggleDarkMode}>🌓</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
