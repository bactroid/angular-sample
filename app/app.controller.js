import './books.service.js'
import './animals.service.js'

angular.module('app')
  .controller('AppController', ['BooksService', 'AnimalsService', AppController])

AppController.$inject = ['BooksService', 'AnimalsService']
function AppController (BooksService, AnimalsService) {
  const vm = this
  vm.posts = []
  vm.animals = []
  vm.books = BooksService.getBooks()

  BooksService.getPosts()
    .then(function (data) {
      vm.posts = data
    })
    .catch(function (err) {
      console.log(err)
    })

  AnimalsService.getAnimals()
    .then(function (data) {
      vm.animals = data
    })
    .catch(function (err) {
      console.log(err)
    })
}
