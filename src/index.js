import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const DATA = [
  { id: "daybook-0", content: "I read about IT", date: "11 Oct 2023" },
  { id: "daybook-1", content: "I made components", date: "12 Oct 2023" },
  { id: "daybook-2", content: "I read about management", date: "13 Oct 2023" },
]

root.render(
  <React.StrictMode>
    <App daybookData={DATA} />
  </React.StrictMode>
);