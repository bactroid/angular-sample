/* eslint-env jest */
/* global angular */
require('../node_modules/angular/angular.min.js')
require('../node_modules/angular-mocks/angular-mocks.js')
require('../dist/bundle.js')

describe('BooksService', () => {
  beforeEach(angular.mock.module('app'))

  let BooksService = {}
  let $httpBackend = {}

  beforeEach(angular.mock.inject((_$httpBackend_, _BooksService_) => {
    $httpBackend = _$httpBackend_
    BooksService = _BooksService_
  }))

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
  })

  test('Returns expected books', () => {
    const expected = [
      {title: 'Game of Thrones', author: 'George R. R. Martin'},
      {title: 'Capital', author: 'Karl Marx'},
      {title: 'Interview with the Vampire', author: 'Anne Rice'}
    ]
    const actual = BooksService.getBooks()
    expect(actual).toEqual(expected)
  })

  test('Fetches posts from API (fake response)', () => {
    const expected = {id: 0, title: 'Fake title'}
    $httpBackend
      .expect('GET', 'https://jsonplaceholder.typicode.com/posts')
      .respond(200, expected)
    BooksService.getPosts()
      .then((response) => {
        expect(response.value).toEqual(expected)
      })
      .catch(err => {
        return err.status
      })
    $httpBackend.flush()
  })

  /* This one right here is actually good. */
  test('Fetches posts from API (simpler version)', () => {
    $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/posts')
    BooksService.getPosts()
      .then((response) => {})
      .catch(err => {
        return err.status
      })
  })
})
