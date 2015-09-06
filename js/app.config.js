export default ngModule => {
  /*@ngInject*/
  ngModule.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  });
};