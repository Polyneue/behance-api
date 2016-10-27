'use strict';

// Behance Dependencies
var Behance = require('../index.js');

// Create an Instance of Behance with API Key
var key = require('../api.json').key;
var Be = new Behance(key);

// Get Projects
Be.projects({q: 'motorcycle'}, function(err, res, json) {
	console.dir(json);
});

