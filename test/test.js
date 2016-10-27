'use strict';

// Behance Dependencies
var Behance = require('../index.js');

// Create an Instance of Behance with API Key
var key = 123456789;
var Be = new Behance(key);

// Test Dependencies
var expect = require('chai').expect;

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
});