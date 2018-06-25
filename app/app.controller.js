import './books.service.js'

angular.module('app')
  .controller('AppController', ['BooksService', AppController])

AppController.$inject = ['BooksService']
function AppController (BooksService) {
  const vm = this
  vm.posts = []
  vm.books = BooksService.getBooks()
  BooksService.getPosts()
    .then(function (data) {
      vm.posts = data
    })
    .catch(function (err) {
      console.log(err)
    })
}
