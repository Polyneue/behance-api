// Dependencies
const request = require('request');

/**
 * Request Handler
 * @param {string} url - Requested Url
 * @param {function} cb - callback
 * @return {function} - callback containing response from API
 * @private
 */
module.exports = function requestHandler(url, cb) {
  request(url, (err, res, data) => {
    let payload = data;

    // Test the response from Behance
    if (res.statusCode === 403) {
      return cb(Error('No response from the Behance API'));
    }

    try {
      payload = JSON.parse(data);
    } catch (e) {
      throw Error(e);
    }

    return cb(err, res, payload);
  });
};
