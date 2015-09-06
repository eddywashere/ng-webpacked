import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './controller';

let module = angular.module('about', [
  uiRouter
]);

/*@ngInject*/
module.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('about', {
      url: '/about',
      template: require('./index.html'),
      controller,
      controllerAs: 'vm',
      bindToController: true
    });
});

export default module.name;