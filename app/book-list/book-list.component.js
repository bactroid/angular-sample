var bookList = {
  bindings: {
    books: '<'
  },
  templateUrl: 'app/book-list/book-list.template.html'
}

angular.module('app')
  .component('bookList', bookList)
