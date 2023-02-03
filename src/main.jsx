import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
import './index.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  // </React.StrictMode>,
)
