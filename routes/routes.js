const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const response = [
  { name: 'Lucky', species: 'feline', age: 6 },
  { name: 'Spot', species: 'canine', age: 4 },
  { name: 'Trick', species: 'canine', age: 10 },
  { name: 'Pumpkin', species: 'feline', age: 2 }
]

app.get('/', (req, res) => {
  res.json(response)
})

const server = app.listen(8081, () => {
  console.log(`Back-end listening at http://localhost:8081`)
})
