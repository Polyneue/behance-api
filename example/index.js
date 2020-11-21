// // Dependencies
// const Behance = require('../index.js');
// const API_KEY = require('../api.json').key;

// Create an Instance of Behance with API Key
// const Be = new Behance(API_KEY);
//
// Get Projects Data and write it to a json file.
// Be.projects({ q: 'motorcycle', sort: 'views' }, function callback(err, res, data) {
//   if (err) throw err;
//   console.dir(data);  // eslint-disable-line
// });

// Be.fields(function callback(err, res, data) {
//   if (err) throw err;
//   console.dir(data);
// });

const Behance = require('../lib/cjs/Behance');
const clientId = require('../api.json').key;

(async function () {
  const Be = new Behance({
    clientId,
    timeout: 1000
  });

  try {
    const res = await Be.fields();
    console.dir(res.data);
  } catch (err) {
    console.error(err);
  }
}());