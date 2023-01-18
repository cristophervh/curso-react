import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorlApp from './HelloWorlApp';
import FirstApp from './FirstApp';





ReactDOM.createRoot (document.getElementById('root')).render (
  <React.StrictMode>
    <HelloWorlApp/>
    <FirstApp/>
    <FirstApp/>
    <FirstApp/>
  </React.StrictMode> 
);

