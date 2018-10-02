import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

declare const document: any;

ReactDOM.hydrate(<App />, document.getElementById('root'));
