// Dependencies
const Behance = require('../index.js');
const API_KEY = require('../api.json').key;

// Create an Instance of Behance with API Key
const Be = new Behance(API_KEY);

// Get Projects Data and write it to a json file.
Be.projects({ q: 'motorcycle', sort: 'views' }, function (err, res, data) {
  if (err) throw err;
  console.dir(data);
});
