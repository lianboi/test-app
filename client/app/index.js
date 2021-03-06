import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './views/Main';

import { AppContainer } from 'react-hot-loader';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../../node_modules/font-awesome/css/font-awesome.css'
import './../../node_modules/animate.css/animate.min.css'
import './../assests/styles/style.css'

ReactDOM.render(
  <AppContainer>
    <Router><Main/></Router></AppContainer>,
    document.getElementById('root')
);
/*

if (module.hot) {
  module.hot.accept('./views/Main', () => {
    console.log("changes.....");
    const NextApp = require('./views/Main');
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
*/
