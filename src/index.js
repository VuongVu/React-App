import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
// Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
// Service Worker for PWA
registerServiceWorker();
