export default ngModule => {
  class Controller {
    /*@ngInject*/
    constructor() {
      this.things = [
        'ello',
        'world'
      ];
    }
  }
  ngModule.controller('MainCtrl', Controller);
};