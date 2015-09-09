import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'line-chart/build/line-chart.js';
import 'bootstrap/dist/css/bootstrap.css';
import d3 from 'd3';

var canon = require('canon/dist/canon.js');

console.log(canon);

import Home from './home';
import About from './about';

const ngModule = angular.module('app', [
  uiRouter,
  Home,
  About,
  'n3-line-chart'
]);


require('./app.config')(ngModule);
require('./app.controller')(ngModule);