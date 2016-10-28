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

	return 'https://api.behance.net/v2/' + endpoint + query + clientId;
};


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
};


/**
 * Endpoints that only support Options
 */
var endpointWithOptionOnly = [{
	name: 'projects',
	path: 'projects'
}, {
	name: 'creativesToFollow',
	path: 'creativestofollow'
}, { 
	name: 'users',
	path: 'users'
}, {
	name: 'collections',
	path: 'collections'
}];

endpointWithOptionOnly.forEach(function(def) {
	/**
	 * Get a list of projects/creatives/users/collections
	 * @param {object} opts - queries
	 * @param {function} cb - callback
	 */
	Behance.prototype[def.name] = function(opts, cb) {
		var endpoint = def.path;
		this.requestHandler(this.buildUrl(endpoint, opts), cb);
	}
});


/**
 * Endpoints that require an ID with no Options
 */
var endpointWithOnlyAnId = [{
	name: 'project',
	pathprefix: 'projects/'
}, {
	name: 'user',
	pathprefix: 'users/'
}, {
	name: 'userStats',
	pathprefix: 'users/',
	pathsuffix: '/stats'
}, {
	name: 'userWorkExperience',
	pathprefix: 'users/',
	pathsuffix: '/work_experience'
}, {
	name: 'collection',
	path: 'collection'
}];

endpointWithOnlyAnId.forEach(function(def) {
	/**
	 * Get info about a project/user/collection
	 * @param {string} id - identifier 
	 * @param {function} cb - callback
	 */
	Behance.prototype[def.name] = function(id, cb) {
		var endpoint = def.pathprefix + id + (def.pathsuffix ? def.pathsuffix : '');
		this.requestHandler(this.buildUrl(endpoint), cb);
	}
});


/**
 * Endpoints that require an ID and support Options
 */
var endpointWithIdAndOptions = [{
	name: 'projectComments',
	pathprefix: 'projects/',
	pathsuffix: '/comments'
}, {
	name: 'userProjects',
	pathprefix: 'users/',
	pathsuffix: '/projects'
}, {
	name: 'userWips',
	pathprefix: 'users/',
	pathsuffix: '/wips'
}, {
	name: 'userAppreciations',
	pathprefix: 'users/',
	pathsuffix: '/appreciations'
}, {
	name: 'userCollections',
	pathprefix: 'users/',
	pathsuffix: '/collections'
}, {
	name: 'userFollowers',
	pathprefix: 'users/',
	pathsuffix: '/followers'
}, {
	name: 'userFollowing',
	pathprefix: 'users/',
	pathsuffix: '/following'
}, {
	name: 'collectionProjects',
	pathprefix: 'collections/',
	pathsuffix: '/projects'
}];

endpointWithIdAndOptions.forEach(function(def) {
	/**
	 * Get a list of comments/projects/wips/appreciations/collections/followers
	 * @param {string} id - identifier 
	 * @param {object} opts - queries
	 * @param {function} cb - callback
	 */
	Behance.prototype[def.name] = function(id, opts, cb) {
		var endpoint = def.pathprefix + id + (def.pathsuffix ? def.pathsuffix : '');
		this.requestHandler(this.buildUrl(endpoint, opts), cb);
	}
});


/**
 * Get Creative Fields
 */
Behance.prototype.fields = function(cb) {
	var endpoint = 'fields';
	this.requestHandler(this.buildUrl(endpoint), cb);
};

module.exports = Behance;
