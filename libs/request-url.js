// Dependencies
const qs = require('qs');

/**
 * Endpoint and Query Builder
 * @param {string} endpoint - endpoint to query
 * @param {string} token - Behance API token
 * @param {object} options - Queries
 * @returns {String} - full request url with endpoint, queries, and token
 * @private
 */
module.exports = function requestUrl(endpoint, token, options) {
  const query = `?${options ? qs.stringify(options) : ''}&client_id=${token}`;
  return `https://api.behance.net/v2/${endpoint}${query}`;
};
