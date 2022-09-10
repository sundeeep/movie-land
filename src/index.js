import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter as BRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import Admin from './Admin'
import FAQUpdater from './pages/FAQUpdater';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BRouter>
    <Routes>
      <Route path='/home' element={<App />} />
      <Route path='/' element={<Admin />}>
      </Route>
    </Routes>
  </BRouter>
);

