import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './context/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Temporarily remove StrictMode to reduce double renders during development
  // <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  // </React.StrictMode>
); 