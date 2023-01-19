import React from 'react';
import ReactDOM from 'react-dom/client';

import { Contador } from './Contador';

import './styles.css';

ReactDOM.createRoot (document.getElementById('root')).render (
  <React.StrictMode>
    
    <Contador valor={10} />
  </React.StrictMode>
);

