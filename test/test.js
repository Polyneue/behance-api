'use strict';

// Behance Dependencies
var Behance = require('../index.js');

// Create an Instance of Behance with API with fake key
var key = 123456789;
var Be = new Behance(key);

// Test Dependencies
var nock = require('nock');
var expect = require('chai').expect;

// Data Sets
var userProjectsData = require('./api-responses/userProjects.json');
var fieldsData = require('./api-responses/fields.json');
var projectsData = require('./api-responses/projects.json');
var projectData = require('./api-responses/project.json');

describe('behance-api', function() {
	
	/**
	 * Be.buildUrl
	 */
	describe('URL Builder', function() {
		/**
		 * Validate that the url structure matches what the Behance API will expect.
		 */
		it('Should create a valid url from endpoint and query inputs', function(done) {
			var result = Be.buildUrl('projects', {q: 'motorcycle', time: 'month'});
			expect(result).to.equal('https://api.behance.net/v2/projects?q=motorcycle&time=month&client_id=' + key);
			done();
		});
	});

	/**
	 * Be.requestHandler
	 */
	describe('Request Handler', function() {
	 	beforeEach(function() {
	 		nock('https://api.behance.net')
	 			.get('/v2/fields')
	 			.query({client_id: key})
	 			.reply(200, userProjectsData);
	 	});
	 	/**
	 	 * Test request is being made to the API
	 	 */
	 	it('Return a successful response from the API', function(done) {
	 		Be.requestHandler('https://api.behance.net/v2/fields?client_id=' + key, function(err, res, body) {
	 			expect(body.http_code).to.equal(200);
	 			done();
	 		});
	 	});
	});

	/**
	 * Be.fields
	 */
	describe('Be.fields', function() {
	  	beforeEach(function() {
	  		nock('https://api.behance.net')
	  			.get('/v2/fields')
	  			.query({client_id: key})
	  			.reply(200, fieldsData);
	  	});
	  	/**
	  	 * Test that fields responds Correctly
	  	 */
	  	it('Return an object that contains field and popular arrays', function(done) {
	  		Be.fields(function(err, res, body) {
	  			expect(body).to.have.property('fields');
	  			expect(body).to.have.property('popular');
	  			done();
	  		});
	  	});
	});

	/**
	 * Be.projects
	 * Note: Using Be.projects but this should cover all endpoints that only accept Options
	 */
	describe('Be.projects', function() {
	  	beforeEach(function() {
	  		nock('https://api.behance.net')
	  			.get('/v2/projects')
	  			.query({q: 'motorcycle', client_id: key})
	  			.reply(200, projectsData);
	  	});
	  	/**
	  	 * Test that endpoints that use options respond correctly
	  	 */
	  	it('Return an object that contains projects array', function(done) {
	  		Be.projects({q: 'motorcycle'}, function(err, res, body) {
	  			expect(body).to.have.property('projects');
	  			done();
	  		});
	  	});
	});

	/**
	 * Be.project
	 * Note: Using Be.project but this should cover all endpoints that only accept an ID
	 */
	 describe('Be.project', function() {
	  	beforeEach(function() {
	  		nock('https://api.behance.net')
	  			.get('/v2/projects/4889175')
	  			.query({client_id: key})
	  			.reply(200, projectData);
	  	});
	  	/**
	  	 * Test that endpoints with IDs respond correctly
	  	 */
	  	it('Return an object that contains project information', function(done) {
	  		Be.project('4889175', function(err, res, body) {
	  			expect(body).to.have.property('project');
	  			expect(body).to.have.deep.property('project.id', 4889175);
	  			done();
	  		});
	  	});
	});

	 /**
	 * Be.userProjects
	 * Note: Using Be.userProjects but this should cover all endpoints that only require both an ID and Options
	 */
	 describe('Be.project', function() {
	  	beforeEach(function() {
	  		nock('https://api.behance.net')
	  			.get('/v2/users/edmendoza3/projects')
	  			.query({sort: 'appreciations', client_id: key})
	  			.reply(200, userProjectsData);
	  	});
	  	/**
	  	 * Test that endpoints with IDs and Options respond correctly
	  	 */
	  	it('Return an object that contains project information', function(done) {
	  		Be.userProjects('edmendoza3', {sort: 'appreciations'}, function(err, res, body) {
	  			expect(body).to.have.property('projects');
	  			done();
	  		});
	  	});
	});
});