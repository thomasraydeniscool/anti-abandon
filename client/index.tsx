import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

declare const document: any;

ReactDOM.hydrate(<App />, document.getElementById('root'));

registerServiceWorker();
