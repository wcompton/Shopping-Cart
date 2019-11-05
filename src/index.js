import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from 'C:/Users/katie/react-app/counter-app/src/components/counter.jsx';
import Counters from 'C:/Users/katie/react-app/counter-app/src/components/counters.jsx';
//import Counter from 'src/components/counter.jsx';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
