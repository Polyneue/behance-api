'use strict'

// Dependencies
const request = require('request')
const qs = require('qs')
const queryValidation = require('./libs/query-validation.json')

/**
 * Endpoint and Query Builder
 * @param {string} endpoint - endpoint to query
 * @param {string} token - API token
 * @param {object} options - Queries
 * @private
 */
function requestUrl (endpoint, token, options) {
  const query = '?' + (options ? qs.stringify(options) + '&' : '') + 'client_id=' + token
  return 'https://api.behance.net/v2/' + endpoint + query
}

/**
 * Request Handler
 * @param {string} url - Requested Url
 * @param {function} cb - callback
 * @private
 */
function requestHandler (url, cb) {
  request(url, function (err, res, data) {
    if (res.statusCode === 403) {
      return cb(Error('No response from the Behance API'))
    }

    try {
      data = JSON.parse(data)
    } catch (e) {}

    return cb(err, res, data)
  })
}

/**
 * Compare Keys
 * @param {object} obj1 - object to compare
 * @param {object} obj2 - object to compare against
 * @return {bool}
 * @private
 */
function compareKeys (obj1, obj2, fn) {
  for (var prop in obj1) {
    if (!obj2.hasOwnProperty(prop)) {
      throw Error('property ' + prop + ' is not a valid query for ' + fn)
    } else {
      return true
    }
  }
}

/**
 * Create an instance of Behance
 * @param {string} token - authentication for Behance API
 * @public
 */
var Behance = function (token) {
  this.clientId = token

  // Throw an error if Auth Key is not specified
  if (this.clientId === undefined) {
    throw Error('Please supply an authorization token for new Behance().')
  }
}

// Endpoints that only support Options
const endpointWithOptionOnly = [{
  name: 'projects',
  path: 'projects',
  queries: queryValidation.projects
}, {
  name: 'creativesToFollow',
  path: 'creativestofollow',
  queries: queryValidation.creativesToFollow
}, {
  name: 'users',
  path: 'users',
  queries: queryValidation.users
}, {
  name: 'collections',
  path: 'collections',
  queries: queryValidation.collections
}]

endpointWithOptionOnly.forEach(function (def) {
  /**
   * Get a list of projects/creatives/users/collections
   * @param {object} opts - queries
   * @param {function} cb - callback
   * @public
   */
  Behance.prototype[def.name] = function (opts, cb) {
    if (Object.keys(opts).length === 0 || compareKeys(opts, def.queries, def.name)) {
      requestHandler(requestUrl(def.path, this.clientId, opts), cb)
    }
  }
})

/**
 * Endpoints that require an ID with no Options
 */
const endpointWithOnlyAnId = [{
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
}]

endpointWithOnlyAnId.forEach(function (def) {
  /**
   * Get info about a project/user/collection
   * @param {string} id - identifier
   * @param {function} cb - callback
   * @public
   */
  Behance.prototype[def.name] = function (id, cb) {
    let endpoint = def.pathprefix + id + (def.pathsuffix ? def.pathsuffix : '')

    if (arguments.length !== 2) {
      throw Error('.' + def.name + ' requires both an id and a callback function.')
    }

    requestHandler(requestUrl(endpoint, this.clientId), cb)
  }
})

/**
 * Endpoints that require an ID and support Options
 */
const endpointWithIdAndOptions = [{
  name: 'projectComments',
  pathprefix: 'projects/',
  pathsuffix: '/comments',
  queries: queryValidation.projectComments
}, {
  name: 'userProjects',
  pathprefix: 'users/',
  pathsuffix: '/projects',
  queries: queryValidation.userProjects
}, {
  name: 'userWips',
  pathprefix: 'users/',
  pathsuffix: '/wips',
  queries: queryValidation.userWips
}, {
  name: 'userAppreciations',
  pathprefix: 'users/',
  pathsuffix: '/appreciations',
  queries: queryValidation.userAppreciations
}, {
  name: 'userCollections',
  pathprefix: 'users/',
  pathsuffix: '/collections',
  queries: queryValidation.userCollections
}, {
  name: 'userFollowers',
  pathprefix: 'users/',
  pathsuffix: '/followers',
  queries: queryValidation.userFollowers
}, {
  name: 'userFollowing',
  pathprefix: 'users/',
  pathsuffix: '/following',
  queries: queryValidation.userFollowing
}, {
  name: 'collectionProjects',
  pathprefix: 'collections/',
  pathsuffix: '/projects',
  queries: queryValidation.collectionProjects
}]

endpointWithIdAndOptions.forEach(function (def) {
  /**
   * Get a list of comments/projects/wips/appreciations/collections/followers
   * @param {string} id - identifier
   * @param {object} opts - queries
   * @param {function} cb - callback
   * @public
   */
  Behance.prototype[def.name] = function (id, opts, cb) {
    let endpoint = def.pathprefix + id + (def.pathsuffix ? def.pathsuffix : '')

    // Update Params order if options aren't supplied
    if (arguments.length === 2) {
      cb = arguments[1]
      opts = {}
      id = arguments[0]
    }

    if (id === '' || typeof id === 'object') {
      throw Error('.' + def.name + ' requires at least an id and a callback function.')
    }

    if (Object.keys(opts).length === 0 || compareKeys(opts, def.queries, def.name)) {
      requestHandler(requestUrl(endpoint, this.clientId, opts), cb)
    }
  }
})

/**
 * Get Creative Fields
 * @param {function} cb - callback
 * @public
 */
Behance.prototype.fields = function (cb) {
  requestHandler(requestUrl('fields', this.clientId), cb)
}

module.exports = Behance
