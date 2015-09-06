import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './controller';
import Things from '../core/services/things';

let module = angular.module('home', [
  uiRouter,
  Things
]);

/*@ngInject*/
module.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./index.html'),
      controller,
      controllerAs: 'vm',
      bindToController: true
    });
});

export default module.name;