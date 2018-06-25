BooksService.$inject = ['$http']

function BooksService ($http) {
  const vm = this
  const server = 'https://jsonplaceholder.typicode.com'
  vm.posts = []

  vm.getBooks = getBooks
  vm.getPosts = getPosts

  function getBooks () {
    return [
      {title: 'Game of Thrones', author: 'George R. R. Martin'},
      {title: 'Capital', author: 'Karl Marx'},
      {title: 'Interview with the Vampire', author: 'Anne Rice'}
    ]
  }

  function getPosts () {
    return $http
      .get(server + '/posts')
      .then(function (response) {
        return response.data
      })
  }
}

angular.module('app')
  .service('BooksService', BooksService)
