import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const DATA = [
  { id: "daybook-0", content: "I read about IT", date: "2023-11-11" },
  { id: "daybook-1", content: "I made components", date: "2023-11-12" },
  { id: "daybook-2", content: "I read about management", date: "2023-11-13" },
]

root.render(
  <React.StrictMode>
    <App daybookData={DATA} />
  </React.StrictMode>
);