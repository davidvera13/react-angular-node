import React from 'react';
import ReactDOM from '../node_modules/react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';

import App from './components/app-component/App'
import reportWebVitals from './reportWebVitals';



const rootElement = document.getElementById('root')
ReactDOM.render(<App className = 'title' />, rootElement)

reportWebVitals();
