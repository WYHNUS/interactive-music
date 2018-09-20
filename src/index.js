import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import registerServiceWorker from 'utils/registerServiceWorker';

ReactDOM.render(<Router/>, document.getElementById('root'));

registerServiceWorker();
