import React from 'react';
import ReactDOM from '../node_modules/react-dom';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.scss';
import 'bootstrap-daterangepicker/daterangepicker.css';

import App from './components/App'
import reportWebVitals from './reportWebVitals';

// importing font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const rootElement = document.getElementById('root')
ReactDOM.render(<App className = 'title' />, rootElement)

reportWebVitals();
