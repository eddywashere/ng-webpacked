import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Home from './home';
import About from './about';

const ngModule = angular.module('app', [
  uiRouter,
  Home,
  About
]);


require('./app.config')(ngModule);
require('./app.controller')(ngModule);