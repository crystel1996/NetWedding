

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/style.scss';

/**
 * FONTAWESOME IS REQUIRED IN WEBSITE FOR BUILD MORE ICON
 */

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/css/fontawesome.min.css');
require('@fortawesome/fontawesome-free/js/all.min.js');
require('@fortawesome/fontawesome-free/js/fontawesome.min.js');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
