import template from './animal-list.template.html'

var animalList = {
  bindings: {
    animals: '<'
  },
  template
}

angular.module('app')
  .component('animalList', animalList)
