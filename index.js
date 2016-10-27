'use strict';

// Dependencies
var request = require('request'),
	querystring = require('querystring');

/**
 * Create an instance of Behance
 * @param {string} token - authentication for Behance API
 */
var Behance = function(token) {
	this.clientId = token;

	// Throw an error if Auth Key is not specified
	if (this.clientId === undefined) {
		throw new Error('Please supply an authorization token.');
	}
};

/**
 * Endpoint and Query Builder
 * @param {string} endpoint - endpoint to query
 * @param {object} options - Queries
 * @api private
 */
Behance.prototype.buildUrl = function(endpoint, options) {
	var _this = this;
	var query = '?' + (options ? querystring.stringify(options) + '&' : ''),
		clientId = 'client_id=' + _this.clientId;

	return 'https://api.behance.net/v2/' + endpoint + query + clientId;
}

/**
 * Request Handler
 * @param {object} options - Option query string for API
 * @param {function} cb - callback
 * @api private
 */
Behance.prototype.requestHandler = function(requestUrl, cb) {
	request(requestUrl, function(err, res, body) {
		if (!body) {
			return cb(new Error('No response from the Behance API'));
		}

		try {
			body = JSON.parse(body);
		} catch(e) {}

		cb(err, res, body);
	});
}

/**
 * Get Projects
 * @param {object} options - Option query string for API
 * @api public
 */
Behance.prototype.projects = function(options, cb) {
	var endpoint = 'projects';
	this.requestHandler(this.buildUrl(endpoint, options), cb);
}


module.exports = Behance;