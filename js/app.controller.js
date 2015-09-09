export default ngModule => {
  class Controller {
    /*@ngInject*/
    constructor() {
      this.things = [
        'ello',
        'world'
      ];

      this.data = [{x: 0, value: 12}, {x: 1, value: 0}, {x: 2, value: 23}];

      // Column
      this.options = {
        tooltipMode: 'scrubber',
        lineMode: 'cardinal',
        tension: 0.3,
        series: [
          {y: 'value', type: 'area'},
          {y: 'x', type: 'area'}
        ]
      };
    }
  }
  ngModule.controller('MainCtrl', Controller);
};