class Controller {
  /*@ngInject*/
  constructor($q, Things) {
    this.name = 'home';
    this.items = Things.items;
  }
}

export default Controller;