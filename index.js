'use strict';

// Dependencies
var request = require('request'),
	q = require('querystring');

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
	var query = '?' + (options ? q.stringify(options) + '&' : ''),
		clientId = 'client_id=' + _this.clientId;

	console.log('https://api.behance.net/v2/' + endpoint + query + clientId)

	return 'https://api.behance.net/v2/' + endpoint + query + clientId;
}

/**
 * Request Handler
 * @param {string} requestUrl - Requested Url
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
 * @param {object} options - Queries
 * @api public
 */
Behance.prototype.projects = function(options, cb) {
	var endpoint = 'projects';
	this.requestHandler(this.buildUrl(endpoint, options), cb);
}

/**
 * Get Project
 * @param {string} id - Project ID
 * @api public
 */
Behance.prototype.project = function(id, cb) {
	var endpoint = 'projects/' + id;
	this.requestHandler(this.buildUrl(endpoint), cb);
}

/**
 * Get Project Comments
 * @param {string} id - Project ID
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.projectComments = function(id, options, cb) {
	var endpoint = 'projects/' + id + '/comments';
	this.requestHandler(this.buildUrl(endpoint, options), cb);
}

/**
 * Get Creatives to Follow
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.creativesToFollow = function(options, cb) {
	var endpoint = 'creativestofollow';
	this.requestHandler(this.buildUrl(endpoint, options), cb);
}

/**
 * Get Creative Fields
 * @api public
 */
Behance.prototype.fields = function(cb) {
	var endpoint = 'fields';
	this.requestHandler(this.buildUrl(endpoint), cb);
}

/**
 * Get Users
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.users = function(options, cb) {
	var endpoint = 'users';
	this.requestHandler(this.buildUrl(endpoint, options), cb);
}

/**
 * Get User
 * @param {string} id - username or id
 * @api public
 */
Behance.prototype.user = function(id, cb) {
	var endpoint = 'users/' + id;
	this.requestHandler(this.buildUrl(endpoint), cb);
}

/**
 * Get User Projects
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.userProjects = function(id, options, cb) {
	var endpoint = 'users/' + id + '/projects';
	this.requestHandler(this.buildUrl(endpoint, options), cb);
}

/**
 * Get User WIPs
 * @param {string} id - username or id
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.userWips = function(id, options, cb) {
	var endpoint = 'users/' + id + '/wips';
	this.requestHandler(this.buildUrl(endpoint, options), cb);	
}

/**
 * Get User Appreciations
 * @param {string} id - username or id
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.userAppreciations = function(id, options, cb) {
	var endpoint = 'users/' + id + '/appreciations';
	this.requestHandler(this.buildUrl(endpoint, options), cb);	
}

/**
 * Get User Collections
 * @param {string} id - username or id
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.userCollections = function(id, options, cb) {
	var endpoint = 'users/' + id + '/collections';
	this.requestHandler(this.buildUrl(endpoint, options), cb);	
}

/**
 * Get User Stats
 * @param {string} id - username or id
 * @api public
 */
Behance.prototype.userStats = function(id, cb) {
	var endpoint = 'users/' + id + '/stats';
	this.requestHandler(this.buildUrl(endpoint), cb);	
}

/**
 * Get User Followers
 * @param {string} id - username or id
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.userFollowers = function(id, options, cb) {
	var endpoint = 'users/' + id + '/followers';
	this.requestHandler(this.buildUrl(endpoint, options), cb);	
}

/**
 * Get User Following
 * @param {string} id - username or id
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.userFollowing = function(id, options, cb) {
	var endpoint = 'users/' + id + '/following';
	this.requestHandler(this.buildUrl(endpoint, options), cb);	
}

/**
 * Get User Following
 * @param {string} id - username or id
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.userWorkExperience = function(id, cb) {
	var endpoint = 'users/' + id + '/work_experience';
	this.requestHandler(this.buildUrl(endpoint), cb);	
}

/**
 * Get Collections
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.collections = function(options, cb) {
	var endpoint = 'collections';
	this.requestHandler(this.buildUrl(endpoint, options), cb);	
}

/**
 * Get Collection
 * @param {string} id - id of collection
 * @api public
 */
Behance.prototype.collections = function(id, cb) {
	var endpoint = 'collections/' + id;
	this.requestHandler(this.buildUrl(endpoint), cb);	
}

/**
 * Get Collection Projects
 * @param {string} id - id of collection
 * @param {object} options - queries
 * @api public
 */
Behance.prototype.collectionProjects = function(id, options, cb) {
	var endpoint = 'collections/' + id + '/projects';
	this.requestHandler(this.buildUrl(endpoint, options), cb);	
}

module.exports = Behance;