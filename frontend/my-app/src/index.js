import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom' 
import './fonts/DMSerifDisplay-Regular.ttf'
import './fonts/Roboto-Light.ttf'
import './fonts/Roboto-Bold.ttf'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
