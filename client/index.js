import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import { AppProvider } from '@shopify/polaris';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const shopOrigin = document.querySelector('#ShopOrigin').textContent;
const apiKey = document.querySelector('#APIKey').textContent;

ReactDOM.render(
  <AppProvider shopOrigin={shopOrigin} apiKey={apiKey}>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

registerServiceWorker();
