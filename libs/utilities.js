// Dependencies
const request = require('request');
const qs = require('qs');

/**
 * Build the request URL
 * @param {string} endpoint - endpoint to query
 * @param {string} token - Behance API token
 * @param {object} options - Queries
 * @returns {string} - full request url with endpoint, queries, and token
 * @private
 */
const requestUrl = function requestUrl(endpoint, token, options) {
  const query = `?${options ? qs.stringify(options) : ''}&client_id=${token}`;
  return `https://api.behance.net/v2/${endpoint}${query}`;
};

/**
 * Request Handler
 * @param {string} url - Requested Url
 * @param {function} cb - callback
 * @return {function} - callback containing response from API
 * @private
 */
const requestHandler = function requestHandler(url, cb) {
  request(url, (err, res, data) => {
    let payload = data;

    if (res.statusCode === 403) return cb(Error('No response from the Behance API'));

    try {
      payload = JSON.parse(data);
    } catch (e) { throw Error(e); }

    return cb(err, res, payload);
  });
};

/**
 * Compare Keys
 * @param {object} obj1 - object to compare
 * @param {object} obj2 - object to compare against
 * @returns {bool} - validity
 * @private
 */
const compareKeys = function compareKeys(obj1, obj2, fn) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  for (let i = 0; i < keys1.length; i++) {
    if (keys2.indexOf(keys1[i]) <= -1) {
      throw Error(`property ${keys1[i]} is not a valid query for ${fn}`);
    }
  }

  return true;
};

// Exports
module.exports = {
  requestUrl,
  requestHandler,
  compareKeys
};
