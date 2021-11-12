import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>     
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();




