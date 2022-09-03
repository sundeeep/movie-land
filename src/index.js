import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter as BRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import Admin from './Admin'
import Firebase from './Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BRouter>
    <Routes>
      <Route path='/' element={<App />}>
      </Route>
      <Route path='/admin' element={ <Admin /> } />
    </Routes>
  </BRouter>
);

