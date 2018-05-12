import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Module from './Module';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Module />, document.getElementById('module-container'));
