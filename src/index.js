import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

//TAILWINDCSS + CUSTOM
import './index.css';

//JSX FILES TO ROUTE
import Home from './container/Home';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);