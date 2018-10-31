AnimalsService.$inject = ['$http']

function AnimalsService ($http) {
  const vm = this
  const server = 'http://localhost:8081/'

  vm.getAnimals = getAnimals

  function getAnimals () {
    return $http
      .get(server)
      .then(function (response) {
        return response.data
      })
  }
}

angular.module('app')
  .service('AnimalsService', AnimalsService)
