import React from 'react';
import ReactDOM from '../node_modules/react-dom';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.scss';

import App from './components/App'
import reportWebVitals from './reportWebVitals';



const rootElement = document.getElementById('root')
ReactDOM.render(<App className = 'title' />, rootElement)

reportWebVitals();
