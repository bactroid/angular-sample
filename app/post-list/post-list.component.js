var postList = {
  bindings: {
    posts: '<'
  },
  templateUrl: 'app/post-list/post-list.template.html'
}

angular.module('app')
  .component('postList', postList)
