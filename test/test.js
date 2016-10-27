'use strict';

// Behance Dependencies
var Behance = require('../index.js');

// Create an Instance of Behance with API Key
var key = 123456789;
var Be = new Behance(key);

// Test Dependencies
var nock = require('nock');
var expect = require('chai').expect;

// Data Sets
var userProjectsData = require('./api-responses/userProjects.json');

describe('behance-api', function() {

	/**
	 * Be.buildUrl
	 * @api private
	 */
	describe('Be.buildUrl', function() {

		/**
		 * Test 1 - Validate that the url structure matches what the Behance API will expect.
		 */
		it('Should create a valid url from endpoint and query inputs', function(done) {
			var result = Be.buildUrl('projects', {q: 'motorcycle', time: 'month'});
			expect(result).to.equal('https://api.behance.net/v2/projects?q=motorcycle&time=month&client_id=' + key);
			done();
		});
	});

	/**
	 * Be.requestHandler
	 * @api private
	 */
	 describe('Be.requestHandler', function() {

	 	// Capture request and funnel to api-responses
	 	beforeEach(function() {
	 		nock('https://api.behance.net')
	 			.get('/v2/fields')
	 			.reply(200, userProjectsData);
	 	});

	 	/**
	 	 * Test 2 - Test response is being made to the API
	 	 */
	 	it('Should return a successful response from the API', function(done) {

	 		Be.requestHandler('https://api.behance.net/v2/fields', function(err, res, body) {
	 			expect(body.http_code).to.equal(200);
	 			done();
	 		});
	 	});
	 });
});