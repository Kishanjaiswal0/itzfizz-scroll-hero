import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

// Mount the React application into the root DOM node
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
