'use strict'

// Dependencies
const Behance = require('../index.js')
const fs = require('fs')

// Create an Instance of Behance with API Key
const key = require('../api.json').key
const Be = new Behance(key)

// Get Projects Data
// Be.userProjects('edmendoza3', function (err, res, data) {
//   // Check for errors
//   if (err) {
//     throw err
//   }

//   // Write a JSON File with API Data
//   fs.writeFile('./projectsData.json', JSON.stringify(data, null, 2), (err) => {
//     if (err) throw err
//   })
// })

Be.teamProjects(42791, function (err, res, data) {
  if (err) throw err
  fs.writeFile('./teamData.json', JSON.stringify(data, null, 2), (err) => {
    if (err) throw err
  })
})
