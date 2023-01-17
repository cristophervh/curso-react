import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorlApp } from './HelloWorlApp';





ReactDOM.createRoot (document.getElementById('root')).render (
  <React.StrictMode>
    <HelloWorlApp/>
    <FirstApp/>
    <FirstApp/>
    <FirstApp/>
  </React.StrictMode>
);

