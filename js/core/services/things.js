import angular from 'angular';

let module = angular.module('service.Things', []);

class Things {
  constructor() {
    this.items = ['one', 'two', 'three'];
  }

  total() {
    return this.items.length;
  }
}

export default module.service('Things', Things).name;