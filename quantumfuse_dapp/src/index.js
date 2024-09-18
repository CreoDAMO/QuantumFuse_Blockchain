import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary';  // Add ErrorBoundary for better error handling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>  {/* Wrap App in ErrorBoundary */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Optionally log performance metrics
reportWebVitals(console.log);  // Pass a logging function or an analytics endpoint here
