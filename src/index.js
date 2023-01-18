import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorlApp } from './HelloWorlApp';

import './styles.css';

ReactDOM.createRoot (document.getElementById('root')).render (
  <React.StrictMode>
    <HelloWorlApp/>
    <FirstApp/>
  </React.StrictMode>
);

