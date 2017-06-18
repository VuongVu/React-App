import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
// Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
// Service Worker for PWA
registerServiceWorker();
