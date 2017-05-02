// Dependencies
const Behance = require('../index.js');
const key = require('../api.json').key;

// Create an Instance of Behance with API Key
const Be = new Behance(key);

// Get Projects Data and write it to a json file.
Be.userProjects('edmendoza3', (err, res, data) => {
  if (err) throw err;
  console.dir(data);
});
