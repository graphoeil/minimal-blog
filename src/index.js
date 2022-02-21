// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Store Mobx
import MinimalStore from './stores/MinimalStore';
import { Provider } from 'mobx-react';
const minimalStore = new MinimalStore();
const stores = { minimalStore };

// ReactDOM
ReactDOM.render(<Provider { ...stores }><App/></Provider>, document.getElementById('root'));