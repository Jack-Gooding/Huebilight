import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



registerServiceWorker();

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('app-container'));
