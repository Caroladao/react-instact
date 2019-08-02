import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Login from './components/Login'
import * as serviceWorker from './serviceWorker'
import './css/reset.css'
import './css/timeline.css'
import './css/login.css'
import { Router, Route } from 'react-router'
import {history as browserHistory} from './browserHistory';

ReactDOM.render(
  (
    <Router history={ browserHistory }>
      <div>
        <Route path="/" component={Login} />
        <Route path="/timeline" component={App} />
      </div>
    </Router>), 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
