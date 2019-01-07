import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './js/App';
import * as serviceWorker from './js/serviceWorker';
import Header from "./js/components/Header";
import Dashboard from "./js/components/Dashboard";
import User from "./js/components/User";

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Dashboard User={new User(1, 'Nasta')}/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
