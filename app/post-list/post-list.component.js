import template from './post-list.template.html'
var postList = {
  bindings: {
    posts: '<'
  },
  template
}

angular.module('app')
  .component('postList', postList)
