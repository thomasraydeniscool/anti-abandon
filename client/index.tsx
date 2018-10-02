import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import { AppProvider } from '@shopify/polaris';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

declare const document: any;

const shopOrigin = document.querySelector('#ShopOrigin').textContent;
const apiKey = document.querySelector('#APIKey').textContent;

ReactDOM.render(
  <AppProvider shopOrigin={shopOrigin} apiKey={apiKey}>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

registerServiceWorker();
