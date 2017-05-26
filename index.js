// Dependencies
const queryValidation = require('./libs/query-validation.js');
const utils = require('./libs/utilities');

/**
 * Create an instance of Behance
 * @param {string} token - authentication for Behance API
 * @public
 */
const Behance = function behance(token) {
  this.clientId = token;

  // Throw an error if Auth Key is not specified
  if (this.clientId === undefined) {
    throw Error('Please supply an authorization token for new Behance().');
  }
};

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
  name: 'teams',
  path: 'teams',
  queries: queryValidation.teams
}, {
  name: 'collections',
  path: 'collections',
  queries: queryValidation.collections
}];

endpointWithOptionOnly.forEach(function iterate(def) {
  /**
   * Get a list of projects/creatives/users/collections
   * @param {object} opts - queries
   * @param {function} cb - callback
   * @return {object} - response from Behance API
   * @public
   */
  Behance.prototype[def.name] = function assign(opts, cb) {
    if (Object.keys(opts).length === 0 || utils.compareKeys(opts, def.queries, def.name)) {
      utils.requestHandler(utils.requestUrl(def.path, this.clientId, opts), cb);
    }
  };
});

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
  name: 'team',
  pathprefix: 'teams/'
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

endpointWithOnlyAnId.forEach(function iterate(def) {
  /**
   * Get info about a project/user/collection
   * @param {string} id - identifier
   * @param {function} cb - callback
   * @return {object} - response from Behance API
   * @public
   */
  Behance.prototype[def.name] = function assign(id, cb) {
    const endpoint = def.pathprefix + id + (def.pathsuffix ? def.pathsuffix : '');

    if (arguments.length !== 2) {
      throw Error(`.${def.name} requires both an id and a callback function.`);
    }

    utils.requestHandler(utils.requestUrl(endpoint, this.clientId), cb);
  };
});

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
  name: 'teamProjects',
  pathprefix: 'teams/',
  pathsuffix: '/projects',
  queries: queryValidation.teamsProjects
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
}];

endpointWithIdAndOptions.forEach(function iterate(def) {
  /**
   * Get a list of comments/projects/wips/appreciations/collections/followers
   * @param {string} id - identifier
   * @param {object} opts - queries
   * @param {function} cb - callback
   * @return {object} - response from Behance API
   * @public
   */
  Behance.prototype[def.name] = function assign(id, opts, cb) {
    const endpoint = def.pathprefix + id + (def.pathsuffix ? def.pathsuffix : '');
    let newCb;
    let newOpts;

    // Update Params order if options aren't supplied
    if (arguments.length === 2) {
      newCb = opts;
      newOpts = {};
    }

    if (id === '' || typeof id === 'object') {
      throw Error(`.${def.name} requires at least an id and a callback function.`);
    }

    if (Object.keys(opts).length === 0 || utils.compareKeys(opts, def.queries, def.name)) {
      utils.requestHandler(utils.requestUrl(endpoint, this.clientId, newOpts || opts), newCb || cb);
    }
  };
});

/**
 * Get Creative Fields
 * @param {function} cb - callback
 * @return {object} - response from Behance API
 * @public
 */
Behance.prototype.fields = function assign(cb) {
  utils.requestHandler(utils.requestUrl('fields', this.clientId), cb);
};

module.exports = Behance;
