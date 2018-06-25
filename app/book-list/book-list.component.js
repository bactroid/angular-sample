import template from './book-list.template.html'
var bookList = {
  bindings: {
    books: '<'
  },
  template
}

angular.module('app')
  .component('bookList', bookList)
